'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
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
  ArrowRight, MapPin, Quote, ChevronLeft, ChevronRight, Play, Wind, Flame, Compass, Users
} from 'lucide-react';

const facilities = [
  { icon: Waves, name: 'Swimming Pool', desc: 'Year-round outdoor pool' },
  { icon: Wifi, name: 'Free WiFi', desc: 'High-speed connectivity' },
  { icon: UtensilsCrossed, name: 'Restaurant', desc: 'Multi-cuisine dining' },
  { icon: Car, name: 'Free Parking', desc: 'Private on-site parking' },
  { icon: Shield, name: '24/7 Security', desc: 'CCTV & key access' },
  { icon: Coffee, name: 'Room Service', desc: 'In-room tea/coffee maker' },
  { icon: Wind, name: 'Air Conditioning', desc: 'Individual climate control' },
  { icon: TreePine, name: 'Lush Garden', desc: 'Relaxing natural surroundings' },
  { icon: Flame, name: 'BBQ Facilities', desc: 'Evening grill and dining' },
  { icon: Compass, name: 'Safari Tours', desc: 'Guided national park tours' },
];

const rooms = [
  { name: 'Safari Family Cottage', img: '/images/support/IMG_6227.JPG', desc: 'Spacious cottage with private bathroom, garden view, balcony & terrace.', guests: '4 Guests', size: '45 m²' },
  { name: 'Deluxe Garden Room', img: '/images/support/IMG_6241.JPG', desc: 'Air-conditioned room with lush garden views and modern amenities.', guests: '2 Guests', size: '35 m²' },
  { name: 'Premium Full Package ', img: '/images/support/IMG_6226.JPG', desc: 'Premium suite with direct pool access, sun terrace & luxury furnishings.', guests: '3 Guests', size: '50 m²' },
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

      <motion.div style={{ y, opacity }} className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none will-change-transform will-change-opacity">
        <div className="flex flex-col items-center justify-center w-full text-center px-6 pointer-events-auto">
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-xs tracking-[0.6em] uppercase mb-8 will-change-transform will-change-opacity" style={{ color: 'rgba(16,185,129,0.9)' }}>
            Udawalawa, Sri Lanka
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="font-serif text-5xl md:text-7xl lg:text-[80px] font-normal mb-8 text-white leading-[1.1] tracking-wide will-change-transform will-change-opacity">
            Emerald Haven<br />
            <span style={{ background: 'linear-gradient(135deg, #dfc067, #ebd17a, #dfc067)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Safari Cottages & Glampings &nbsp;&nbsp;&nbsp;</span>
          </motion.h1>
          <div>&nbsp;&nbsp;&nbsp;
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 will-change-transform will-change-opacity">
            {/* Primary gold CTA */}&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.airbnb.co.uk/rooms/1558405581828587637?guests=1&adults=1&s=67&unique_share_id=e4819430-6264-4d66-a125-5e20a2fe6dab"
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
              Reserve Your Stay <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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
          </motion.div>
          </div>
        </div>
        
      </motion.div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-50 will-change-transform">
        <div className="w-5 h-8 rounded-full flex items-start justify-center pt-2" style={{ border: '1px solid rgba(255,255,255,0.4)' }}>
          <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.6)' }} />
        </div>
      </motion.div>
    </section>
  );
}

function FacilitiesBar() {
  const marqueeFacilities = [...facilities, ...facilities];

  return (
    <section className="relative z-20 overflow-hidden" style={{ background: 'var(--dark-800)', marginTop: '100px', marginBottom: '120px', padding: '40px 0' }}>
      <div className="flex w-full overflow-hidden">
        {[0, 1].map((idx) => (
          <div key={idx} className="animate-marquee flex-shrink-0 flex items-center justify-around min-w-full">
            {marqueeFacilities.map(({ icon: Icon, name, desc }, index) => (
              <div key={`${name}-${index}`} className="flex flex-col items-center text-center px-12 md:px-24 group cursor-default">
                <Icon size={40} strokeWidth={1.5} className="mb-6 transition-colors duration-500 group-hover:text-gold-500" style={{ color: 'rgba(16,185,129,0.5)' }} />
                <p className="text-lg font-medium text-white mb-3 tracking-wide">{name}</p>
                <p className="text-sm font-light leading-relaxed max-w-[200px]" style={{ color: 'rgba(224,231,228,0.4)' }}>{desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '200px', once: true });
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      isInView ? videoRef.current.play().catch(() => {}) : videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section ref={ref} className="pt-[80px] mt-[50px]">
      <div className="container-premium">
        <SectionHeader subtitle="Experience the Magic" title="Your Safari Adventure Awaits" description="Immerse yourself in the sights and sounds of Udawalawa — where every moment becomes a lasting memory." />
        <div className="w-full flex justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '200px' }} className="relative overflow-hidden w-full max-w-5xl rounded-3xl shadow-2xl will-change-transform will-change-opacity" style={{ marginTop: '80px', borderRadius: '32px', border: '1px solid rgba(16,185,129,0.15)', boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}>
            <video ref={videoRef} className="w-full aspect-video object-cover" muted loop playsInline preload="auto" poster="/images/hero/hero-1.jpg">
              <source src="/video/promo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(10,15,13,0.6) 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 glass-light rounded-b-[32px]">
              <p className="font-serif text-xl md:text-2xl text-white mb-2">Discover the Wilderness</p>
              <p className="text-sm" style={{ color: 'rgba(224,231,228,0.7)' }}>Safari drives · Elephant encounters · Sunset views · Nature walks</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



function RoomsSection() {
  return (
    <section className="section-padding" style={{ background: 'var(--dark-800)' }}>
      <div className="container-premium">
        <SectionHeader subtitle="Luxury Stays" title="Cottages & Glampings" description="Each sanctuary features private bathrooms, air-conditioning, garden views, and a dedicated terrace." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12" style={{ marginTop: '90px' }}>
          {rooms.map((room, i) => (
            <motion.div key={room.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '200px' }} transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col group will-change-transform will-change-opacity">
              <div className="relative w-full overflow-hidden rounded-2xl mb-8 aspect-[3/4]">
                <Image src={room.img} alt={room.name} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true} quality={90} />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,15,13,0.7) 100%)' }} />
                <div className="absolute top-6 right-6 px-5 py-2 glass-light rounded-full text-[10px] uppercase tracking-widest text-white">
                  {room.size}
                </div>
              </div>
              <div className="flex flex-col flex-1 px-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-2xl font-normal text-white tracking-wide">{room.name}</h3>
                </div>
                <p className="text-sm font-light leading-relaxed mb-8 flex-1" style={{ color: 'rgba(224,231,228,0.5)' }}>{room.desc}</p>
                <div className="flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', marginTop: '32px' }}>
                  {/* Glass Guest Pill */}
                  <div className="flex items-center gap-3 rounded-full" style={{ padding: '8px 18px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Users size={16} style={{ color: '#10B981' }} />
                    <span className="text-sm uppercase tracking-widest font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {room.guests}
                    </span> 
                  </div>

                  {/* Luxury Emerald Glass Button */}
                  <Link href="/rooms" className="group flex items-center gap-3 rounded-full transition-all duration-500 hover:scale-105" style={{ padding: '12px 28px', background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(6,78,59,0.5) 100%)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(16,185,129,0.4)', boxShadow: '0 8px 32px rgba(16,185,129,0.2)' }}>
                    <span className="text-sm uppercase tracking-widest font-bold text-white">Discover</span>
                    <ArrowRight size={16} className="text-white transition-transform duration-500 group-hover:translate-x-1" />
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
function SafariServicesSection() {
  const safariCards = [
    { title: 'Morning Safari', desc: 'Witness the jungle come alive at sunrise', img: '/images/collection/img_60.JPG' },
    { title: 'Afternoon Safari', desc: 'Golden hour drives for perfect wildlife photography', img: '/images/collection/IMG_6264.JPG' },
    { title: 'Full Day Safari', desc: 'Immersive all-day experience deep in the park', img: '/images/collection/a9b7d1c6-97e2-4bc1-a7fc-f9dc165bd4ef.JPG' },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--dark-900)' }}>
      <div className="container-premium">
        <SectionHeader subtitle="Wildlife Encounters" title="Udawalawa Safaris" description="We arrange expert-guided 4x4 jeep safaris directly from the property, ensuring an uninterrupted journey into the wild." />
        <div className="grid md:grid-cols-3 gap-10" style={{ marginTop: '90px' }}>
          {safariCards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '200px' }} transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="group relative rounded-md overflow-hidden aspect-[3/4] cursor-pointer will-change-transform will-change-opacity">
              <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" priority={true} quality={90} />
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

const AUTOPLAY_INTERVAL = 7000;

/* ── Star rating ─────────────────────────────────────────── */
function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center justify-center" style={{ gap: '6px', marginBottom: '28px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={15}
          strokeWidth={0}
          fill="#D4AF37"
          style={{ filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.35))' }}
        />
      ))}
    </div>
  );
}

/* ── review section Component ──────────────────────────────────────── */
function ReviewsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const total = reviews.length;

  const goTo = useCallback((index) => {
    setActive(((index % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((curr) => (curr + 1) % total);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, total]);

  // Pause + reset timer on any manual interaction
  const handleManualNav = (fn) => {
    setPaused(true);
    fn();
    clearInterval(timerRef.current);
    // resume autoplay after a cool-down so it doesn't immediately jump
    setTimeout(() => setPaused(false), AUTOPLAY_INTERVAL);
  };

  const review = reviews[active];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: 'var(--dark-900)', padding: '120px 0', isolation: 'isolate' }}
    >
      {/* Ambient center glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '900px', height: '500px', borderRadius: '9999px',
          filter: 'blur(140px)', opacity: 0.05,
          background: 'radial-gradient(circle, #D4AF37, transparent 70%)',
        }}
      />

      {/* Ghosted side circles — softened, integrated into flow */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: '50%', left: '2%', transform: 'translateY(-50%)',
          width: '340px', height: '340px', borderRadius: '9999px',
          border: '1px solid rgba(212,175,55,0.08)',
        }}
      />
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: '50%', left: '6%', transform: 'translateY(-50%)',
          width: '220px', height: '220px', borderRadius: '9999px',
          border: '1px solid rgba(16,185,129,0.06)',
        }}
      />
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: '50%', right: '2%', transform: 'translateY(-50%)',
          width: '340px', height: '340px', borderRadius: '9999px',
          border: '1px solid rgba(212,175,55,0.08)',
        }}
      />
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: '50%', right: '6%', transform: 'translateY(-50%)',
          width: '220px', height: '220px', borderRadius: '9999px',
          border: '1px solid rgba(16,185,129,0.06)',
        }}
      />

      <div className="relative z-10 container-premium flex flex-col items-center">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <div className="flex items-center justify-center" style={{ gap: '12px', marginBottom: '18px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.5em', textTransform: 'uppercase', fontWeight: 500, color: 'rgba(16,185,129,0.7)', margin: 0 }}>
              Guest Stories
            </p>
          </div>
          <h2 className="font-serif" style={{ fontSize: '44px', fontWeight: 400, color: '#ffffff', letterSpacing: '0.01em', marginBottom: '18px' }}>
            What Our Guests Say
          </h2>
          <p className="font-light" style={{ fontSize: '14px', color: 'rgba(224,231,228,0.5)', maxWidth: '480px', margin: '0 auto' }}>
            Rated 9.7/10 Exceptional on Booking.com — hear from travelers who made Emerald Haven their home.
          </p>
        </div>

        {/* Central Testimonial Card */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{ maxWidth: '760px' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev arrow */}
          <button
            onClick={() => handleManualNav(prev)}
            aria-label="Previous review"
            className="hidden md:flex items-center justify-center transition-all duration-500 hover:scale-110"
            style={{
              position: 'absolute', left: '-64px', top: '50%', transform: 'translateY(-50%)',
              width: '44px', height: '44px', borderRadius: '9999px',
              border: '1px solid rgba(212,175,55,0.3)',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronLeft size={18} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
          </button>

          {/* Card */}
          <div
            key={active}
            className="relative flex flex-col items-center text-center"
            style={{
              width: '100%',
              padding: '56px 48px',
              borderRadius: '28px',
              background: 'linear-gradient(160deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.005) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(212,175,55,0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
              animation: 'fadeSlide 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <Quote
              size={26}
              strokeWidth={1.25}
              fill="rgba(212,175,55,0.12)"
              style={{ color: '#D4AF37', marginBottom: '24px' }}
            />

            <StarRating count={review.rating} />

            <p
              className="font-serif"
              style={{
                fontSize: '22px',
                fontWeight: 400,
                lineHeight: 1.65,
                color: 'rgba(230,235,232,0.85)',
                marginBottom: '36px',
                maxWidth: '560px',
              }}
            >
              &quot;{review.text}&quot;
            </p>

            <div className="flex items-center" style={{ gap: '16px' }}>
              <div
                className="flex items-center justify-center rounded-full font-serif"
                style={{
                  width: '50px', height: '50px', fontSize: '18px', color: '#fff',
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.35), rgba(6,78,59,0.6))',
                  border: '1px solid rgba(212,175,55,0.25)',
                }}
              >
                {review.name.charAt(0)}
              </div>
              <div className="text-left">
                <h4 className="text-sm font-medium text-white tracking-wide">{review.name}</h4>
                <p
                  className="text-[10px] font-light uppercase"
                  style={{ letterSpacing: '0.2em', color: 'rgba(224,231,228,0.45)', marginTop: '4px' }}
                >
                  {review.country}
                </p>
              </div>
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={() => handleManualNav(next)}
            aria-label="Next review"
            className="hidden md:flex items-center justify-center transition-all duration-500 hover:scale-110"
            style={{
              position: 'absolute', right: '-64px', top: '50%', transform: 'translateY(-50%)',
              width: '44px', height: '44px', borderRadius: '9999px',
              border: '1px solid rgba(212,175,55,0.3)',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronRight size={18} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
          </button>
        </div>

        {/* Mobile arrows (below card, since side arrows are hidden on mobile) */}
        <div className="flex md:hidden items-center" style={{ gap: '20px', marginTop: '28px' }}>
          <button
            onClick={() => handleManualNav(prev)}
            aria-label="Previous review"
            className="flex items-center justify-center"
            style={{ width: '40px', height: '40px', borderRadius: '9999px', border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(255,255,255,0.02)' }}
          >
            <ChevronLeft size={16} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
          </button>
          <button
            onClick={() => handleManualNav(next)}
            aria-label="Next review"
            className="flex items-center justify-center"
            style={{ width: '40px', height: '40px', borderRadius: '9999px', border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(255,255,255,0.02)' }}
          >
            <ChevronRight size={16} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center" style={{ gap: '12px', marginTop: '40px' }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManualNav(() => goTo(i))}
              aria-label={`Go to review ${i + 1}`}
              className="transition-all duration-500"
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                background: i === active ? '#10b981' : 'rgba(212,175,55,0.3)',
                boxShadow: i === active ? '0 0 10px rgba(16,185,129,0.5)' : 'none',
                cursor: 'pointer',
                border: 'none',
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}



export default function Home() {
  return (
    <div className="page-transition">
      <HeroSection />
      <FacilitiesBar />
      <VideoSection />
      <RoomsSection />
      <SafariServicesSection />
      <ReviewsSection />
      
    </div>
  );
}
