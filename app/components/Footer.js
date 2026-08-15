'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Mail, Phone, Clock
} from 'lucide-react';

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
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #05100c, #020705)' }}>
      {/* faint gold radial texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(201,162,39,1) 0%, transparent 55%)',
      }} />

      <div className="container-premium relative z-10 pt-36 pb-24">
        {/* Centered brand mark */}
        <div className="flex flex-col items-center text-center mb-[72px]">
          <Link href="/" className="flex flex-col items-center gap-4 group mb-6">
            <div className="relative w-16 h-16 overflow-hidden rounded-full" style={{ border: '1px solid rgba(201,162,39,0.35)' }}>
              <Image src="/images/logo/logo.png" alt="Emerald Haven" fill className="object-cover" sizes="64px" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-normal tracking-wide text-white">Emerald Haven</h3>
              <p className="text-[10px] tracking-[0.5em] uppercase mt-1" style={{ color: 'rgba(201,162,39,0.85)' }}>
                Safari Cottages
              </p>
            </div>
          </Link>
          <p className="max-w-md text-sm font-light leading-relaxed mb-[64px]" style={{ color: 'rgba(224,231,228,0.55)' }}>
            Experience the untamed beauty of Udawalawa with bespoke safari cottages nestled in nature.
            Rated 9.7/10 — Exceptional by our guests.
          </p>
        </div>

        {/* Thin gold divider */}
        <div className="w-full h-px mb-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.35), transparent)' }} />

        {/* Centered link columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto text-center mb-16">
          <div>
            <h4 className="font-serif text-sm tracking-[0.25em] uppercase mb-6" style={{ color: '#D4AF37' }}>
              Explore
            </h4>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-light text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm tracking-[0.25em] uppercase mb-6" style={{ color: '#D4AF37' }}>
              Services
            </h4>
            <ul className="space-y-5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm font-light text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm tracking-[0.25em] uppercase mb-6" style={{ color: '#D4AF37' }}>
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start justify-center gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-1 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-sm font-light leading-relaxed text-gray-300 text-left">
                  No 49/1, Thanamalwila Road,<br />Udawalawa, Sri Lanka
                </span>
              </li>
              <li>
                <a href="tel:+94774621521" className="flex items-center justify-center gap-3 text-sm font-light text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                  <Phone size={16} strokeWidth={1.5} className="text-[#D4AF37]" />
                  +94 77 462 1521
                </a>
              </li>
              <li>
                <a href="mailto:emeralhaven.udawalaw@gmail.com" className="flex items-center justify-center gap-3 text-sm font-light text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                  <Mail size={16} strokeWidth={1.5} className="text-[#D4AF37]" />
                  emeralhaven.udawalaw@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 text-sm font-light text-gray-300">
                <Clock size={16} strokeWidth={1.5} className="text-[#D4AF37]" />
                24/7 Reception
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons row */}
        <div className="flex justify-center gap-5 mb-14 mt-[200px]">
          <a
            href="https://www.facebook.com/share/1CvMGQYNoh/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            style={{ border: '1px solid rgba(201,162,39,0.3)', color: 'rgba(201,162,39,0.8)' }}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
          </a>
          <a
            href="https://www.instagram.com/emeraldhavenudawalawa?igsh=Mzdxd2t2am01MDhi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            style={{ border: '1px solid rgba(201,162,39,0.3)', color: 'rgba(201,162,39,0.8)' }}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.2 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
          </a>
          <a
            href="https://www.tiktok.com/@emerald.haven.saf?_r=1&_t=ZS-98su2Apic9o"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            style={{ border: '1px solid rgba(201,162,39,0.3)', color: 'rgba(201,162,39,0.8)' }}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>
          </a>
        </div>

        {/* Bottom divider + copyright */}
        <div className="w-full h-px mb-8 mt-[50px]" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-gray-500 font-light tracking-wide">
            © {new Date().getFullYear()} Emerald Haven Safari Cottages. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 font-light tracking-widest uppercase">
            Udawalawa, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
