"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import ThemeToggle from './ThemeToggle';
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'phone',
        event_label: 'header_phone_click',
      });
    }
  };

  return (
    <header className=" w-full font-[Roboto] z-50 bg-[var(--color-brand-accent)]  transition-colors duration-200">
      {/* Barra superior  */}
      {/* <div className="bg-[var(--color-brand-secondary)] dark:bg-gray-800 text-white text-sm py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center tracking-wider uppercase">

        <div className="flex gap-4 text-white text-lg">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:scale-110 transition" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:scale-110 transition" />
          </a>
          <a href="tel:0401508036" target="_blank" rel="noopener noreferrer" aria-label="Phone">
            <Phone className="w-5 h-5 hover:scale-110 transition" />
          </a>
        </div>
      </div> */}

      {/* Barra principal */}
      <div className="max-w-7xl mx-auto px-4 py-4  flex items-center justify-between relative">
        {/* LOGO IZQUIERDA */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo1.png"
            alt="Prisma Coatings Sydney - Professional Painting Services"
            width={130}
            height={130}
            priority
          />
        </Link>

        {/* MENÚ DESKTOP */}
        <nav
          className="hidden md:flex gap-8 text-[var(--color-secondary)] dark:text-[var(--color-secondary)]  font-medium text-lg"
          aria-label="Main navigation"
        >
          <Link href="/" className="relative group hover:text-[#C53030]">
            <span className="pb-1">Home</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>

          <Link href="/about" className="relative group hover:text-[#C53030]">
            <span className="pb-1">About Us</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="relative group hover:text-[#C53030] flex items-center gap-1 font-medium text-lg text-[var(--color-secondary)] focus:outline-none">
              <span className="pb-1">Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-52 pt-2 z-50">
                <div className="bg-white shadow-lg rounded-md py-2 w-56">
                  <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Services</p>
                  <Link
                    href="/painters-sydney"
                    className="block px-4 py-2 text-sm text-[#13233A] hover:bg-gray-100 hover:text-[#C53030] transition-colors"
                  >
                    House Painters Sydney
                  </Link>
                  <Link
                    href="/interior-painting-sydney"
                    className="block px-4 py-2 text-sm text-[#13233A] hover:bg-gray-100 hover:text-[#C53030] transition-colors"
                  >
                    Interior Painting Sydney
                  </Link>
                  <Link
                    href="/exterior-painting-sydney"
                    className="block px-4 py-2 text-sm text-[#13233A] hover:bg-gray-100 hover:text-[#C53030] transition-colors"
                  >
                    Exterior Painting Sydney
                  </Link>
                  <Link
                    href="/commercial-painting-sydney"
                    className="block px-4 py-2 text-sm text-[#13233A] hover:bg-gray-100 hover:text-[#C53030] transition-colors"
                  >
                    Commercial Painting Sydney
                  </Link>
                  <div className="my-1 border-t border-gray-100" />
                  <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Areas We Serve</p>
                  <Link
                    href="/painters-eastern-suburbs"
                    className="block px-4 py-2 text-sm text-[#13233A] hover:bg-gray-100 hover:text-[#C53030] transition-colors"
                  >
                    Eastern Suburbs
                  </Link>
                  <Link
                    href="/painters-inner-west"
                    className="block px-4 py-2 text-sm text-[#13233A] hover:bg-gray-100 hover:text-[#C53030] transition-colors"
                  >
                    Inner West
                  </Link>
                  <Link
                    href="/painters-inner-west-sydney"
                    className="block px-4 py-2 text-sm text-[#13233A] hover:bg-gray-100 hover:text-[#C53030] transition-colors"
                  >
                    Painters Inner West Sydney
                  </Link>

                  <Link
                    href="/painters-north-west-sydney"
                    className="block px-4 py-2 text-sm text-[#13233A] hover:bg-gray-100 hover:text-[#C53030] transition-colors"
                  >
                    North West Sydney
                  </Link>
                  <Link
                    href="/painters-sutherland-shire"
                    className="block px-4 py-2 text-sm text-[#13233A] hover:bg-gray-100 hover:text-[#C53030] transition-colors"
                  >
                    Sutherland Shire
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/gallery" className="relative group hover:text-[#C53030]">
            <span className="pb-1">Projects</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          <Link href="/contact" className="relative group text-[#C53030]">
            <span className="pb-1">Get a Free Quote</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-100 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          {/* <Link href="/about" className="relative group hover:text-[#D61C1C]">
            <span className="pb-1">About us</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link> */}

          {/* <Link href="/blog" className="relative group hover:text-[#D61C1C] ">
            <span className="pb-1">Blog</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link> */}
        </nav>
        {/* TOGGLE DE TEMA */}
        {/* <div className="flex items-center gap-4">
          <ThemeToggle />
        </div> */}

        {/* SECCIÓN BOTÓN Y EXPERIENCIA */}
        <div className="hidden md:flex flex-col items-center gap-2">
          {/* BOTÓN TELÉFONO */}
          <a
            href="tel:0401508036"
            onClick={handlePhoneClick}
            className="flex items-center gap-0 transition group"
            aria-label="Call Prisma Coatings Sydney"
          >
            {/* Círculo con ícono de teléfono */}
            <div className="w-12 h-12 rounded-full bg-[#D61C1C] flex items-center justify-center shadow-md z-10">
              <Phone className="text-white w-5 h-5" />
            </div>
            {/* Pill con número */}
            <div className="bg-[#D61C1C] text-white font-semibold text-sm px-6 py-4 rounded-full -ml-4 pl-6 shadow-md group-hover:bg-[#B71C1C] transition-colors">
              Call Now – Free Quote
            </div>
          </a>

          {/* EXPERIENCIA */}
          <div className="flex items-center justify-center gap-1 text-xs text-[#4A5568] mt-1">
            <span className="text-green-500 font-bold">✓</span>
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-xs text-[#4A5568]">
            <span className="text-green-500 font-bold">✓</span>
            <span>Sydney Based</span>
          </div>
        </div>

        {/* MENÚ HAMBURGUESA MÓVIL */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#13233A] dark:text-[var(--color-secondary)] text-2xl focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div className="md:hidden bg-white  px-6 py-4 shadow animate-slideDown">
          <nav
            className="flex flex-col gap-4 text-[#13233A]  font-medium text-lg"
            aria-label="Main navigation"
          >
            <Link href="/">Home</Link>
            {/* <Link href="/services">Services</Link> */}
            <Link href="/about">About Us</Link>
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center gap-1 w-full text-left"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2 text-base text-[#444]">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Services</span>
                  <Link href="/house-painters-sydney" onClick={() => setMenuOpen(false)}>
                    House Painters Sydney
                  </Link>
                  <Link href="/interior-painting-sydney" onClick={() => setMenuOpen(false)}>
                    Interior Painting Sydney
                  </Link>
                  <Link href="/exterior-painting-sydney" onClick={() => setMenuOpen(false)}>
                    Exterior Painting Sydney
                  </Link>
                  <Link href="/commercial-painting-sydney" onClick={() => setMenuOpen(false)}>
                    Commercial Painting Sydney
                  </Link>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-2">Areas We Serve</span>
                  <Link href="/painters-eastern-suburbs" onClick={() => setMenuOpen(false)}>
                    Eastern Suburbs
                  </Link>
                  <Link href="/painters-inner-west-sydney" onClick={() => setMenuOpen(false)}>
                    Painter Inner West Sydney
                  </Link>
                  <Link href="/painters-north-west-sydney" onClick={() => setMenuOpen(false)}>
                    North West Sydney
                  </Link>
                  <Link href="/painters-sutherland-shire" onClick={() => setMenuOpen(false)}>
                    Sutherland Shire
                  </Link>
                </div>
              )}
            </div>
            <Link href="/gallery">Projects</Link>
            <Link href="/contact">Get a Free Quote</Link>
            <Link href="/blog">Blog</Link>
            <a
              href="tel:0401508036"
              onClick={handlePhoneClick}
              className="flex items-center gap-2 border border-black dark:border-gray-600 px-4 py-3 rounded-2xl bg-[#D61C1C]! dark:bg-gray-700 transition"
              aria-label="Call Prisma Coatings Sydney"
            >
              <Phone className="text-[#D61C1C] w-4 h-4" />
              <span className="text-sm text-white">Call Now – Free Quote</span>
            </a>
            {/* EXPERIENCIA */}
            <div className="flex items-center gap-1 text-xs text-[#4A5568]">
              <span className="text-green-500 font-bold">✓</span>
              <span>10+ Years Experience</span>
            </div>
            {/* EXPERIENCIA */}
            <div className="flex items-center gap-1 text-xs text-[#4A5568]">
              <span className="text-green-500 font-bold">✓</span>
              <span>Sydney Based</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
