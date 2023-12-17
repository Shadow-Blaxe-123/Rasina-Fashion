import React from "react";
// components/Navbar.js

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex fixed font-bold w-full h-20 top-0 items-center nav-overlay text-white z-10">
        <li className=" hidden md:block">
          <Image
            width={200}
            height={48}
            className="h-12 px-3"
            src="/snip.png"
            alt="logo"
          />
          {/* <p>logo</p> */}
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <Link href="/">Home</Link>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <Link href={"/about"}>About Us</Link>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <div className="relative inline-block dropdown">
            <div className="flex items-center cursor-pointer">
              <span>Products</span>
              <span className="arrow"></span>
            </div>
            {/* <!-- Dropdown Menu --> */}
            <div className="dropdown-menu w-32 text-xs bg-white shadow-lg">
              <Link href="#" className="block px-4 py-2  hover:bg-gray-600">
                Product 1
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-600">
                Product 2
              </Link>
              {/* <!-- Add more dropdown items as needed --> */}
            </div>
          </div>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
