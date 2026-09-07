'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Rooms', href: '/rooms' },
  { name: 'Attractions', href: '/attractions' },
  { name: 'Tour Services', href: '/tour-services' },
  { name: 'Contact Us', href: '/contacts' },
];

const services = [
  'Safari Arrangements',
  'Airport Shuttle',
  'Taxi Services',
  'Tour Packages',
  'Restaurant & Dining',
  'Swimming Pool',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden w-full" style={{ background: 'linear-gradient(180deg, #05100c, #020705)', isolation: 'isolate' }}>
      {/* Ambient gold glow, top-left — asymmetric, not centered */}
      <div className="absolute pointer-events-none" style={{ top: '-10%', left: '5%', width: '500px', height: '500px', borderRadius: '9999px', filter: 'blur(160px)', opacity: 0.05, background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />

      <div className="relative mx-auto" style={{ maxWidth: '1280px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '96px', paddingBottom: '40px' }}>
        {/* Main layout: full width evenly distributed grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 w-full">
          {/* Brand column */}
          <div className="flex flex-col items-center text-center px-4">
            <Link href="/" className="inline-flex flex-col items-center gap-4 group" style={{ marginBottom: '28px' }}>
              <div className="relative shrink-0 overflow-hidden rounded-full transition-all duration-500 group-hover:border-[#D4AF37]/60" style={{ width: '52px', height: '52px', border: '1px solid rgba(212,175,55,0.3)' }}>
                <Image src="/images/logo/logo.png" alt="Emerald Haven" fill className="object-cover" sizes="52px" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-normal tracking-wide text-white leading-tight">Emerald Haven</h3>
                <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: 'rgba(212,175,55,0.75)', marginTop: '4px' }}>Safari Cottages</p>
              </div>
            </Link>

            <p className="text-sm font-light leading-relaxed text-center mx-auto" style={{ color: 'rgba(224,231,228,0.5)', maxWidth: '380px', marginBottom: '32px' }}>
              Experience the untamed beauty of Udawalawa with bespoke safari cottages nestled in nature. Rated 9.7/10 — Exceptional by our guests.
            </p>

            {/* Social icons */}
            <div className="flex justify-center" style={{ gap: '12px' }}>
              {[
                { href: 'https://www.facebook.com/share/1CvMGQYNoh/?mibextid=wwXIfr', path: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z', box: '0 0 320 512' },
                { href: 'https://www.instagram.com/emeraldhavenudawalawa?igsh=Mzdxd2t2am01MDhi', path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.2 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z', box: '0 0 448 512' },
                { href: 'https://www.tiktok.com/@emerald.haven.saf?_r=1&_t=ZS-98su2Apic9o', path: 'M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z', box: '0 0 448 512' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-full transition-all duration-500 hover:-translate-y-0.5"
                  style={{
                    width: '38px', height: '38px',
                    background: 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(212,175,55,0.2)',
                  }}
                >
                  <svg
                    stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox={s.box} height="14" width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'rgba(212,175,55,0.7)' }}
                    className="transition-colors duration-500 group-hover:text-[#D4AF37]"
                  >
                    <path d={s.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: 'rgba(212,175,55,0.75)', marginBottom: '24px' }}>Explore</h4>
            <ul className="flex flex-col items-center" style={{ gap: '14px' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-light transition-colors duration-300" style={{ color: 'rgba(224,231,228,0.55)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(224,231,228,0.55)')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: 'rgba(212,175,55,0.75)', marginBottom: '24px' }}>Services</h4>
            <ul className="flex flex-col items-center" style={{ gap: '14px' }}>
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm font-light transition-colors duration-300 cursor-pointer" style={{ color: 'rgba(224,231,228,0.55)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(224,231,228,0.55)')}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: 'rgba(212,175,55,0.75)', marginBottom: '24px' }}>Contact</h4>
            <ul className="flex flex-col items-center" style={{ gap: '18px' }}>
              <li className="flex flex-col items-center text-center" style={{ gap: '14px' }}>
                <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: '30px', height: '30px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}>
                  <MapPin size={13} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
                </span>
                <span className="text-sm font-light leading-relaxed" style={{ color: 'rgba(224,231,228,0.55)', paddingTop: '5px' }}>
                  No 49/1, Thanamalwila Road,<br />Udawalawa, Sri Lanka
                </span>
              </li>
              <li className="flex flex-col items-center text-center" style={{ gap: '14px' }}>
                <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: '30px', height: '30px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}>
                  <Phone size={13} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
                </span>
                <a href="tel:+94774621521" className="text-sm font-light transition-colors duration-300" style={{ color: 'rgba(224,231,228,0.55)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(224,231,228,0.55)')}
                >
                  +94 77 462 1521
                </a>
              </li>
              <li className="flex flex-col items-center text-center" style={{ gap: '14px' }}>
                <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: '30px', height: '30px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}>
                  <Mail size={13} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
                </span>
                <a href="mailto:emeralhaven.udawalaw@gmail.com" className="text-sm font-light transition-colors duration-300" style={{ color: 'rgba(224,231,228,0.55)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(224,231,228,0.55)')}
                >
                  emeralhaven.udawalaw@gmail.com
                </a>
              </li>
              <li className="flex flex-col items-center text-center" style={{ gap: '14px' }}>
                <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: '30px', height: '30px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}>
                  <Clock size={13} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
                </span>
                <span className="text-sm font-light" style={{ color: 'rgba(224,231,228,0.55)' }}>24/7 Reception</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '28px' }}>
          <div className="flex flex-col md:flex-row items-center justify-center text-center" style={{ gap: '24px' }}>
            <p className="text-xs font-light tracking-wide" style={{ color: 'rgba(224,231,228,0.35)' }}>
              © {new Date().getFullYear()} Emerald Haven Safari Cottages. All rights reserved.
            </p>
            <p className="text-xs font-light tracking-[0.2em] uppercase" style={{ color: 'rgba(224,231,228,0.3)' }}>
              Udawalawa, Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}