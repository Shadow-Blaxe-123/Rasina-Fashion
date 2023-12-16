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
          <Link href="#home">Home</Link>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <Link href="#sevices-section">About Us</Link>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <label htmlFor="products">Products </label>

          <select name="products" id="products">
            <option value="Denim">Products</option>
            <option value="Denim">Denim</option>
            <option value="Denim">Denim</option>
            <option value="Denim">Denim</option>
            <option value="Denim">Denim</option>
          </select>
        </li>
        <li className="md:m-8 m-2 text-xs md:text-xl px-2 py-2 inline hover:text-green-500 rounded-2xl">
          <Link href="#contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
