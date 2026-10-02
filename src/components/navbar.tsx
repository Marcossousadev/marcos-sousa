"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 top-4 left-0 right-0 flex justify-center px-4">
      <nav className="relative w-[90%] md:w-[85%] h-16 px-6 flex items-center justify-between 
      bg-[#2222]/90 backdrop-blur-xl border border-white/20 text-foreground rounded-full shadow-lg">

        {/* Logo */}
        <Link 
          href="/" 
          className="text-lg font-bold tracking-wide bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent"
        >
          Marcos
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium">
          <li className="hover:text-blue-400 transition"><Link href="#sobre">Sobre</Link></li>
          <li className="hover:text-blue-400 transition"><Link href="#skills">Habilidades</Link></li>
          <li className="hover:text-blue-400 transition"><Link href="#projetos">Projetos</Link></li>
          <li className="hover:text-blue-400 transition"><Link href="#contato">Contato</Link></li>
        </ul>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-blue-400 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaXmark className="size-5" /> : <FaBars className="size-5" />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 w-full bg-background backdrop-blur-2xl border border-white/20 rounded-2xl p-5 flex flex-col gap-4 text-center text-sm font-medium shadow-2xl md:hidden">
            <Link
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-blue-400 transition-colors border-b border-white/10"
            >
              Sobre
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-blue-400 transition-colors border-b border-white/10"
            >
              Habilidades
            </Link>
            <Link
              href="#projetos"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-blue-400 transition-colors border-b border-white/10"
            >
              Projetos
            </Link>
            <Link
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-blue-400 transition-colors"
            >
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}


