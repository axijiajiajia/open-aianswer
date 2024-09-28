'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const pathname = usePathname();

  const isEnglish = pathname === '/';

  return (
    <div className="absolute top-4 right-4 z-20">
      <button 
        onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
        className="bg-gray-700 hover:bg-gray-600 text-white font-semibold p-2 rounded inline-flex items-center"
        aria-label={isEnglish ? 'Change Language' : '更改语言'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{isEnglish ? 'English' : '中文'}</span>
      </button>
      {isLanguageMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
          <Link href="/" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">English</Link>
          <Link href="/en" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">简体中文</Link>
        </div>
      )}
    </div>
  )
}