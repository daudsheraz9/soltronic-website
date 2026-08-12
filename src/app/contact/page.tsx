"use client";

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  { question: "What areas do you serve?", answer: "We provide services primarily in Lahore and surrounding regions, but we can accommodate larger projects nationwide." },
  { question: "How can I get a free quote?", answer: "You can use the 'Get Free Quote' button, call our support number, or fill out the contact form below with your requirements." },
  { question: "What is the typical project timeline?", answer: "For residential projects, installation usually takes 1-3 days. Commercial projects vary based on size and complexity, generally taking 2-4 weeks." },
];

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <>
      {/* TopNavBar */}


      <main className="pt-0">

        {/* Hero Section */}
        <section className="relative w-full h-[360px] flex items-start pt-8 md:pt-10">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_PTY2YnW283Z69oO8AxJUh_IUvgJwAqPlHB18U8gP0mSwvHdAid0JamS_6P9uvzIsuuuQAiX3JVpeDe5yAsVOwXgkcVzB9IoN5nf97yDLGAko56mxOmcIodsecN6VsjgK8jxC9RAwJMh4EPlg7CwgFcZgm9HSkCjfTMYpy4z_eDrcVMOkFJLbi8wLJ-gxtuRbePFalzzuW--0kKpXwrOG-SWjgWKVjRtB28EZaz0kFtZfFjiqM3rK')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-xl">
              <span className="text-primary font-label-md text-label-md uppercase tracking-widest mb-4 block">GET IN TOUCH</span>
              <h1 className="font-display text-display text-on-surface mb-6">We'd Love to<br />Hear From You</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Have a question, project in mind, or need expert advice? Our team is ready to assist you with the best solar solutions tailored to your needs.
              </p>
              <div className="flex items-center gap-2 text-primary font-label-md text-label-md">
                <span className="material-symbols-outlined" data-icon="bolt">bolt</span>
                Powering Clean Energy Together
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="max-w-container-max mx-auto px-gutter -mt-16 relative z-20 mb-section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4 hover:-translate-y-1 transition-transform border border-outline-variant/30">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined" data-icon="call">call</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-[18px] text-on-surface mb-1">Call Us</h3>
                <p className="font-body-md text-sm text-on-surface-variant">+92 327 7770090</p>
                <p className="font-body-md text-xs text-outline mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
              <span className="material-symbols-outlined text-secondary-container" data-icon="arrow_forward">arrow_forward</span>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4 hover:-translate-y-1 transition-transform border border-outline-variant/30">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined" data-icon="mail">mail</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-[18px] text-on-surface mb-1">Email Us</h3>
                <p className="font-body-md text-sm text-on-surface-variant">info@soltronicsenergy.com</p>
                <p className="font-body-md text-xs text-outline mt-1">We reply within 24 hours</p>
              </div>
              <span className="material-symbols-outlined text-secondary-container" data-icon="arrow_forward">arrow_forward</span>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4 hover:-translate-y-1 transition-transform border border-outline-variant/30">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined" data-icon="location_on">location_on</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-[18px] text-on-surface mb-1">Our Office</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Soltronic Energy HQ</p>
                <p className="font-body-md text-xs text-outline mt-1">91K J Block Johar Town Lahore</p>
              </div>
              <span className="material-symbols-outlined text-secondary-container" data-icon="arrow_forward">arrow_forward</span>
            </div>
          </div>
        </section>

        {/* Message & Map Section */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Area */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 h-[250px] relative">
                <iframe
                  title="Soltronic Energy Location"
                  src="https://maps.google.com/maps?q=91K%20J%20Block%20Johar%20Town%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Assistance Box */}
              <div className="bg-surface-container-low rounded-xl p-4 flex items-center gap-4 border border-outline-variant/50">
                <div className="shrink-0">
                  <img alt="Support agent" className="w-16 h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwQQD0iO59drIWnv1Ck2dOOQji7LtlA1CSihY6OiwMB8eDyKqwbKpXr6dn0RI_OpDuKneXgo-DPESF4eqVAAmDGy3tZRHd9Xu5aJM2x-q_bF7wiHpL9fjOZxfEB7o2kx6jkXqqGIV-RkPPjMFptXUAmu8Qk-uQJRXd03DYb348H61v5bvsWTfAtYjOIJbj0tkLnAP2zsG2P-QzSMIeRwNtBqVawmvoHFhYjVtZHDg-lolmPaTA0w7G" />
                </div>
                <div>
                  <h4 className="font-headline-md text-[18px] text-on-surface mb-1">Need Immediate Assistance?</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mb-2">Chat with our experts on WhatsApp for quick support and answers.</p>
                  <a href="https://wa.me/923277770090" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-label-md text-label-md border border-primary px-4 py-2 rounded-full hover:bg-primary/5 transition-colors inline-flex w-fit">
                    <span className="material-symbols-outlined" data-icon="chat">chat</span>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
              <h2 className="font-headline-lg text-[24px] text-on-surface mb-1 flex items-center gap-2">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant mb-4">Fill out the form below and our team will get back to you shortly.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-sm text-on-surface mb-1">Full Name</label>
                    <input className="w-full border border-outline-variant rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Full Name" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-md text-sm text-on-surface mb-1">Email Address</label>
                    <input className="w-full border border-outline-variant rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Email Address" type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-sm text-on-surface mb-1">Phone Number</label>
                    <input className="w-full border border-outline-variant rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Phone Number" type="tel" />
                  </div>
                  <div>
                    <label className="block font-label-md text-sm text-on-surface mb-1">Subject</label>
                    <select className="w-full border border-outline-variant rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none bg-white">
                      <option>Select a Subject</option>
                      <option>General Inquiry</option>
                      <option>Sales</option>
                      <option>Support</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-sm text-on-surface mb-1">Your Message</label>
                  <textarea className="w-full border border-outline-variant rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" placeholder="Type your message here..." rows={3}></textarea>
                </div>
                <button className="bg-secondary-container text-white px-6 py-2 rounded-full font-label-md text-sm flex items-center gap-2 hover:bg-secondary-container/90 transition-all shadow-sm" type="button">
                  Send Message <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Business Hours & FAQ Section */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Business Hours */}
            <div>
              <div className="mb-6">
                <h2 className="font-headline-lg text-[24px] text-on-surface mb-1">Business <span className="text-primary">Hours</span></h2>
                <p className="font-body-md text-sm text-on-surface-variant">We are here to serve you during the following hours.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-label-md text-sm text-on-surface mb-1">Monday - Friday</h4>
                    <p className="font-body-md text-sm text-primary font-bold">9:00 AM - 6:00 PM</p>
                  </div>
                  <span className="material-symbols-outlined text-primary/40 text-lg" data-icon="calendar_today">calendar_today</span>
                </div>

                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-label-md text-sm text-on-surface mb-1">Saturday</h4>
                    <p className="font-body-md text-sm text-primary font-bold">9:00 AM - 2:00 PM</p>
                  </div>
                  <span className="material-symbols-outlined text-primary/40 text-lg" data-icon="calendar_today">calendar_today</span>
                </div>

                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-label-md text-sm text-on-surface mb-1">Sunday</h4>
                    <p className="font-body-md text-sm text-secondary">Closed</p>
                  </div>
                  <span className="material-symbols-outlined text-primary/40 text-lg" data-icon="calendar_today">calendar_today</span>
                </div>

                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-label-md text-sm text-on-surface mb-1">Public Holidays</h4>
                    <p className="font-body-md text-sm text-secondary">Closed</p>
                  </div>
                  <span className="material-symbols-outlined text-primary/40 text-lg" data-icon="calendar_today">calendar_today</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="font-headline-lg text-[24px] text-on-surface mb-1">Frequently Asked <span className="text-primary">Questions</span></h2>
              <p className="font-body-md text-sm text-on-surface-variant mb-6">Quick answers to common inquiries.</p>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-outline-variant/30 rounded-lg bg-surface-container-lowest overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-3 flex justify-between items-center text-left"
                    >
                      <span className="font-label-md text-sm text-on-surface">{faq.question}</span>
                      <span className="material-symbols-outlined text-primary text-lg" data-icon={openFaq === idx ? "remove" : "add"}>
                        {openFaq === idx ? "remove" : "add"}
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="px-3 pb-3 font-body-md text-sm text-on-surface-variant">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


      </main>

    </>
  );
}
