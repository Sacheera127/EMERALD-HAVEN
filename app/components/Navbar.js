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
      {/* Floating Pill Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center" style={{ paddingTop: '16px' }}>
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-[95%] max-w-7xl rounded-full transition-all duration-300"
          style={{
            background: 'rgba(10, 15, 13, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: isScrolled
              ? '0 8px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(16, 185, 129, 0.1)'
              : '0 4px 24px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div className="flex items-center justify-between md:justify-center md:gap-12 lg:gap-20" style={{ padding: '16px 32px' }}>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-emerald-500/10 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/images/logo/logo.png" alt="Emerald Haven" fill className="object-cover" sizes="40px" />
              </div>
              <h1 className="font-serif text-xl font-normal text-gold-gradient tracking-wide">Emerald Haven</h1>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-light tracking-wide inline-block transition-all duration-300 ease-in-out hover:-translate-y-[2px]"
                  style={{ color: 'rgba(224, 231, 228, 0.6)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(224, 231, 228, 0.6)'; }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <a href="https://www.airbnb.co.uk/rooms/1558405581828587637?guests=1&adults=1&s=67&unique_share_id=e4819430-6264-4d66-a125-5e20a2fe6dab" target="_blank" rel="noopener noreferrer" className="btn-book hidden md:block">
                Book Now
              </a>
              
              {/* Mobile Menu Toggle */}
              <button className="md:hidden text-white/70 hover:text-white transition-colors" onClick={() => setIsMobileOpen(true)}>
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </motion.header>
      </div>

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
