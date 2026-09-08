'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   EMERALD HAVEN — Premium Safari Lodge Footer
   Grid structure (desktop): Brand(4) | Explore(2) | Services(3) | Contact(3)
   Alignment/grid untouched — visual polish only.
   ═══════════════════════════════════════════════════════════ */

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

const socials = [
  {
    href: 'https://www.facebook.com/share/1CvMGQYNoh/?mibextid=wwXIfr',
    label: 'Facebook',
    path: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z',
    viewBox: '0 0 320 512',
  },
  {
    href: 'https://www.instagram.com/emeraldhavenudawalawa?igsh=Mzdxd2t2am01MDhi',
    label: 'Instagram',
    path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.2 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
    viewBox: '0 0 448 512',
  },
  {
    href: 'https://www.tiktok.com/@emerald.haven.saf?_r=1&_t=ZS-98su2Apic9o',
    label: 'TikTok',
    path: 'M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z',
    viewBox: '0 0 448 512',
  },
];

/* ── Reusable sub-components ────────────────────────────── */

function ColumnHeader({ children }) {
  return (
    <div className="flex items-center gap-3 mb-11">
      <span style={{ width: '14px', height: '1px', background: 'rgba(212,175,55,0.5)' }} />
      <h4
        className="text-[11px] font-semibold uppercase"
        style={{ letterSpacing: '0.25em', color: 'rgba(212,175,55,0.8)' }}
      >
        {children}
      </h4>
    </div>
  );
}

function ContactRow({ icon: Icon, children, alignTop = false }) {
  return (
    <li className={`group flex ${alignTop ? 'items-start' : 'items-center'} gap-3.5`}>
      <span
        className="flex items-center justify-center shrink-0 rounded-full transition-all duration-500 group-hover:scale-105"
        style={{
          width: '32px',
          height: '32px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.02) 100%)',
          border: '1px solid rgba(212,175,55,0.28)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)',
        }}
      >
        <Icon size={13} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
      </span>
      {children}
    </li>
  );
}

/* ── Main Footer Component ──────────────────────────────── */

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden mt-[100px] rounded-t-[40px] lg:rounded-t-[80px] border-t border-x border-[#D4AF37]/15 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
      style={{
        background: 'linear-gradient(180deg, #05100c 0%, #030a07 55%, #020705 100%)',
        isolation: 'isolate',
      }}
    >
      {/* ── Ambient gold glow, top-left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-8%', left: '8%', width: '500px', height: '500px',
          borderRadius: '9999px', filter: 'blur(160px)', opacity: 0.05,
          background: 'radial-gradient(circle, #D4AF37, transparent 70%)',
        }}
      />
      {/* ── Secondary emerald glow, bottom-right — adds depth without symmetry ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', right: '5%', width: '420px', height: '420px',
          borderRadius: '9999px', filter: 'blur(150px)', opacity: 0.035,
          background: 'radial-gradient(circle, #10b981, transparent 70%)',
        }}
      />
      {/* ── Hairline top border with soft gold fade at center ── */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ height: '30px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)' }}
      />

      <div
        className="relative w-full px-8 md:px-[72px] lg:px-[88px]"
        style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '130px', paddingBottom: '40px' }}
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-start gap-x-12 gap-y-16 mb-24">
          {/* ━━━━━ BRAND COLUMN ━━━━━ */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-flex items-center gap-4 group mb-[60px]">
              <div
                className="relative shrink-0 overflow-hidden rounded-full transition-all duration-500 group-hover:border-[#D4AF37]/60"
                style={{
                  width: '72px', height: '72px',
                  border: '1px solid rgba(212,175,55,0.3)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.04)',
                }}
              >
                <Image src="/images/logo/logo.png" alt="Emerald Haven" fill className="object-cover" sizes="72px" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-normal tracking-wide text-white leading-tight">
                  Emerald Haven
                </h3>
                <p
                  className="text-[10px] uppercase font-medium"
                  style={{ letterSpacing: '0.45em', color: 'rgba(212,175,55,0.85)', marginTop: '6px' }}
                >
                  Safari Cottages & Glampings &nbsp;
                </p>
              </div>
            </Link>

            <p
              className="text-base font-light leading-relaxed"
              style={{ color: 'rgba(224,231,228,0.6)', maxWidth: '340px', marginBottom: '60px' ,marginTop: '10px'}}
            >
              Your private haven at the edge of the wilderness. Discover Udawalawa’s most exclusive safari escape, celebrated by our guests with a 9.7/10 rating
            </p>

            <div className="flex items-center gap-3">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex items-center justify-center rounded-full transition-all duration-500 hover:-translate-y-1"
                  style={{
                    width: '44px', height: '44px',
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(212,175,55,0.22)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                  }}
                >
                  <svg
                    fill="currentColor"
                    viewBox={s.viewBox}
                    className="transition-colors duration-500 group-hover:text-[#D4AF37]"
                    style={{ width: '15px', height: '15px', color: 'rgba(212,175,55,0.8)' }}
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ━━━━━ EXPLORE COLUMN ━━━━━ */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <ColumnHeader>Explore</ColumnHeader>
            <ul className="flex flex-col" style={{ gap: '18px' ,marginTop: '20px' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group relative inline-flex items-center text-[15px] font-light transition-colors duration-300 hover:text-white"
                    style={{ color: 'rgba(224,231,228,0.6)' }}
                  >
                    <span
                      className="absolute -left-0 bottom-[-2px] h-[1px] w-0 transition-all duration-500 group-hover:w-full"
                      style={{ background: '#D4AF37' }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ━━━━━ SERVICES COLUMN ━━━━━ */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <ColumnHeader>Services</ColumnHeader>
            <ul className="flex flex-col" style={{ gap: '18px' ,marginTop: '20px' }}>
              {services.map((service) => (
                <li key={service}>
                  <span
                    className="text-[15px] font-light transition-colors duration-300 hover:text-white cursor-default"
                    style={{ color: 'rgba(224,231,228,0.6)' }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ━━━━━ CONTACT COLUMN ━━━━━ */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <ColumnHeader>Contact</ColumnHeader>
            <ul className="flex flex-col" style={{ gap: '22px' ,marginTop: '20px' }}>
              <ContactRow icon={MapPin} alignTop>
                <span className="text-[15px] font-light leading-relaxed" style={{ color: 'rgba(224,231,228,0.6)', paddingTop: '3px' }}>
                  No 49/1, Thanamalwila Road,<br />Udawalawa, Sri Lanka
                </span>
              </ContactRow>
              <ContactRow icon={Phone}>
                <a href="tel:+94774621521" className="text-[15px] font-light transition-colors duration-300 hover:text-white" style={{ color: 'rgba(224,231,228,0.6)' }}>
                  +94 77 462 1521
                </a>
              </ContactRow>
              <ContactRow icon={Mail}>
                <a href="mailto:emeralhaven.udawalaw@gmail.com" className="text-[15px] font-light transition-colors duration-300 hover:text-white" style={{ color: 'rgba(224,231,228,0.6)' }}>
                  emeralhaven.udawalaw@gmail.com
                </a>
              </ContactRow>
              <ContactRow icon={Clock}>
                <span className="text-[15px] font-light" style={{ color: 'rgba(224,231,228,0.6)' }}>24/7 Reception</span>
              </ContactRow>
            </ul>
          </div>
        </div>

        {/* ════════════ BOTTOM BAR ════════════ */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '32px',
            marginTop: '40px',
            gap: '16px',
          }}
        >
          <p className="text-sm font-light tracking-wide" style={{ color: 'rgba(224,231,228,0.45)' }}>
            © {new Date().getFullYear()} Emerald Haven . All rights reserved.
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(224,231,228,0.35)' }}>
            Udawalawa, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
