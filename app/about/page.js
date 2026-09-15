'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import SectionHeader from '../components/SectionHeader';
import { Waves, Wifi, UtensilsCrossed, Car, Shield, Coffee, TreePine, Sun, Sparkles, Users, MapPin, Star, ArrowRight, Check } from 'lucide-react';

const highlights = [
  { icon: Waves, title: 'Outdoor Pool', desc: 'Year-round swimming pool open to all ages with sun loungers & umbrellas' },
  { icon: Wifi, title: 'Free WiFi', desc: 'High-speed internet available in all areas free of charge' },
  { icon: UtensilsCrossed, title: 'Restaurant', desc: 'Chinese, Indian, Local, Asian, International & BBQ cuisines' },
  { icon: Car, title: 'Free Parking', desc: 'Free private parking on-site, no reservation needed' },
  { icon: Shield, title: '24/7 Security', desc: 'CCTV, key access, safety deposit box & 24-hour front desk' },
  { icon: Coffee, title: 'Room Service', desc: 'Tea/coffee maker in all rooms, breakfast in room available' },
  { icon: TreePine, title: 'Lush Gardens', desc: 'Beautiful sun terrace, lush gardens & outdoor dining areas' },
  { icon: Sun, title: 'Wellness', desc: 'Light therapy, body treatments, beauty services & spa facilities' },
];

const amenityCategories = [
  { title: 'Great for Your Stay', items: ['Restaurant', 'Balcony', 'Private bathroom', 'Air conditioning', 'Free WiFi', 'Terrace', 'Family rooms', 'Room service'] },
  { title: 'Activities', items: ['Bicycle rental', 'Cooking class', 'Cultural tours', 'Bike tours', 'Walking tours', 'Badminton', 'Snorkelling', 'Children\'s playground'] },
  { title: 'Food & Drink', items: ['Fruits', 'Kid-friendly buffet', 'Kids\' meals', 'Special diet menus', 'Breakfast in room', 'Restaurant', 'Tea/Coffee maker', 'Wine/champagne'] },
  { title: 'Outdoors', items: ['Outdoor fireplace', 'Picnic area', 'Outdoor furniture', 'Sun terrace', 'Barbecue', 'Patio', 'Balcony', 'Garden'] },
];

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

      {/* Header row: gold line + index number */}
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

export default function AboutPage() {
  return (
    <div className="page-transition pt-24">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="/images/support/IMG_6226.JPG" alt="About Emerald Haven" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,13,0.6), rgba(10,15,13,0.8))' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6">
            <p className="text-xs tracking-[0.6em] uppercase mb-6 font-medium" style={{ color: 'rgba(16,185,129,0.7)' }}>Our Story</p>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-white mb-6 tracking-wide">About Emerald Haven</h1>
            <p className="text-base max-w-2xl mx-auto font-light leading-relaxed tracking-wide" style={{ color: 'rgba(224,231,228,0.7)' }}>Where luxury meets the wild — a sanctuary of comfort in the heart of Udawalawa.</p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding" style={{ background: 'var(--dark-800)' }}>
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>

              {/* Section Label - Emerald Green */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px]" style={{ background: 'rgba(16,185,129,0.6)' }} />
                <p className="text-xs tracking-[0.5em] uppercase font-medium" style={{ color: 'rgba(16,185,129,0.85)' }}>The Property</p>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-10 tracking-wide leading-tight">
                Comfortable Accommodations in the Heart of Nature
              </h2>&nbsp;&nbsp;&nbsp;

              <div className="space-y-6 text-sm md:text-base leading-loose font-light" style={{ color: 'rgba(224,231,228,0.62)' }}>
                <p>
                  <strong className="text-white font-medium">Bespoke Comfort:</strong> Emerald Haven Safari Cottages in Udawalawa offers family rooms with private bathrooms, air-conditioning, and garden views. Each room includes a private balcony or terrace, ensuring a pleasant and immersive stay.
                </p>
                <p>
                  <strong className="text-white font-medium">Exceptional Facilities:</strong> Guests enjoy a sun terrace, lush garden, and a year-round outdoor swimming pool. High-speed WiFi is available throughout the property, enhancing connectivity without compromising tranquility.
                </p>
                <p>
                  <strong className="text-white font-medium">Dining Experience:</strong> The on-site restaurant serves Chinese, Indian, local, Asian, international, and barbecue grill cuisines. Breakfast options include full English, vegetarian, vegan, and gluten-free.
                </p>
                <p>
                  <strong className="text-white font-medium">Convenient Location:</strong> Located merely 16 km from Udawalawa National Park and 50 km from Mattala Rajapaksa International Airport, the lodge provides seamless access to prime attractions.
                </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>

              {/* Glassmorphism Rating Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-24">&nbsp;&nbsp;&nbsp;
                <div className="group flex items-center gap-5 rounded-[24px] cursor-pointer transition-all duration-500 hover:scale-105" style={{ padding: '16px 32px 16px 20px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                  <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)', border: '1px solid rgba(212,175,55,0.4)', boxShadow: '0 4px 20px rgba(212,175,55,0.15)' }}>
                    <span className="text-lg font-bold text-[#D4AF37] tracking-wide">9.7</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-white tracking-[0.2em] uppercase leading-tight">Exceptional</p>
                    <p className="text-xs font-light mt-1.5" style={{ color: 'rgba(224,231,228,0.6)' }}>139 reviews</p>
                  </div>
                </div>

                <div className="group flex items-center gap-5 rounded-[24px] cursor-pointer transition-all duration-500 hover:scale-105" style={{ padding: '16px 32px 16px 20px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                  <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)', border: '1px solid rgba(212,175,55,0.4)', boxShadow: '0 4px 20px rgba(212,175,55,0.15)' }}>
                    <MapPin size={22} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-white tracking-[0.2em] uppercase leading-tight">9.7 Location</p>
                    <p className="text-xs font-light mt-1.5" style={{ color: 'rgba(224,231,228,0.6)' }}>Highly rated</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative">
              {/* Ambient gold glow behind the gallery for depth */}
              <div className="absolute -inset-6 rounded-[48px] blur-3xl opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%)' }} />

              <div className="relative grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                  <div className="relative h-64 md:h-72 rounded-[28px] overflow-hidden group shadow-2xl ring-1 ring-white/[0.06]">
                    <Image src="/images/support/IMG_6225.JPG" alt="Cottage exterior" fill className="object-cover group-hover:scale-110 transition-transform duration-[1.8s] ease-out" sizes="300px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div className="relative h-72 md:h-96 rounded-[28px] overflow-hidden group shadow-2xl ring-1 ring-white/[0.06]">
                    <Image src="/images/support/IMG_6237.JPG" alt="Room interior" fill className="object-cover group-hover:scale-110 transition-transform duration-[1.8s] ease-out" sizes="300px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
                <div className="flex flex-col gap-6 pt-16">
                  <div className="relative h-72 md:h-96 rounded-[28px] overflow-hidden group shadow-2xl ring-1 ring-white/[0.06]">
                    <Image src="/images/support/IMG_6226.JPG" alt="Pool area" fill className="object-cover group-hover:scale-110 transition-transform duration-[1.8s] ease-out" sizes="300px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div className="relative h-64 md:h-72 rounded-[28px] overflow-hidden group shadow-2xl ring-1 ring-white/[0.06]">
                    <Image src="/images/support/IMG_6239.JPG" alt="Garden view" fill className="object-cover group-hover:scale-110 transition-transform duration-[1.8s] ease-out" sizes="300px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="relative overflow-hidden w-full" style={{ background: 'var(--dark-900)', paddingTop: '100px', paddingBottom: '100px', isolation: 'isolate' }}>
        {/* Ambient glow */}
        <div className="absolute pointer-events-none" style={{ top: '10%', right: '10%', width: '450px', height: '450px', borderRadius: '9999px', filter: 'blur(140px)', opacity: 0.08, background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
        <div className="container-premium space-y-20 relative">
          <SectionHeader subtitle="World-Class Amenities" title="Facilities & Services" description="Everything you need for a perfect stay — from poolside relaxation to gourmet dining." />  &nbsp;&nbsp;&nbsp;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center text-center h-full"
                style={{
                  padding: '40px 24px 32px',
                  borderRadius: '24px',
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {/* Icon badge with double ring */}
                <div className="relative flex items-center justify-center mb-7" style={{ width: '72px', height: '72px' }}>
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-700 group-hover:scale-110"
                    style={{ border: '1px solid rgba(212,175,55,0.25)' }}
                  />
                  <div
                    className="absolute rounded-full transition-all duration-700 group-hover:rotate-180"
                    style={{ inset: '6px', border: '1px dashed rgba(56,148,237,0.35)' }}
                  />
                  <div
                    className="relative flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-105"
                    style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.03)' }}
                  >
                    <Icon size={22} strokeWidth={1.25} className="transition-colors duration-500" style={{ color: 'rgba(96,165,250,0.85)' }} />
                  </div>
                </div>
                <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-white mb-3">{title}</h3>
                {/* Expanding gold divider */}
                <span
                  className="transition-all duration-500 group-hover:w-10"
                  style={{ width: '20px', height: '1px', background: '#D4AF37', opacity: 0.6, marginBottom: '14px' }}
                />
                <p className="text-xs font-light leading-relaxed" style={{ color: 'rgba(224,231,228,0.45)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      



      {/* CTA — $10K Luxury Banner */}
      <section style={{ background: 'var(--dark-900)', paddingTop: '120px', paddingBottom: '120px' }}>
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
            {/* Background Image — high visibility */}
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
                <span className="ml-2 text-xs font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-md" style={{ color: '#fff', background: 'rgba(16,185,129,0.15)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(16,185,129,0.25)' }}>9.7 / 10 Exceptional</span>
              </div>

              {/* Subtitle */}
              <p className="text-xs tracking-[0.5em] uppercase mb-6 font-medium" style={{ color: 'rgba(16,185,129,0.85)' }}>Ready to Experience?</p>

              {/* Main heading */}
              <h2 className="font-serif text-5xl md:text-7xl font-normal text-white mb-6 tracking-wide leading-[1.1]">
                Book Your Safari Stay
              </h2>

              {/* Elegant gold divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6))' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '9999px', border: '1px solid rgba(212,175,55,0.5)', background: 'rgba(212,175,55,0.15)' }} />
                <span style={{ width: '60px', height: '1px', background: 'linear-gradient(270deg, transparent, rgba(212,175,55,0.6))' }} />
              </div>

              {/* Description */}
              <p className="text-base md:text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: 'rgba(224,231,228,0.7)' }}>
                Immerse yourself in the wild beauty of Udawalawa. Your private safari retreat awaits.
              </p><br>
              </br>

              {/* Dual button row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                {/* Primary gold CTA */}
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
                  Reserve Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>

                {/* Ghost / outline button */}
                <a
                  href="/rooms"
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
                  Explore Rooms
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
