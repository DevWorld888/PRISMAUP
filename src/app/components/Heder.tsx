'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


import { Instagram, Facebook, Phone, Menu, X, } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  font-[Roboto] z-50">
      {/* Barra superior  */}
      <div className="bg-[#13233A] text-white text-sm py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center tracking-wider uppercase">

        <div className="flex gap-4 text-white text-lg">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:scale-110 transition" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:scale-110 transition" />
          </a>
          <a href="tel:0416608482" target="_blank" rel="noopener noreferrer" aria-label="Phone">
            <Phone className="w-5 h-5 hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* Barra principal */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">

        {/* LOGO IZQUIERDA */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo1.png"
            alt="Prisma Coatings Logo"
            width={130}
            height={130}
            priority
          />
        </Link>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex gap-8 text-[#13233A] font-medium text-lg">
          <Link href="/" className="relative group text-[#D61C1C]">
            <span className="pb-1">Home</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-100 transition-transform duration-500" />
          </Link>

          <Link href="/services" className="relative group hover:text-[#D61C1C]">
            <span className="pb-1">Services</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>

          <Link href="/gallery" className="relative group hover:text-[#D61C1C]">
            <span className="pb-1">Gallery</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          <Link href="/contact" className="relative group hover:text-[#D61C1C]">
            <span className="pb-1">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          <Link href="/about" className="relative group hover:text-[#D61C1C]">
            <span className="pb-1">About us</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          <Link href="/blog" className="relative group hover:text-[#D61C1C]">
            <span className="pb-1">Blog</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </nav>

        {/* BOTÓN TELÉFONO */}
        <a
          href="tel:0416608482"
          className="hidden md:flex items-center gap-2 border border-black px-4 py-3  rounded-md bg-[#13233A] transition"
        >
          <Phone className="text-[#D61C1C] w-4 h-4" />
          <span className="text-sm text-white">0416608482</span>
        </a>

        {/* MENÚ HAMBURGUESA MÓVIL */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#13233A] text-2xl focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow animate-slideDown">
          <nav className="flex flex-col gap-4 text-[#13233A] font-medium text-lg">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About us</Link>
            <Link href="/blog">Blog</Link>
            <a
              href="tel:0416608482"
              className="flex items-center gap-2 border border-black px-4 py-3  rounded-md bg-[#13233A] transition"
            >
              <Phone className="text-[#D61C1C] w-4 h-4" />
              <span className="text-sm text-white">0416608482</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

