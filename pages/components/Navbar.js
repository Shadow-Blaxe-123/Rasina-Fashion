import React from "react";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* Your logo or site name */}
                <Link href="/">
                  <a className="text-white">Your Logo</a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Desktop navigation */}
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <a className="text-white hover:text-gray-300">Home</a>
                </Link>
                <Link href="/about">
                  <a className="text-white hover:text-gray-300">About</a>
                </Link>
                {/* Products dropdown */}
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
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
                    <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                      <div className="py-1">
                        <Link href="/products">
                          <a className="block px-4 py-2 text-white hover:text-gray-300">
                            All Products
                          </a>
                        </Link>
                        <Link href="/products/category1">
                          <a className="block px-4 py-2 text-white hover:text-gray-300">
                            Category 1
                          </a>
                        </Link>
                        <Link href="/products/category2">
                          <a className="block px-4 py-2 text-white hover:text-gray-300">
                            Category 2
                          </a>
                        </Link>
                        {/* Add more dropdown links as needed */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Hamburger menu for mobile */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
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
          </div>
        </div>
        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/">
                <a className="text-white block hover:text-gray-300">Home</a>
              </Link>
              <Link href="/about">
                <a className="text-white block hover:text-gray-300">About</a>
              </Link>
              {/* Mobile version of Products dropdown */}
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsOpen(!isOpen)}
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
                  <div className="absolute z-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                    <div className="py-1">
                      <Link href="/products">
                        <a className="block px-4 py-2 text-white hover:text-gray-300">
                          All Products
                        </a>
                      </Link>
                      <Link href="/products/category1">
                        <a className="block px-4 py-2 text-white hover:text-gray-300">
                          Category 1
                        </a>
                      </Link>
                      <Link href="/products/category2">
                        <a className="block px-4 py-2 text-white hover:text-gray-300">
                          Category 2
                        </a>
                      </Link>
                      {/* Add more mobile dropdown links as needed */}
                    </div>
                  </div>
                )}
              </div>
              {/* End of mobile version of Products dropdown */}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
