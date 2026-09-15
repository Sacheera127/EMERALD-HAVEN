'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import {
  Users, Maximize2, Eye, Wifi, Coffee, ArrowRight, Check,
  BedDouble, Trees, ShowerHead, Wind, Star, Quote, ChevronLeft, ChevronRight, Mouse,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

const roomsData = [
  {
    name: 'Safari Family Cottage',
    tagline: 'Where the Wild Meets Comfort',
    img: '/images/support/IMG_6225.JPG',
    gallery: ['/images/support/IMG_6227.JPG', '/images/support/IMG_6237.JPG'],
    desc: 'Spacious thatched-roof cottage nestled amidst lush greenery. Wake to birdsong and the whisper of tropical gardens from your private balcony — an authentic safari experience for the whole family.',
    guests: 'Up to 4 Guests',
    size: '45 m²',
    view: 'Garden View',
    highlights: [
      { icon: BedDouble, label: 'King Bed' },
      { icon: Users, label: '4 Guests' },
      { icon: Wind, label: 'Air Conditioned' },
      { icon: ShowerHead, label: 'Private Bath' },
    ],
    amenities: ['Private Bathroom', 'Air Conditioning', 'Free WiFi', 'Balcony & Terrace', 'Tea/Coffee Maker', 'Room Service', 'Mosquito Net', 'Mini Fridge'],
  },
  {
    name: 'Deluxe Garden Room',
    tagline: 'Elegance Surrounded by Nature',
    img: '/images/support/IMG_6237.JPG',
    gallery: ['/images/support/IMG_6239.JPG', '/images/support/IMG_6241.JPG'],
    desc: 'Elegantly appointed with modern amenities and enveloped by tropical gardens. A charming retreat where understated luxury meets the serenity of the Sri Lankan countryside.',
    guests: 'Up to 2 Guests',
    size: '35 m²',
    view: 'Courtyard View',
    highlights: [
      { icon: BedDouble, label: 'Queen Bed' },
      { icon: Users, label: '2 Guests' },
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Coffee, label: 'Tea/Coffee' },
    ],
    amenities: ['Private Bathroom', 'Air Conditioning', 'Free WiFi', 'Garden View', 'Tea/Coffee Maker', 'Hairdryer', 'Free Toiletries', 'Desk'],
  },
  {
    name: 'Premium Pool Suite',
    tagline: 'Your Private Aquatic Sanctuary',
    img: '/images/support/IMG_6239.JPG',
    gallery: ['/images/support/IMG_6226.JPG', '/images/support/IMG_6225.JPG'],
    desc: 'Our finest accommodation with direct access to the outdoor swimming pool. Luxurious furnishings, a sun-drenched terrace, and panoramic views of the surrounding landscape — pure indulgence.',
    guests: 'Up to 3 Guests',
    size: '50 m²',
    view: 'Pool & Garden View',
    highlights: [
      { icon: BedDouble, label: 'Extra-long Beds' },
      { icon: Maximize2, label: '50 m²' },
      { icon: Eye, label: 'Pool View' },
      { icon: Wind, label: 'Air Conditioned' },
    ],
    amenities: ['Pool Access', 'Private Bathroom', 'Air Conditioning', 'Free WiFi', 'Sun Terrace', 'Extra-long Beds', 'Dining Area', 'Soundproofing'],
  },
];

const amenityCategories = [
  {
    title: 'Great for Your Stay',
    items: ['Restaurant', 'Balcony', 'Private bathroom', 'Air conditioning', 'Free WiFi', 'Terrace', 'Family rooms', 'Room service'],
  },
  {
    title: 'Activities',
    items: ['Bicycle rental', 'Cooking class', 'Cultural tours', 'Bike tours', 'Walking tours', 'Badminton', 'Snorkelling', "Children's playground"],
  },
  {
    title: 'Food & Drink',
    items: ['Fruits', 'Kid-friendly buffet', "Kids' meals", 'Special diet menus', 'Breakfast in room', 'Restaurant', 'Tea/Coffee maker', 'Wine/champagne'],
  },
  {
    title: 'Outdoors',
    items: ['Outdoor fireplace', 'Picnic area', 'Outdoor furniture', 'Sun terrace', 'Barbecue', 'Patio', 'Balcony', 'Garden'],
  },
];

const reviews = [
  { name: 'Sarah Mitchell', country: 'United Kingdom', rating: 10, text: 'Absolutely magical. The cottage was immaculate, the staff were incredibly warm, and the safari was a once-in-a-lifetime experience. We will definitely return.' },
  { name: 'Thomas Weber', country: 'Germany', rating: 10, text: 'Ein perfekter Ort! The gardens are stunning, the pool was refreshing, and the restaurant served the best Sri Lankan food we had on our entire trip.' },
  { name: 'Aiko Tanaka', country: 'Japan', rating: 9, text: 'Such a peaceful retreat. Waking up to birdsong and seeing elephants on the safari — it was beyond our expectations. Highly recommended.' },
  { name: 'Marco Rossi', country: 'Italy', rating: 10, text: 'The attention to detail is extraordinary. From the welcome drink to the candlelit dinner by the pool — every moment felt like a luxury experience.' },
  { name: 'Emily Chen', country: 'Australia', rating: 10, text: 'We came for the safari and stayed for the hospitality. The staff remembered our names, our preferences, everything. A truly personal experience.' },
];

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function AmenityCard({ cat, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col"
      style={{
        height: '100%',
        padding: '32px',
        borderRadius: '28px',
        background: 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Gold hover glow ring */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          borderRadius: '28px',
          transition: 'opacity 0.5s',
          boxShadow: '0 0 0 1px rgba(212,175,55,0.35), 0 20px 40px rgba(212,175,55,0.08)',
        }}
      />
      {/* Header row */}
      <div className="relative flex items-center justify-between" style={{ marginBottom: '24px' }}>
        <div
          className="transition-all duration-500 group-hover:w-16"
          style={{ width: '48px', height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
        />
        <span style={{ fontSize: '12px', fontWeight: 300, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.15)' }}>
          {String(i + 1).padStart(2, '0')}
        </span>
      </div>
      <h3
        className="font-serif relative"
        style={{ fontSize: '26px', fontWeight: 400, color: '#ffffff', letterSpacing: '0.02em', marginBottom: '32px' }}
      >
        {cat.title}
      </h3>
      <ul className="relative" style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', padding: 0, margin: 0 }}>
        {cat.items.map((item) => (
          <li
            key={item}
            className="flex items-center transition-colors duration-300 group-hover:text-white/80"
            style={{ gap: '12px', fontSize: '14px', fontWeight: 300, color: 'rgba(224,231,228,0.55)' }}
          >
            <span
              className="flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
              style={{ width: '20px', height: '20px', borderRadius: '9999px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}
            >
              <Check size={11} strokeWidth={2.5} style={{ color: '#D4AF37' }} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-1.5" style={{ marginBottom: '20px' }}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < Math.round(count / 2) ? '#D4AF37' : 'transparent'}
          strokeWidth={i < Math.round(count / 2) ? 0 : 1}
          style={{ color: i < Math.round(count / 2) ? '#D4AF37' : 'rgba(255,255,255,0.15)' }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function RoomsPage() {
  /* ── Testimonial state ── */
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const review = reviews[active];
  const total = reviews.length;
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  const handleManualNav = useCallback((idx) => {
    setActive(idx);
    setPaused(true);
    setTimeout(() => setPaused(false), 6000);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((c) => (c + 1) % total), 4000);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <div className="page-transition pt-24">

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — PREMIUM HERO
          ═══════════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, #0f1f18 0%, #070e0a 50%, #050a07 100%)',
          padding: '100px 0 80px',
          isolation: 'isolate',
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '5%', left: '10%', width: '520px', height: '520px', borderRadius: '9999px',
            filter: 'blur(180px)', opacity: 0.07,
            background: 'radial-gradient(circle, #D4AF37, transparent 70%)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-10%', right: '8%', width: '400px', height: '400px', borderRadius: '9999px',
            filter: 'blur(150px)', opacity: 0.05,
            background: 'radial-gradient(circle, #10b981, transparent 70%)',
          }}
        />

        <div className="container-premium relative">
          <div className="flex flex-col items-center text-center" style={{ marginBottom: '56px' }}>
            {/* Pill badge */}
            <motion.div
              custom={0} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-50px' }} variants={fadeUp}
              className="inline-flex items-center"
              style={{
                padding: '9px 22px', borderRadius: '9999px',
                background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.02) 100%)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(212,175,55,0.35)',
                marginBottom: '28px',
              }}
            >
              <span className="text-[10px] font-medium uppercase" style={{ letterSpacing: '0.3em', color: '#D4AF37' }}>
                Luxury Stays
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-50px' }} variants={fadeUp}
              className="font-serif"
              style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: 1.05, marginBottom: '24px' }}
            >
              <span className="block font-normal text-white">Our Rooms &amp;</span>
              <span className="block" style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(212,175,55,0.9)' }}>
                Cottages
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-50px' }} variants={fadeUp}
              className="font-light"
              style={{ fontSize: '16px', lineHeight: 1.85, color: 'rgba(224,231,228,0.55)', maxWidth: '540px' }}
            >
              Every room is designed for comfort and total immersion in nature. Complete privacy, stunning forest views, and premium amenities — your perfect escape awaits.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            custom={4} initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center"
            style={{ gap: '10px' }}
          >
            <div
              style={{
                width: '26px', height: '42px', borderRadius: '9999px',
                border: '1.5px solid rgba(212,175,55,0.3)',
                display: 'flex', justifyContent: 'center', paddingTop: '8px',
              }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '3px', height: '8px', borderRadius: '9999px',
                  background: 'linear-gradient(180deg, #D4AF37, rgba(212,175,55,0.2))',
                }}
              />
            </div>
            <span style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(224,231,228,0.25)', fontWeight: 400 }}>
              Scroll
            </span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — THE COLLECTION (ROOM LISTINGS)
          ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--dark-800)', paddingTop: '120px', paddingBottom: '120px', isolation: 'isolate' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '15%', right: '5%', width: '500px', height: '500px', borderRadius: '9999px',
            filter: 'blur(160px)', opacity: 0.05,
            background: 'radial-gradient(circle, #D4AF37, transparent 70%)',
          }}
        />

        {/* Section header */}
        <div className="container-premium relative">
          <div className="text-center" style={{ marginBottom: '96px' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center justify-center" style={{ gap: '12px', marginBottom: '20px' }}>
                <span style={{ width: '32px', height: '1px', background: 'rgba(16,185,129,0.6)' }} />
                <p style={{ fontSize: '12px', letterSpacing: '0.5em', textTransform: 'uppercase', fontWeight: 500, color: 'rgba(16,185,129,0.85)', margin: 0, marginRight: '-0.5em' }}>
                  The Collection
                </p>
                <span style={{ width: '32px', height: '1px', background: 'rgba(16,185,129,0.6)' }} />
              </div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#ffffff', letterSpacing: '0.01em', margin: 0 }}>
                Handcrafted Sanctuaries
              </h2>
            </motion.div>
          </div>

          {/* Room cards */}
          <div className="space-y-40">
            {roomsData.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Gold divider between rooms */}
                {i > 0 && (
                  <div className="flex items-center justify-center" style={{ marginBottom: '80px' }}>
                    <span style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4))' }} />
                    <span style={{ width: '6px', height: '6px', borderRadius: '9999px', border: '1px solid rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.1)', margin: '0 16px' }} />
                    <span style={{ width: '80px', height: '1px', background: 'linear-gradient(270deg, transparent, rgba(212,175,55,0.4))' }} />
                  </div>
                )}

                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
                  {/* ── Image Side ── */}
                  <div className={`relative ${i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
                    {/* Ambient glow behind images */}
                    <div
                      className="absolute -inset-6 rounded-[48px] pointer-events-none"
                      style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08), transparent 70%)', filter: 'blur(40px)' }}
                    />
                    <div className="relative grid grid-cols-2 gap-3">
                      {/* Main image */}
                      <div className="relative h-[360px] md:h-[480px] rounded-[28px] overflow-hidden col-span-2 group shadow-2xl ring-1 ring-white/[0.06]">
                        <Image src={room.img} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out" sizes="(max-width: 1024px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        {/* Room number overlay */}
                        <div className="absolute top-5 left-5">
                          <span
                            className="text-[10px] font-medium uppercase tracking-[0.2em] px-4 py-2 rounded-full"
                            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37' }}
                          >
                            Suite 0{i + 1}
                          </span>
                        </div>
                      </div>
                      {/* Gallery thumbnails */}
                      {room.gallery.map((g, gi) => (
                        <div key={gi} className="relative h-36 md:h-48 rounded-[20px] overflow-hidden group shadow-xl ring-1 ring-white/[0.06]">
                          <Image src={g} alt={`${room.name} detail ${gi + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" sizes="250px" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Text Side ── */}
                  <div className={`${i % 2 !== 0 ? 'lg:[direction:ltr]' : ''} lg:px-4`}>
                    {/* Tagline */}
                    <div className="flex items-center gap-3" style={{ marginBottom: '16px' }}>
                      <span style={{ width: '28px', height: '1px', background: 'rgba(16,185,129,0.6)' }} />
                      <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: 'rgba(16,185,129,0.8)' }}>
                        {room.tagline}
                      </span>
                    </div>

                    {/* Room name */}
                    <h2 className="font-serif text-3xl md:text-5xl font-normal text-white tracking-wide" style={{ marginBottom: '20px', lineHeight: 1.15 }}>
                      {room.name}
                    </h2>

                    {/* Description */}
                    <p className="text-sm md:text-base leading-loose font-light" style={{ color: 'rgba(224,231,228,0.6)', marginBottom: '32px' }}>
                      {room.desc}
                    </p>

                    {/* 4 Key amenity highlights */}
                    <div className="grid grid-cols-2 gap-3" style={{ marginBottom: '32px' }}>
                      {room.highlights.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 rounded-2xl transition-all duration-500 hover:-translate-y-0.5"
                          style={{
                            padding: '14px 18px',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                            border: '1px solid rgba(212,175,55,0.15)',
                          }}
                        >
                          <Icon size={16} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
                          <span className="text-xs font-light tracking-wide text-white">{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Full amenities list */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2" style={{ marginBottom: '36px' }}>
                      {room.amenities.map((a) => (
                        <div key={a} className="flex items-center gap-2.5 text-sm font-light" style={{ color: 'rgba(224,231,228,0.5)' }}>
                          <span
                            className="flex items-center justify-center shrink-0 rounded-full"
                            style={{ width: '18px', height: '18px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}
                          >
                            <Check size={10} strokeWidth={2.5} style={{ color: '#D4AF37' }} />
                          </span>
                          {a}
                        </div>
                      ))}
                    </div>

                    {/* CTA button */}
                    <a
                      href="https://www.booking.com/hotel/lk/jungle-safari-cottage-udawalawa.en-gb.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 transition-all duration-500 hover:-translate-y-0.5"
                      style={{
                        padding: '16px 36px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(135deg, #D4AF37 0%, #b8912c 100%)',
                        boxShadow: '0 8px 28px rgba(212,175,55,0.25)',
                      }}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: '#0a0d0b' }}>
                        Explore Room
                      </span>
                      <ArrowRight size={15} strokeWidth={2} style={{ color: '#0a0d0b' }} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — ALL AMENITIES
          ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: '#0a0d0b',
          paddingTop: '120px',
          paddingBottom: '120px',
          isolation: 'isolate',
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute pointer-events-none"
          style={{ top: '33%', left: '25%', width: '500px', height: '500px', borderRadius: '9999px', filter: 'blur(150px)', opacity: 0.1, background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
        />
        <div
          className="absolute pointer-events-none"
          style={{ bottom: 0, right: '25%', width: '400px', height: '400px', borderRadius: '9999px', filter: 'blur(150px)', opacity: 0.1, background: 'radial-gradient(circle, #10b981, transparent 70%)' }}
        />

        <div className="container-premium relative">
          {/* Header */}
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <div className="flex items-center justify-center" style={{ gap: '12px', marginBottom: '20px' }}>
              <span style={{ width: '32px', height: '1px', background: 'rgba(16,185,129,0.6)' }} />
              <p style={{ fontSize: '12px', letterSpacing: '0.5em', textTransform: 'uppercase', fontWeight: 500, color: 'rgba(16,185,129,0.85)', margin: 0, marginRight: '-0.5em' }}>
                Complete List
              </p>
              <span style={{ width: '32px', height: '1px', background: 'rgba(16,185,129,0.6)' }} />
            </div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 400, color: '#ffffff', letterSpacing: '0.01em', margin: 0 }}>
              All Amenities &amp; Services
            </h2>
          </div>

          {/* Desktop Grid */}
          <div
            className="hidden md:grid items-stretch"
            style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '32px' }}
          >
            {amenityCategories.map((cat, i) => (
              <AmenityCard key={cat.title} cat={cat} i={i} />
            ))}
          </div>

          {/* Mobile Swiper */}
          <div className="block md:hidden" style={{ paddingBottom: '20px' }}>
            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              slidesPerView={1.35}
              spaceBetween={16}
              coverflowEffect={{ rotate: 0, stretch: 0, depth: 80, modifier: 1, slideShadows: false }}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              style={{ overflow: 'visible', paddingTop: '10px', paddingBottom: '10px' }}
            >
              {amenityCategories.map((cat, i) => (
                <SwiperSlide key={cat.title} style={{ height: 'auto' }}>
                  {({ isActive }) => (
                    <div
                      style={{
                        transform: isActive ? 'scale(1.03)' : 'scale(0.92)',
                        opacity: isActive ? 1 : 0.5,
                        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease',
                        height: '100%',
                      }}
                    >
                      <AmenityCard cat={cat} i={i} />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

     

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — CTA PRE-FOOTER BANNER
          ═══════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--dark-900)', paddingTop: '20px', paddingBottom: '120px' }}>
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden group"
            style={{
              borderRadius: '40px',
              padding: '0',
              minHeight: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Background Image */}
            <Image
              src="/images/support/5e7b36fc-cc22-4760-aaf9-bc0652d9042e.JPG"
              alt="Emerald Haven Safari Lodge"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[4s] ease-out"
              sizes="100vw"
              quality={90}
            />

            {/* Cinematic gradient overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,13,0.3) 0%, rgba(10,15,13,0.55) 40%, rgba(10,15,13,0.85) 100%)' }} />

            {/* Decorative gold corner accents */}
            <div className="absolute top-8 left-8 w-16 h-16 pointer-events-none" style={{ borderTop: '1px solid rgba(212,175,55,0.4)', borderLeft: '1px solid rgba(212,175,55,0.4)' }} />
            <div className="absolute top-8 right-8 w-16 h-16 pointer-events-none" style={{ borderTop: '1px solid rgba(212,175,55,0.4)', borderRight: '1px solid rgba(212,175,55,0.4)' }} />
            <div className="absolute bottom-8 left-8 w-16 h-16 pointer-events-none" style={{ borderBottom: '1px solid rgba(212,175,55,0.4)', borderLeft: '1px solid rgba(212,175,55,0.4)' }} />
            <div className="absolute bottom-8 right-8 w-16 h-16 pointer-events-none" style={{ borderBottom: '1px solid rgba(212,175,55,0.4)', borderRight: '1px solid rgba(212,175,55,0.4)' }} />

            {/* Ambient gold glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ borderRadius: '9999px', filter: 'blur(120px)', opacity: 0.12, background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />

            {/* Content */}
            <div className="relative z-10 text-center px-8 py-20 md:py-28 max-w-3xl mx-auto">
              {/* Star rating row */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" strokeWidth={0} style={{ color: '#D4AF37' }} />
                  ))}
                </div>
                <span className="ml-2 text-xs font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-md" style={{ color: '#fff', background: 'rgba(16,185,129,0.15)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(16,185,129,0.25)' }}>
                  9.7 / 10 Exceptional
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-xs tracking-[0.5em] uppercase mb-6 font-medium" style={{ color: 'rgba(16,185,129,0.85)' }}>
                Ready for Your Escape?
              </p>

              {/* Main heading */}
              <h2 className="font-serif text-5xl md:text-7xl font-normal text-white mb-6 tracking-wide leading-[1.1]">
                Book Your Safari Stay
              </h2>

              {/* Gold divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6))' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '9999px', border: '1px solid rgba(212,175,55,0.5)', background: 'rgba(212,175,55,0.15)' }} />
                <span style={{ width: '60px', height: '1px', background: 'linear-gradient(270deg, transparent, rgba(212,175,55,0.6))' }} />
              </div>

              {/* Description */}
              <p className="text-base md:text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: 'rgba(224,231,228,0.7)' }}>
                Immerse yourself in the wild beauty of Udawalawa. Your private safari retreat awaits.
              </p>

              {/* Dual buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a
                  href="https://www.booking.com/hotel/lk/jungle-safari-cottage-udawalawa.en-gb.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-500 hover:scale-105"
                  style={{
                    padding: '18px 44px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #D4AF37, #c9a227)',
                    color: '#0a0f0d',
                    boxShadow: '0 8px 30px rgba(212,175,55,0.3)',
                  }}
                >
                  Check Availability <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:scale-105"
                  style={{
                    padding: '18px 44px',
                    borderRadius: '9999px',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  Explore More
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
