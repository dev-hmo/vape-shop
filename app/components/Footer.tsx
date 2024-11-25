"use client"; // Add this directive to make the component a Client Component

import { CopyrightIcon, Facebook, Instagram } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [language, setLanguage] = useState("en"); // State to manage selected language

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    console.log("Language changed to:", e.target.value);
  };

  return (
    <footer className="bg-white text-slate-800 py-8 px-8 w-full">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start space-y-8 sm:space-y-0">
        {/* Customer Services */}
        <div>
          <p className="font-bold text-lg mb-3">Customer Services</p>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-yellow-500">
                Terms & Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-500">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Language Selector */}
        <div>
          <p className="font-bold text-lg">Change Language</p>
          <select
            className="bg-gray-800 text-white p-2 rounded"
            value={language}
            onChange={handleLanguageChange} // Fixed: This now works as it's in a Client Component
          >
            <option value="en">English</option>
            <option value="my">Myanmar</option>
            <option value="es">Español</option>
          </select>
        </div>

        {/* Contact Us */}
        <div>
          <p className="font-bold text-lg">Contact Us</p>
          <p>Email: support@example.com</p>
          <p>Phone: +95-123456789</p>
        </div>

        {/* Download Our App */}
        <div>
          <p className="font-bold text-lg">Download Our App</p>
          <img
            src="/assets/images/qr-code.png" // Replace with your QR code path
            alt="Download QR Code"
            className="w-202 h-280"
          />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-8">
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-yellow-500">
            <Facebook />
          </Link>
          <Link href="#" className="hover:text-yellow-500">
            <Instagram />
          </Link>
          <Link href="#" className="hover:text-yellow-500">
            Telegram
          </Link>
        </div>
      </div>
      <p className="justify-center text-center mt-4 gap-2 flex">
        <CopyrightIcon /> 2023 C by D Co., Ltd. All rights reserved.
      </p>
    </footer>
  );
}
