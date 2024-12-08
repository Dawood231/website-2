"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5"; // Search Icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Food<span className="text-orange-500">tuck</span>
        </a>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href={'/'} className="hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/menu-page" className="hover:text-orange-500 transition">
              Menu
            </Link>
            <Link href="./blog-page" className="hover:text-orange-500 transition">
              Blog
            </Link>
            <Link href="./chef-page" className="hover:text-orange-500 transition">
              Chef
            </Link>
            <Link href="./about-page" className="hover:text-orange-500 transition">
              About
            </Link>
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
            <Link href="./signin-page" className="hover:text-orange-500 transition">
              Sign in
            </Link>
            <Link href="./signup-page" className="hover:text-orange-500 transition">
              Sign Up
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full w-[200px] lg:w-[250px] ml-8">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
            />
            <IoSearch className="text-orange-500 ml-2" />
          </div>

          {/* Shopping Bag Icon */}
          <Link href='./cart-page'>
          <div className="ml-8">
            <PiHandbagBold className="text-white text-2xl hover:text-orange-500 transition" />
          </div>
          </Link>
        </div>

        {/* Hamburger Icon (Small Screens) */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "≡"}
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-black text-white mt-4 space-y-4 px-6`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
        <Link href={'/'} className="hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/menu-page" className="hover:text-orange-500 transition">
              Menu
            </Link>
            <Link href="./blog-page" className="hover:text-orange-500 transition">
              Blog
            </Link>
            <Link href="./chef-page" className="hover:text-orange-500 transition">
              Chef
            </Link>
            <Link href="./about-page" className="hover:text-orange-500 transition">
              About
            </Link>
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
            <Link href="./signin-page" className="hover:text-orange-500 transition">
              Sign in
            </Link>
            <Link href="./signup-page" className="hover:text-orange-500 transition">
              Sign Up
            </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full w-full">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
          />
          <IoSearch className="text-orange-500 ml-2" />
        </div>

        {/* Shopping Bag Icon */}
        <div>
          <PiHandbagBold className="text-white text-2xl hover:text-orange-500 transition" />
        </div>
      </div>
    </nav>
  );
}
