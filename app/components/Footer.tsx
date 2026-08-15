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
    <footer className="relative w-full overflow-hidden bg-[#040806] pt-10 pb-6">
      {/* Floating Curved Container */}
      <div className="max-w-[96%] lg:max-w-7xl mx-auto bg-[#0a0d0b] rounded-[40px] p-10 md:p-16 mb-10 mt-20 border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Faint gold texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,1) 0%, transparent 60%)',
          }}
        />

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full relative z-10">

          {/* Column 1: Branding */}
          <div className="flex flex-col items-start text-left">
            <Link href="/" className="flex items-center gap-3.5 mb-5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/40 flex-shrink-0">
                <Image src="/images/logo/logo.png" alt="Emerald Haven" fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-normal text-white tracking-wide leading-tight">
                  Emerald Haven
                </h3>
                <p className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.25em] uppercase mt-0.5">
                  SAFARI COTTAGES
                </p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Experience the untamed beauty of Udawalawa with bespoke safari cottages nestled in nature. Rated 9.7/10 — Exceptional by our guests.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1CvMGQYNoh/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
              </a>
              <a
                href="https://www.instagram.com/emeraldhavenudawalawa?igsh=Mzdxd2t2am01MDhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.2 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
              <a
                href="https://www.tiktok.com/@emerald.haven.saf?_r=1&_t=ZS-98su2Apic9o"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div>
            <h4 className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              EXPLORE
            </h4>
            <ul className="space-y-4 text-gray-300 font-light">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors block text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div>
            <h4 className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              SERVICES
            </h4>
            <ul className="space-y-4 text-gray-300 font-light">
              {services.map((service) => (
                <li key={service} className="hover:text-white transition-colors text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div>
            <h4 className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              CONTACT
            </h4>
            <ul className="space-y-4 text-gray-300 font-light">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#D4AF37]" />
                <span className="leading-relaxed">
                  No 49/1, Thanamalwila Road,<br />Udawalawa, Sri Lanka
                </span>
              </li>
              <li>
                <a href="tel:+94774621521" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                  <Phone size={16} className="flex-shrink-0 text-[#D4AF37]" />
                  +94 77 462 1521
                </a>
              </li>
              <li>
                <a href="mailto:emeralhaven.udawalaw@gmail.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors break-all">
                  <Mail size={16} className="flex-shrink-0 text-[#D4AF37]" />
                  emeralhaven.udawalaw@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock size={16} className="flex-shrink-0 text-[#D4AF37]" />
                24/7 Reception
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar & Divider */}
        <div className="border-t border-[#D4AF37]/20 w-full mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs relative z-10">
          <p className="text-gray-500">
            © 2026 Emerald Haven Safari Cottages. All rights reserved.
          </p>
          <p className="text-[#D4AF37] font-semibold tracking-widest uppercase">
            MADE WITH LOVE IN UDAWALAWA
          </p>
        </div>

      </div>
    </footer>
  );
}
