"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  // Scroll-based navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close menus
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    setUserMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 mx-auto ${
        scrolled
          ? "top-4 w-[92%] max-w-7xl bg-[#07070e]/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-purple-950/25 px-2"
          : "top-0 w-full bg-transparent border-b border-white/0 px-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2" onClick={closeAll}>
          <img
            src="/assets/images/logo.png"
            alt="Vape Pi Logo"
            className="w-12 h-auto transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-bold gradient-text hidden sm:inline">
            Vape Pi
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/#best-deals", label: "Best Deals" },
            { href: "/#membership", label: "Membership" },
            { href: "/#new-releases", label: "New Releases" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div ref={searchRef} className="relative">
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMenuOpen(false);
                setUserMenuOpen(false);
              }}
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </button>

            {searchOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 glass rounded-xl p-4 animate-slide-down">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const q = (e.target as HTMLInputElement).value;
                      if (q) {
                        window.location.href = `/products?q=${encodeURIComponent(q)}`;
                        setSearchOpen(false);
                      }
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 gradient-primary rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse-badge">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>

          {/* User Menu */}
          <div ref={userRef} className="relative">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => {
                    setUserMenuOpen(!userMenuOpen);
                    setMenuOpen(false);
                    setSearchOpen(false);
                  }}
                  className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                  aria-label="User menu"
                >
                  {user?.name.charAt(0).toUpperCase()}
                </button>

                {userMenuOpen && (
                  <div className="absolute top-full right-0 mt-3 w-56 glass rounded-xl overflow-hidden animate-slide-down">
                    <div className="px-5 py-3 border-b border-white/5">
                      <p className="text-sm font-medium text-white truncate">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user?.email}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-amber-400 text-xs">★</span>
                        <span className="text-xs text-amber-400">
                          {user?.memberPoints} Points
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/cart"
                      className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                      onClick={closeAll}
                    >
                      My Cart
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        closeAll();
                      }}
                      className="block w-full text-left px-5 py-2.5 text-sm text-red-400 hover:bg-white/10 transition-all"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                href="/auth/login"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-purple-500/30 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div ref={menuRef} className="lg:hidden relative">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
                setUserMenuOpen(false);
              }}
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                )}
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 glass rounded-xl overflow-hidden animate-slide-down">
                {[
                  { href: "/", label: "Home" },
                  { href: "/products", label: "Products" },
                  { href: "/#best-deals", label: "Best Deals" },
                  { href: "/#membership", label: "Membership" },
                  { href: "/#new-releases", label: "New Releases" },
                  { href: "/cart", label: `Cart (${totalItems})` },
                  ...(!isAuthenticated
                    ? [{ href: "/auth/login", label: "Sign In" }]
                    : []),
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 border-b border-white/5 last:border-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
