import React from "react";
// components/Navbar.js

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex fixed font-bold w-full h-20 top-0 items-center nav-overlay text-white z-10">
        <li className="h-12 mt-3 px-1 py-2 hidden md:block">
          {/* <img src="logo.png" alt="logo" /> */}
          <p>logo</p>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <Link href="/">Home</Link>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <Link href="#sevices-section">About Us</Link>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <div class="relative inline-block dropdown">
            <div class="flex items-center cursor-pointer">
              <span>Products</span>
              <span class="arrow"></span>
            </div>
            {/* <!-- Dropdown Menu --> */}
            <div class="dropdown-menu w-32 text-xs bg-white shadow-lg">
              <Link href="#" class="block px-4 py-2  hover:bg-gray-600">
                Product 1
              </Link>
              <Link href="#" class="block px-4 py-2 hover:bg-gray-600">
                Product 2
              </Link>
              {/* <!-- Add more dropdown items as needed --> */}
            </div>
          </div>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <Link href="#contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
