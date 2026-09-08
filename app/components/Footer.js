'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   EMERALD HAVEN — Premium Safari Lodge Footer
   
   Grid structure (desktop):
   ┌─────────────┬───────┬──────────┬──────────┐
   │  Brand (4)  │ Ex(2) │ Serv(3)  │ Cont(3)  │
   │  col 1–4    │ 5–6   │ 7–9      │ 10–12    │
   └─────────────┴───────┴──────────┴──────────┘
   
   To adjust widths later, change the lg:col-span-X values.
   They must always add up to 12.
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
    <h4
      className="text-[11px] font-semibold uppercase text-white/60 mb-7"
      style={{ letterSpacing: '0.25em', color: 'rgba(212,175,55,0.75)' }}
    >
      {children}
    </h4>
  );
}

function ContactRow({ icon: Icon, children, alignTop = false }) {
  return (
    <li className={`flex ${alignTop ? 'items-start' : 'items-center'} gap-3.5`}>
      <span
        className="flex items-center justify-center shrink-0 rounded-full"
        style={{
          width: '30px',
          height: '30px',
          background: 'rgba(212,175,55,0.08)',
          border: '1px solid rgba(212,175,55,0.25)',
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
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #05100c, #020705)',
        isolation: 'isolate',
      }}
    >
      {/* ── Ambient gold glow (asymmetric, top-left corner) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-8%',
          left: '8%',
          width: '500px',
          height: '500px',
          borderRadius: '9999px',
          filter: 'blur(160px)',
          opacity: 0.04,
          background: 'radial-gradient(circle, #D4AF37, transparent 70%)',
        }}
      />

      {/* ── Centering Container ── */}
      <div
        className="relative w-full px-8 pt-20 pb-10"
        style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        {/* ════════════════════════════════════════════════
            12-COLUMN GRID
            Mobile: 1 col → Tablet: 2 cols → Desktop: 12 cols
            Brand=4 | Explore=2 | Services=3 | Contact=3
           ════════════════════════════════════════════════ */}
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-start gap-x-8 gap-y-12 mb-16"
        >
          {/* ━━━━━ BRAND COLUMN (cols 1–4) ━━━━━ */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start">
            {/* Logo + Name */}
            <Link href="/" className="inline-flex items-center gap-4 group mb-6">
              <div
                className="relative shrink-0 overflow-hidden rounded-full transition-all duration-500 group-hover:border-[#D4AF37]/60"
                style={{
                  width: '52px',
                  height: '52px',
                  border: '1px solid rgba(212,175,55,0.3)',
                }}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="Emerald Haven"
                  fill
                  className="object-cover"
                  sizes="52px"
                />
              </div>
              <div>
                <h3
                  className="font-serif text-xl font-normal tracking-wide text-white leading-tight"
                >
                  Emerald Haven
                </h3>
                <p
                  className="text-[9px] uppercase"
                  style={{
                    letterSpacing: '0.4em',
                    color: 'rgba(212,175,55,0.75)',
                    marginTop: '4px',
                  }}
                >
                  Safari Cottages
                </p>
              </div>
            </Link>

            {/* Description */}
            <p
              className="text-sm font-light leading-relaxed"
              style={{
                color: 'rgba(224,231,228,0.5)',
                maxWidth: '320px',
                marginBottom: '28px',
              }}
            >
              Experience the untamed beauty of Udawalawa with bespoke safari
              cottages nestled in nature. Rated 9.7/10 — Exceptional by our
              guests.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex items-center justify-center rounded-full transition-all duration-500 hover:-translate-y-0.5"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,0.025)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(212,175,55,0.2)',
                  }}
                >
                  <svg
                    fill="currentColor"
                    viewBox={s.viewBox}
                    className="transition-colors duration-500 group-hover:text-[#D4AF37]"
                    style={{ width: '13px', height: '13px', color: 'rgba(212,175,55,0.7)' }}
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ━━━━━ EXPLORE COLUMN (cols 5–6) ━━━━━ */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <ColumnHeader>Explore</ColumnHeader>
            <ul className="flex flex-col" style={{ gap: '14px' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-light transition-colors duration-300 hover:text-white"
                    style={{ color: 'rgba(224,231,228,0.55)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ━━━━━ SERVICES COLUMN (cols 7–9) ━━━━━ */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <ColumnHeader>Services</ColumnHeader>
            <ul className="flex flex-col" style={{ gap: '14px' }}>
              {services.map((service) => (
                <li key={service}>
                  <span
                    className="text-sm font-light transition-colors duration-300 hover:text-white cursor-default"
                    style={{ color: 'rgba(224,231,228,0.55)' }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ━━━━━ CONTACT COLUMN (cols 10–12) ━━━━━ */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <ColumnHeader>Contact</ColumnHeader>
            <ul className="flex flex-col" style={{ gap: '16px' }}>
              <ContactRow icon={MapPin} alignTop>
                <span
                  className="text-sm font-light leading-relaxed"
                  style={{ color: 'rgba(224,231,228,0.55)', paddingTop: '4px' }}
                >
                  No 49/1, Thanamalwila Road,
                  <br />
                  Udawalawa, Sri Lanka
                </span>
              </ContactRow>

              <ContactRow icon={Phone}>
                <a
                  href="tel:+94774621521"
                  className="text-sm font-light transition-colors duration-300 hover:text-white"
                  style={{ color: 'rgba(224,231,228,0.55)' }}
                >
                  +94 77 462 1521
                </a>
              </ContactRow>

              <ContactRow icon={Mail}>
                <a
                  href="mailto:emeralhaven.udawalaw@gmail.com"
                  className="text-sm font-light transition-colors duration-300 hover:text-white"
                  style={{ color: 'rgba(224,231,228,0.55)' }}
                >
                  emeralhaven.udawalaw@gmail.com
                </a>
              </ContactRow>

              <ContactRow icon={Clock}>
                <span
                  className="text-sm font-light"
                  style={{ color: 'rgba(224,231,228,0.55)' }}
                >
                  24/7 Reception
                </span>
              </ContactRow>
            </ul>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            BOTTOM BAR
           ════════════════════════════════════════════════ */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            gap: '12px',
          }}
        >
          <p
            className="text-xs font-light tracking-wide"
            style={{ color: 'rgba(224,231,228,0.35)' }}
          >
            © {new Date().getFullYear()} Emerald Haven Safari Cottages. All
            rights reserved.
          </p>
          <p
            className="text-[10px] font-medium uppercase"
            style={{
              letterSpacing: '0.2em',
              color: 'rgba(224,231,228,0.25)',
            }}
          >
            Udawalawa, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
