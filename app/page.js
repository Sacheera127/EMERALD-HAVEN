'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import SectionHeader from './components/SectionHeader';
import {
  Star, Wifi, Car, UtensilsCrossed, Waves, TreePine, Shield, Coffee,
  ArrowRight, MapPin, Quote, ChevronLeft, ChevronRight, Play
} from 'lucide-react';

const facilities = [
  { icon: Waves, name: 'Swimming Pool', desc: 'Year-round outdoor pool' },
  { icon: Wifi, name: 'Free WiFi', desc: 'High-speed connectivity' },
  { icon: UtensilsCrossed, name: 'Restaurant', desc: 'Multi-cuisine dining' },
  { icon: Car, name: 'Free Parking', desc: 'Private on-site parking' },
  { icon: Shield, name: '24/7 Security', desc: 'CCTV & key access' },
  { icon: Coffee, name: 'Room Service', desc: 'In-room tea/coffee maker' },
];

const rooms = [
  { name: 'Safari Family Cottage', img: '/images/support/IMG_6225.JPG', desc: 'Spacious cottage with private bathroom, garden view, balcony & terrace.', guests: '4 Guests', size: '45 m²' },
  { name: 'Deluxe Garden Room', img: '/images/support/IMG_6237.JPG', desc: 'Air-conditioned room with lush garden views and modern amenities.', guests: '2 Guests', size: '35 m²' },
  { name: 'Premium Pool Suite', img: '/images/support/IMG_6239.JPG', desc: 'Premium suite with direct pool access, sun terrace & luxury furnishings.', guests: '3 Guests', size: '50 m²' },
];

const reviews = [
  { name: 'Kyle', country: 'United Kingdom', rating: 9.8, text: 'Fantastic value for money, clean, comfortable and good ac.', category: 'Staff' },
  { name: 'Sarah', country: 'Australia', rating: 9.9, text: 'The safari arrangement was incredible! The cottages are beautiful and the pool area is stunning.', category: 'Location' },
  { name: 'Marco', country: 'Germany', rating: 9.7, text: 'Best stay in Sri Lanka. The restaurant food was amazing — especially the BBQ grill night.', category: 'Facilities' },
  { name: 'Yuki', country: 'Japan', rating: 10, text: 'Perfect location for Udawalawa safari. Staff went above and beyond. Will return!', category: 'Comfort' },
];

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="hero" className="relative h-[calc(100vh-80px)] min-h-[700px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {['/images/hero/landing.jpg'].map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <Image src={src} alt={`Emerald Haven Safari Cottages view ${i + 1}`} fill className="object-cover" priority={i === 0} sizes="100vw" quality={90} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,13,0.3) 0%, rgba(10,15,13,0.3) 40%, rgba(10,15,13,0.9) 100%)' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div style={{ y, opacity }} className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center px-6 pointer-events-auto">
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-xs tracking-[0.6em] uppercase mb-8" style={{ color: 'rgba(16,185,129,0.9)' }}>
            Udawalawa, Sri Lanka
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="font-serif text-5xl md:text-7xl lg:text-[80px] font-normal mb-8 text-white leading-[1.1] tracking-wide">
            Emerald Haven<br />
            <span style={{ background: 'linear-gradient(135deg, #dfc067, #ebd17a, #dfc067)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Safari Cottages</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="text-sm md:text-lg max-w-2xl mx-auto mb-12 font-light tracking-wide" style={{ color: 'rgba(224,231,228,0.7)' }}>
            Where untamed wilderness meets refined luxury — 16 km from Udawalawa National Park
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://www.booking.com/hotel/lk/jungle-safari-cottage-udawalawa.en-gb.html" target="_blank" rel="noopener noreferrer" className="btn-book" id="hero-book-now">Reserve Your Stay</a>
            <Link href="/rooms" className="text-sm font-light tracking-widest uppercase transition-all duration-300 hover:text-emerald-400" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Explore Rooms
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-50">
        <div className="w-5 h-8 rounded-full flex items-start justify-center pt-2" style={{ border: '1px solid rgba(255,255,255,0.4)' }}>
          <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.6)' }} />
        </div>
      </motion.div>
    </section>
  );
}

function FacilitiesBar() {
  return (
    <section className="relative z-20 py-24" style={{ background: 'var(--dark-800)' }}>
      <div className="container-premium">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12">
          {facilities.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="flex flex-col items-center text-center px-4 group cursor-default">
              <Icon size={28} strokeWidth={1.5} className="mb-4 transition-colors duration-500 group-hover:text-gold-500" style={{ color: 'rgba(16,185,129,0.5)' }} />
              <p className="text-sm font-normal text-white mb-2 tracking-wide">{name}</p>
              <p className="text-[11px] font-light leading-relaxed" style={{ color: 'rgba(224,231,228,0.4)' }}>{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      isInView ? videoRef.current.play().catch(() => {}) : videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section ref={ref} className="section-padding">
      <div className="container-premium">
        <SectionHeader subtitle="Experience the Magic" title="Your Safari Adventure Awaits" description="Immerse yourself in the sights and sounds of Udawalawa — where every moment becomes a lasting memory." />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(16,185,129,0.15)' }}>
          <video ref={videoRef} className="w-full aspect-video object-cover" muted loop playsInline preload="metadata" poster="/images/hero/hero-1.jpg">
            <source src="/video/promo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(10,15,13,0.6) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 glass-light rounded-b-2xl">
            <p className="font-serif text-xl md:text-2xl text-white mb-2">Discover the Wilderness</p>
            <p className="text-sm" style={{ color: 'rgba(224,231,228,0.7)' }}>Safari drives · Elephant encounters · Sunset views · Nature walks</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SafariServicesSection() {
  const safariCards = [
    { title: 'Morning Safari', desc: 'Witness the jungle come alive at sunrise', img: '/images/collection/1e53ee0a-c57f-43f9-98f4-5172043bbb8e.JPG' },
    { title: 'Evening Safari', desc: 'Golden hour drives for perfect wildlife photography', img: '/images/collection/f9c89139-3837-4d9d-9c32-b7d6056f4d1e.JPG' },
    { title: 'Full Day Safari', desc: 'Immersive all-day experience deep in the park', img: '/images/collection/5a76cede-17df-4ba3-8c81-23b6b1d68f4a.JPG' },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--dark-900)' }}>
      <div className="container-premium">
        <SectionHeader subtitle="Wildlife Encounters" title="Udawalawa Safaris" description="We arrange expert-guided 4x4 jeep safaris directly from the property, ensuring an uninterrupted journey into the wild." />
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {safariCards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="group relative rounded-md overflow-hidden aspect-[3/4] cursor-pointer">
              <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 transition-opacity duration-700" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(10,15,13,0.95) 100%)' }} />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <h3 className="font-serif text-3xl font-normal text-white mb-3 tracking-wide">{card.title}</h3>
                  <p className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed" style={{ color: 'rgba(224,231,228,0.6)' }}>{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomsSection() {
  return (
    <section className="section-padding" style={{ background: 'var(--dark-800)' }}>
      <div className="container-premium">
        <SectionHeader subtitle="Luxury Stays" title="Rooms & Cottages" description="Each sanctuary features private bathrooms, air-conditioning, garden views, and a dedicated terrace." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {rooms.map((room, i) => (
            <motion.div key={room.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col group">
              <div className="relative h-[400px] w-full overflow-hidden rounded-md mb-8">
                <Image src={room.img} alt={room.name} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="absolute top-6 right-6 px-4 py-2 glass-light rounded-sm text-[10px] uppercase tracking-widest text-white">
                  {room.size}
                </div>
              </div>
              <div className="flex flex-col flex-1 px-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-2xl font-normal text-white tracking-wide">{room.name}</h3>
                </div>
                <p className="text-sm font-light leading-relaxed mb-8 flex-1" style={{ color: 'rgba(224,231,228,0.5)' }}>{room.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="text-xs uppercase tracking-widest font-light" style={{ color: 'rgba(224,231,228,0.7)' }}>{room.guests}</span>
                  <Link href={`/rooms`} className="text-xs uppercase tracking-widest font-medium text-white flex items-center gap-3 group-hover:text-gold-400 transition-colors duration-500">
                    Discover <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'var(--dark-900)' }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,162,39,1) 0%, transparent 60%)' }} />
      <div className="container-premium relative z-10">
        <SectionHeader subtitle="Guest Stories" title="What Our Guests Say" description="Rated 9.7/10 Exceptional on Booking.com — hear from travelers who made Emerald Haven their home." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {reviews.map((review, i) => (
            <motion.div key={review.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="glass p-10 flex flex-col rounded-md">
              <Quote size={28} strokeWidth={1} style={{ color: 'rgba(201,162,39,0.3)' }} className="mb-6" />
              <p className="text-sm font-light italic leading-loose flex-1 mb-8" style={{ color: 'rgba(224,231,228,0.6)' }}>"{review.text}"</p>
              
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-white font-serif text-lg rounded-sm" style={{ background: 'linear-gradient(135deg, var(--emerald-800), var(--emerald-900))' }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white tracking-wide">{review.name}</h4>
                  <p className="text-[10px] font-light uppercase tracking-widest mt-1" style={{ color: 'rgba(224,231,228,0.4)' }}>{review.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page-transition">
      <HeroSection />
      <FacilitiesBar />
      <VideoSection />
      <SafariServicesSection />
      <RoomsSection />
      <ReviewsSection />
    </div>
  );
}
