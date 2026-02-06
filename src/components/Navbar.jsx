"use client";
import { useState } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-extrabold text-xl tracking-wide flex gap-2 justify-center items-center"
        >
          <img src="/images/logo.png" alt="" className="object-contain h-14" />
          <span className={`${playfair.className}  text-[#000000]`}>
            Thandapra
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-black font-semibold text-sm">
          <Link href="#home">Home</Link>
          <Link href="#services">Services</Link>
          {/* <Link href="#calculator">Calculator</Link> */}
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        {/* CTA */}
        <a
          href="tel:8714742635"
          className="hidden md:inline-flex bg-[#FDB913] px-5 py-2 rounded-full font-bold hover:scale-105 transition"
        >
          Call Now
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-black"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col text-black p-4 gap-4 font-semibold">
            <Link onClick={() => setOpen(false)} href="#home">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="#services">
              Services
            </Link>
            {/* <Link onClick={() => setOpen(false)} href="#calculator">
              Calculator
            </Link> */}
            <Link onClick={() => setOpen(false)} href="#about">
              About
            </Link>
            <Link onClick={() => setOpen(false)} href="#contact">
              Contact
            </Link>
            <a
              href="tel:8714742635"
              className="bg-[#FDB913] text-center py-2 rounded-full"
            >
              Call 8714 742 635
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
