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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
                  prefetch={true}
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

      {/* Mobile Overlay — Premium Centered Pill Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            {/* Close button — top right */}
            <div className="flex justify-end" style={{ padding: '24px 28px' }}>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  width: '48px', height: '48px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(212,175,55,0.25)',
                }}
              >
                <X size={22} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
              </button>
            </div>

            {/* Centered nav links */}
            <nav className="flex-1 flex flex-col items-center justify-center" style={{ gap: '14px', padding: '0 32px', marginTop: '-40px' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full flex justify-center"
                >
                  <Link
                    href={link.href}
                    prefetch={true}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-serif text-center transition-all duration-400 hover:scale-[1.03]"
                    style={{
                      display: 'block',
                      width: '80%',
                      maxWidth: '320px',
                      padding: '15px 28px',
                      borderRadius: '50px',
                      fontSize: '17px',
                      fontWeight: 400,
                      letterSpacing: '0.06em',
                      color: 'rgba(255,255,255,0.8)',
                      background: 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                      border: '1px solid rgba(212,175,55,0.2)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Book Now CTA — solid gold pill */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: 0.1 + navLinks.length * 0.07 + 0.05,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full flex justify-center"
                style={{ marginTop: '10px' }}
              >
                <a
                  href="https://www.airbnb.co.uk/rooms/1558405581828587637?guests=1&adults=1&s=67&unique_share_id=e4819430-6264-4d66-a125-5e20a2fe6dab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center font-semibold uppercase transition-all duration-400 hover:scale-[1.03]"
                  style={{
                    display: 'block',
                    width: '80%',
                    maxWidth: '320px',
                    padding: '16px 28px',
                    borderRadius: '50px',
                    fontSize: '13px',
                    letterSpacing: '0.2em',
                    color: '#0a0f0d',
                    background: 'linear-gradient(135deg, #D4AF37, #c9a227)',
                    boxShadow: '0 8px 30px rgba(212,175,55,0.25)',
                  }}
                >
                  Book Now
                </a>
              </motion.div>
            </nav>

            {/* Subtle bottom branding */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center"
              style={{ padding: '24px 0 36px', color: 'rgba(224,231,228,0.25)' }}
            >
              <p className="font-serif text-sm tracking-widest" style={{ color: 'rgba(212,175,55,0.4)' }}>
                Emerald Haven
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
