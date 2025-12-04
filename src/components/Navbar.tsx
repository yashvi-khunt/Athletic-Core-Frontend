"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/programs", label: "Programs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* You can replace this with your actual logo */}
              <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center font-black text-xl text-black transform group-hover:scale-110 transition-transform">
                C
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none">
                <span className="text-lime-400">CORE</span>
                <span className="text-slate-900"> ATHLETE</span>
              </span>
              <span className="text-[0.6rem] text-slate-500 font-medium tracking-widest uppercase">
                Training & Performance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-lime-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/book" className="btn btn-primary text-sm">
              Book Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-lime-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-lime-400 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary text-sm w-full text-center"
              >
                Book Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
