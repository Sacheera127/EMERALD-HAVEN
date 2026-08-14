'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Attractions', href: '/attractions' },
  { name: 'Tour Services', href: '/tour-services' },
  { name: 'Contacts', href: '/contacts' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: '#0a0f0d', // Solid background as a separate section
          borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
        }}
      >
        <div className="w-full mx-auto px-6 md:px-12 py-10 flex items-center justify-between md:justify-center md:gap-16 lg:gap-24">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-12 h-12 overflow-hidden rounded-md border border-emerald-500/10 opacity-90 hover:opacity-100 transition-opacity">
              <Image src="/images/logo/logo.png" alt="Emerald Haven" fill className="object-cover" sizes="48px" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-normal text-gold-gradient tracking-wide">Emerald Haven</h1>
              <p className="text-[9px] tracking-[0.3em] uppercase mt-0.5" style={{ color: 'rgba(16, 185, 129, 0.5)' }}>Safari Cottages</p>
            </div>
          </Link>

          {/* Desktop Nav - Increased gap and refined typography */}
          <nav className="hidden md:flex items-center gap-14">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-light tracking-wide hover:text-emerald-400 transition-colors" style={{ color: 'rgba(224, 231, 228, 0.6)' }}>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a href="https://www.booking.com/hotel/lk/jungle-safari-cottage-udawalawa.en-gb.html" target="_blank" rel="noopener noreferrer" className="btn-book hidden md:block">
              Book Now
            </a>
            
            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white/70 hover:text-white transition-colors" onClick={() => setIsMobileOpen(true)}>
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[100] glass flex flex-col"
            style={{ background: 'rgba(10, 15, 13, 0.95)' }}
          >
            <div className="p-6 flex justify-end border-b border-white/10">
              <button onClick={() => setIsMobileOpen(false)} className="text-white hover:text-emerald-400">
                <X size={32} />
              </button>
            </div>
            <nav className="flex-1 p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileOpen(false)} className="text-2xl font-serif text-white hover:text-emerald-400">
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10">
                <a href="https://www.booking.com/hotel/lk/jungle-safari-cottage-udawalawa.en-gb.html" target="_blank" rel="noopener noreferrer" className="btn-book text-center w-full block">
                  Book Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
