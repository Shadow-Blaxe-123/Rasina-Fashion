import React from "react";
// components/Navbar.js

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Your logo or site name */}

              <Link href="/" className="text-white">
                Your Logo
              </Link>
            </div>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
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
          {/* Navigation links */}
          <div className={`${isOpen ? "block" : "hidden"} md:block`}>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact Us</Link>
              {/* Products dropdown */}
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleNav}
                  type="button"
                  className="text-white hover:text-gray-300"
                >
                  Products
                  <svg
                    className="h-5 w-5 inline-block ml-1 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-8-8 1.5-1.5L10 9.5l6.5-6.5L18 4l-8 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg w-24">
                    <div className="py-1 flex flex-col m-1 p-3">
                      <Link href="/products">All</Link>
                      <Link href="/products/category1">Category</Link>
                      <Link href="/products/category2">Category</Link>
                      {/* Add more mobile dropdown links as needed */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
