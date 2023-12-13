import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold text-lg">Logo</Link>
          
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar