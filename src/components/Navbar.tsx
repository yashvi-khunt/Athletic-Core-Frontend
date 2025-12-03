"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "ABOUT", href: "/#about" },
  { label: "SERVICES", href: "/#services" },
  { label: "PLANS", href: "/#plans" },
  { label: "ONLINE PROGRAMS", href: "/#online-programs" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header apex-header">
      <div className="container">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* LEFT: Logo / Brand */}
          <Link
            href="/"
            className="apex-logo flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="flex flex-col leading-none uppercase tracking-[0.28em]">
              <span className="text-xs md:text-sm font-bold">APEX</span>
              <span className="text-xs md:text-sm font-bold mt-[2px]">
                SPORTS
              </span>
              <span className="text-xs md:text-sm font-bold mt-[2px]">
                PSYCHOLOGY
              </span>
            </div>
            <span className="apex-logo-diamond" aria-hidden="true" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-[0.8rem] tracking-[0.28em] font-semibold uppercase">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="apex-nav-link inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Log In – icon + text */}
            <Link
              href="/login"
              className="apex-login flex items-center gap-3 ml-3"
            >
              <span className="apex-login-avatar">
                {/* simple user icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.02-6 4.5V20h12v-1.5C18 16.02 15.31 14 12 14z" />
                </svg>
              </span>
              <span className="apex-login-text">Log In</span>
            </Link>
          </nav>

          {/* MOBILE: Menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center rounded-full border border-white/60 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-white"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* MOBILE: dropdown */}
        {isOpen && (
          <nav className="md:hidden pb-3">
            <div className="mt-2 rounded-2xl bg-black/90 px-5 py-4">
              <ul className="flex flex-col gap-3 text-[0.78rem] tracking-[0.22em] font-semibold uppercase">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/login"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="apex-login-avatar">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.02-6 4.5V20h12v-1.5C18 16.02 15.31 14 12 14z" />
                      </svg>
                    </span>
                    <span className="apex-login-text">Log In</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
