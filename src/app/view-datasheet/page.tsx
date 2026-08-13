"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';

function ViewPdf() {
  const searchParams = useSearchParams();
  const file = searchParams.get('file');
  const [fullUrl, setFullUrl] = useState('');

  useEffect(() => {
    if (file) {
      // Google Viewer requires an absolute public URL
      setFullUrl(`${window.location.origin}${file}`);
    }
  }, [file]);

  if (!file) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <p className="text-xl text-gray-600 mb-4">No datasheet specified.</p>
        <Link href="/products" className="text-primary hover:underline">Go back to products</Link>
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col bg-gray-100">
      <div className="bg-[#107022] text-white p-4 flex justify-between items-center shadow-md z-10 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => window.close()} className="hover:text-gray-300 transition-colors" aria-label="Close tab">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h1 className="font-semibold truncate">Soltronic Datasheet Viewer</h1>
        </div>
        <div className="flex gap-3">
          <a 
            href={file} 
            download
            className="bg-white text-[#107022] px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm"
          >
            <i className="fa-solid fa-download"></i> Direct Download
          </a>
        </div>
      </div>
      
      {/* Google PDF Viewer (Requires public URL, will not load locally) */}
      {fullUrl.includes('localhost') ? (
        <div className="flex flex-col items-center justify-center flex-grow bg-white p-8 text-center">
          <i className="fa-regular fa-file-pdf text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Local Development Mode</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            The Google PDF Viewer requires a public internet URL to load the document. Since you are running on localhost, Google cannot access the file.
          </p>
          <a href={file} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
            Click here to open the PDF directly
          </a>
        </div>
      ) : (
        <iframe 
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(fullUrl)}&embedded=true`}
          className="w-full flex-grow border-none"
          title="Google PDF Viewer"
        />
      )}
    </div>
  );
}

export default function ViewDatasheetPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen bg-gray-50 text-gray-500">Loading Viewer...</div>}>
      <ViewPdf />
    </Suspense>
  );
}
