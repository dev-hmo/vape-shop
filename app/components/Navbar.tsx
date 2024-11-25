"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent px-5">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo Section */}
        <Link href="/">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="w-16 h-auto"
          />
        </Link>
        {/* Icons Section */}
        <div className="flex space-x-4 md:space-x-6">
          {/* Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </button>

          {/* Cart Icon */}
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 4h15M10 21a1 1 0 102 0m4 0a1 1 0 102 0"
              />
            </svg>
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-black text-white rounded-lg shadow-lg p-4 w-48">
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#best-deals"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Best Deals
            </Link>
            <Link
              href="#membership"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Membership
            </Link>
            <Link
              href="#new-releases"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
              onClick={() => setMenuOpen(false)}
            >
              New Releases
            </Link>
          </div>
        )}

        {/* Search Box */}
        {searchOpen && (
          <div className="absolute top-16 right-4 bg-black text-white rounded-lg shadow-lg p-4 w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
