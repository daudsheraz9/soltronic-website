"use client";

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

function SigninContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'signin';

  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  
  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  
  // OTP Verification state for Sign Up
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otpToken, setOtpToken] = useState('');

  // Status states
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(searchParams.get('error') || null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const supabase = createClient();

  // 1. Google OAuth
  const handleGoogleAuth = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to initialize Google Sign In.');
      setLoading(false);
    }
  };

  // 2. Email Sign In
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.session) {
        setSuccessMsg('Successfully signed in! Redirecting...');
        setTimeout(() => {
          router.push('/');
          router.refresh();
        }, 1000);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Invalid login credentials.');
    } finally {
      setLoading(false);
    }
  };

  // 3. Email Sign Up (Trigger Code Verification)
  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !fullName) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      // If Supabase sends confirmation email/code, prompt for OTP
      setShowOtpScreen(true);
      setSuccessMsg(`Verification code sent to ${email}. Please enter the code below.`);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to create account.');
    } finally {
      setLoading(false);
    }
  };

  // 4. Verify OTP Code
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpToken || otpToken.length < 6) {
      setErrorMsg('Please enter a valid 6-digit code.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otpToken.trim(),
        type: 'signup',
      });

      if (error) {
        // Fallback check if token type is email
        const { error: error2 } = await supabase.auth.verifyOtp({
          email,
          token: otpToken.trim(),
          type: 'email',
        });
        if (error2) throw error2;
      }

      setSuccessMsg('Email verified successfully! Welcome to Soltronic Energy.');
      setTimeout(() => {
        router.push('/');
        router.refresh();
      }, 1200);
    } catch (err: any) {
      setErrorMsg(err.message || 'Invalid or expired verification code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f4f7fb] via-emerald-50/30 to-[#e8f5e9]/50 relative overflow-hidden">
      
      {/* Background Spatial Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#107022]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-md w-full space-y-6 bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative z-10">
        
        {/* Header Logo & Vibe */}
        <div className="text-center">
          <Link href="/" className="inline-block relative w-40 h-14 mb-2">
            <Image src="/logo.png" alt="Soltronic Energy" fill sizes="180px" className="object-contain" priority />
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            {showOtpScreen
              ? 'Verify Your Email'
              : mode === 'signin'
              ? 'Welcome Back'
              : 'Create Your Account'}
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            {showOtpScreen
              ? `We sent a 6-digit code to ${email}`
              : 'Manage your solar energy solutions and saved selections.'}
          </p>
        </div>

        {/* Tab Switcher (Only if not on OTP step) */}
        {!showOtpScreen && (
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => {
                setMode('signin');
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'signin'
                  ? 'bg-white text-[#107022] shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMode('signup');
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'signup'
                  ? 'bg-white text-[#107022] shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Error / Success Alerts */}
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs flex items-center gap-2 animate-fadeIn">
            <span className="material-symbols-outlined text-base text-red-500">error</span>
            <span>{errorMsg}</span>
          </div>
        )}
        {successMsg && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-xs flex items-center gap-2 animate-fadeIn">
            <span className="material-symbols-outlined text-base text-green-600">check_circle</span>
            <span>{successMsg}</span>
          </div>
        )}

        {/* Google OAuth Option (Only if not on OTP step) */}
        {!showOtpScreen && (
          <>
            <button
              onClick={handleGoogleAuth}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 py-3 px-4 rounded-xl text-xs font-bold shadow-sm hover:shadow transition-all duration-200 disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{mode === 'signin' ? 'Sign in with Google' : 'Sign up with Google'}</span>
            </button>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-3 text-gray-400 text-[11px] font-medium uppercase tracking-wider">
                Or email
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
          </>
        )}

        {/* OTP Code Input Screen */}
        {showOtpScreen ? (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Enter 6-Digit Verification Code
              </label>
              <input
                type="text"
                maxLength={6}
                value={otpToken}
                onChange={(e) => setOtpToken(e.target.value)}
                placeholder="123456"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-center text-xl font-mono font-bold tracking-widest text-[#107022] outline-none focus:border-[#107022] focus:ring-2 focus:ring-[#107022]/20 transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#107022] hover:bg-[#0e5c1c] text-white py-3 rounded-xl text-xs font-bold shadow-md transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
              ) : (
                'Verify & Complete Sign Up'
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowOtpScreen(false);
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className="w-full text-center text-xs text-gray-500 hover:text-gray-800"
            >
              &larr; Back to Sign Up
            </button>
          </form>
        ) : (
          /* Sign In / Sign Up Form */
          <form onSubmit={mode === 'signin' ? handleEmailSignIn : handleEmailSignUp} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#107022] focus:ring-2 focus:ring-[#107022]/20 transition"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#107022] focus:ring-2 focus:ring-[#107022]/20 transition"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-bold text-gray-700">Password</label>
                {mode === 'signin' && (
                  <a href="#" className="text-[11px] text-[#107022] font-semibold hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#107022] focus:ring-2 focus:ring-[#107022]/20 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#107022] hover:bg-[#0e5c1c] text-white py-3 rounded-xl text-xs font-bold shadow-md transition-all duration-200 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
              ) : mode === 'signin' ? (
                'Sign In to Soltronic'
              ) : (
                'Send Verification Code'
              )}
            </button>
          </form>
        )}

        <div className="text-center text-[11px] text-gray-400 pt-2">
          By continuing, you agree to Soltronic Energy’s{' '}
          <Link href="/about" className="text-gray-600 underline">Terms of Service</Link>{' '}
          and{' '}
          <Link href="/about" className="text-gray-600 underline">Privacy Policy</Link>.
        </div>

      </div>
    </div>
  );
}

export default function SigninPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#107022] border-t-transparent"></div>
      </div>
    }>
      <SigninContent />
    </Suspense>
  );
}
