'use client';

import { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TreePine, Car, Map, Sparkles, Clock, ArrowRight, Check,
  Loader2, Compass, Camera, Mountain, Waves, Sun, Star,
  Globe, Users, Calendar, Zap, ChevronRight,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════ */

const tourPackages = [
  {
    duration: '7 Days',
    tag: 'Essential',
    title: 'Essential Sri Lanka',
    highlights: [
      'Udawalawa Safari',
      'Ella Train Ride',
      'Galle Fort',
      'Mirissa Whale Watching',
      'Sigiriya Rock Fortress',
      'Temple of the Tooth',
    ],
    desc: 'Perfect introduction to Sri Lanka covering the most iconic destinations. A curated week of wonder through ancient kingdoms, misty peaks, and golden coastlines.',
    img: '/images/collection/1e53ee0a-c57f-43f9-98f4-5172043bbb8e.JPG',
  },
  {
    duration: '14 Days',
    tag: 'Popular',
    title: 'Grand Sri Lanka Explorer',
    highlights: [
      'All 7-Day highlights',
      'Yala National Park',
      'Nuwara Eliya Tea Country',
      'Trincomalee Beaches',
      'Dambulla Cave Temple',
      'Kandy Cultural Tour',
      'Arugam Bay Surfing',
      'Colombo City Tour',
    ],
    desc: 'Comprehensive journey across the entire island with diverse experiences — from leopard-spotting in Yala to surfing in Arugam Bay.',
    img: '/images/collection/a9b7d1c6-97e2-4bc1-a7fc-f9dc165bd4ef.JPG',
  },
  {
    duration: '21 Days',
    tag: 'Ultimate',
    title: 'Ultimate Sri Lanka Odyssey',
    highlights: [
      'All 14-Day highlights',
      'Wilpattu National Park',
      'Jaffna Peninsula',
      "Adam's Peak Trek",
      'Polonnaruwa Ruins',
      'Kalpitiya Dolphins',
      'Cooking Classes',
      'Village Homestay',
    ],
    desc: 'The definitive Sri Lankan experience — every corner of paradise explored at a luxurious pace with exclusive local encounters.',
    img: '/images/collection/72cbcea6-5b51-4145-8b66-a6a131dbba41.JPG',
  },
];

const taxiServices = [
  {
    title: 'Airport Transfer',
    desc: 'Comfortable AC vehicle transfers from Mattala (50 km) or Colombo airport. Meet & greet at arrivals with complimentary water.',
    icon: Car,
    stat: 'From 50 km',
  },
  {
    title: 'City-to-City Transfer',
    desc: 'Private transfers to Ella, Kandy, Galle, Mirissa, and beyond. Flexible stops for sightseeing en route.',
    icon: Map,
    stat: 'All Island',
  },
  {
    title: 'Day Trip Chauffeur',
    desc: 'Full-day private vehicle with driver for sightseeing and exploration. Fully customizable itinerary.',
    icon: Clock,
    stat: '8–12 Hours',
  },
];

const safariFeatures = [
  'Morning & evening safari drives available',
  'Expert English-speaking naturalist guides',
  'Comfortable 4×4 jeep vehicles',
  'Spot elephants, leopards & 200+ bird species',
  'Half-day & full-day options',
  'Refreshments & packed lunch included',
];

/* ═══════════════════════════════════════════════════
   ANIMATION PRESETS
   ═══════════════════════════════════════════════════ */

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1, ease },
};

const stagger = (delay = 0) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

/* ═══════════════════════════════════════════════════
   MEMOIZED SUB-COMPONENTS
   ═══════════════════════════════════════════════════ */

const TaxiCard = memo(({ service, index }) => {
  const Icon = service.icon;
  return (
    <motion.div
      {...stagger(index * 0.15)}
      className="group relative p-10 md:p-12 rounded-[32px] backdrop-blur-xl bg-white/[0.025] border border-white/[0.06] transition-all duration-700 hover:-translate-y-3 hover:border-[#D4AF37]/30 hover:shadow-[0_32px_80px_rgba(212,175,55,0.08)]"
    >
      {/* Subtle corner glow on hover */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#D4AF37]/[0.03] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 mb-10 transition-all duration-500 group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_0_24px_rgba(212,175,55,0.15)]">
          <Icon size={26} strokeWidth={1.25} className="text-[#D4AF37]" />
        </div>

        <span className="inline-block text-[10px] tracking-[0.5em] uppercase font-medium text-emerald-400/60 mb-4">
          {service.stat}
        </span>

        <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-white mb-5">
          {service.title}
        </h3>

        <p className="text-sm font-light leading-[1.9] text-white/45 mb-8">
          {service.desc}
        </p>

        <a
          href="https://wa.me/94774621521?text=Hi!%20I%27m%20interested%20in%20your%20transfer%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors duration-300"
        >
          Book Transfer
          <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
});
TaxiCard.displayName = 'TaxiCard';

/* ═══════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════ */

export default function TourServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [aiForm, setAiForm] = useState({
    interests: '',
    duration: '7',
    travelers: '2',
    budget: 'moderate',
  });
  const [aiResult, setAiResult] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const generateItinerary = useCallback(() => {
    setAiLoading(true);
    setAiResult('');
    setTimeout(() => {
      setAiResult(
        `🌴 **Your Custom ${aiForm.duration}-Day Sri Lanka Itinerary**\n\n` +
          `For ${aiForm.travelers} traveler(s) | Pace: ${aiForm.budget}\n` +
          `Based on your interests: ${aiForm.interests || 'Wildlife & Nature'}\n\n` +
          `**Day 1-2:** Arrive at Emerald Haven Safari Cottages, Udawalawa. Welcome dinner, pool relaxation, and morning safari at Udawalawa National Park.\n\n` +
          `**Day 3:** Visit the Elephant Transit Home, nature walk through Nuwaragala Forest, evening BBQ at the cottage.\n\n` +
          `**Day 4-5:** ${aiForm.interests.includes('beach') ? 'Head to Mirissa for whale watching and beach time' : "Explore Ella — Nine Arch Bridge, Little Adam's Peak, scenic train ride"}.\n\n` +
          `**Day 6${Number(aiForm.duration) > 7 ? '-8' : ''}:** ${aiForm.interests.includes('culture') ? 'Kandy Temple of the Tooth, cultural shows, and tea plantation visit' : 'Yala National Park safari for leopard spotting, Tissamaharama lake visit'}.\n\n` +
          `${Number(aiForm.duration) > 7 ? '**Day 9-' + aiForm.duration + ':** Extended exploration including Sigiriya Rock Fortress, Dambulla Cave Temple, and Galle Fort. Return to Colombo for departure.\n\n' : '**Day 7:** Return transfer to airport. Departure with unforgettable memories.\n\n'}` +
          `📞 Contact us to customize this itinerary further!`
      );
      setAiLoading(false);
    }, 2500);
  }, [aiForm]);

  const activePkg = tourPackages[activeTab];

  return (
    <main className="w-full relative overflow-hidden bg-gradient-to-b from-[#05100c] to-[#020705]">

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════════════════════════════ */}
      <section className="w-full relative h-[75vh] min-h-[560px] overflow-hidden">
        <Image
          src="/images/collection/a9b7d1c6-97e2-4bc1-a7fc-f9dc165bd4ef.JPG"
          alt="Tour Services"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#05100c]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Decorative light leak */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/[0.04] blur-[120px] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease }}
              className="flex flex-col items-center text-center"
            >
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-10">
                <Compass size={13} strokeWidth={1.5} className="text-[#D4AF37]" />
                <span className="text-[10px] tracking-[0.45em] uppercase font-medium text-white/70">
                  Adventures & Journeys
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-wide leading-[1.05] mb-8">
                Tour Services
                <br />
                <span className="italic text-[#D4AF37]/85">&amp; Adventures</span>
              </h1>

              <p className="max-w-xl text-base md:text-lg font-light tracking-wide leading-relaxed text-white/50">
                Safari arrangements, island-wide transfers, and bespoke multi-day
                journeys crafted around your desires.
              </p>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-16 flex items-center gap-3"
              >
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/30">Scroll to explore</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — SAFARI ARRANGEMENTS (Editorial Magazine Layout)
          ══════════════════════════════════════════════════════════════ */}
      <section className="w-full relative px-6 md:px-12 py-20 lg:py-32 overflow-hidden flex flex-col items-center">
        {/* Ambient orb */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.04] bg-[#D4AF37] pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Section label */}
          <motion.div {...fadeUp} className="mb-20 md:mb-28">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
              <span className="text-[10px] tracking-[0.6em] uppercase font-medium text-emerald-400/60">
                Wild Encounters
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white tracking-wide leading-[1.1]">
              Safari <span className="italic text-[#D4AF37]/80">Arrangements</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base font-light leading-[2] text-white/45">
              We arrange expert-guided jeep safaris to Udawalawa National Park — home to over 600
              elephants roaming freely across vast grasslands, alongside leopards, water buffalo,
              and over 200 exotic bird species.
            </p>
          </motion.div>

          {/* Editorial image + overlapping card */}
          <div className="w-full relative">
            {/* Main image — full width */}
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease }}
              className="w-full relative h-[450px] md:h-[650px] lg:h-[720px] rounded-[36px] overflow-hidden group"
            >
              <Image
                src="/images/collection/1e53ee0a-c57f-43f9-98f4-5172043bbb8e.JPG"
                alt="Safari at Udawalawa"
                fill
                className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 90vw"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

              {/* Floating stats on image (desktop only) */}
              <div className="hidden md:flex absolute bottom-10 left-10 gap-8">
                {[
                  { num: '600+', label: 'Elephants' },
                  { num: '200+', label: 'Bird Species' },
                  { num: '16km', label: 'From Haven' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-serif text-3xl text-white/90 tracking-wide">{s.num}</div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Overlapping glassmorphic card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="relative md:absolute md:-bottom-20 md:right-10 md:w-[48%] lg:w-[42%] mt-[-48px] md:mt-0 mx-0 p-10 md:p-14 rounded-[32px] backdrop-blur-2xl bg-[#0a1510]/80 border border-[#D4AF37]/15 shadow-[0_40px_100px_rgba(0,0,0,0.5)] flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <TreePine size={20} strokeWidth={1.5} className="text-[#D4AF37]" />
                <span className="text-[10px] tracking-[0.5em] font-medium uppercase text-emerald-400/70">
                  Safari Experience
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-white mb-3 tracking-wide font-normal leading-tight">
                Udawalawa
                <br />
                <span className="italic text-[#D4AF37]/80">National Park</span>
              </h3>

              <p className="text-sm font-light leading-[1.9] text-white/40 mb-10">
                One of Sri Lanka&apos;s most treasured wildlife experiences — just minutes from Emerald Haven.
              </p>

              <ul className="space-y-4 mb-12 text-left">
                {safariFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-sm font-light tracking-wide text-white/55">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#D4AF37]/10 border border-[#D4AF37]/25 shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={3} className="text-[#D4AF37]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/94774621521?text=Hi!%20I%27m%20interested%20in%20a%20safari%20arrangement."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#b8912c] shadow-[0_12px_36px_rgba(212,175,55,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(212,175,55,0.3)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#05100c]">Arrange Safari</span>
                <ArrowRight size={15} strokeWidth={2} className="text-[#05100c] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Spacer for overlapping card on desktop */}
          <div className="hidden md:block h-32" />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — TAXI & TRANSFER SERVICES
          ══════════════════════════════════════════════════════════════ */}
      <section className="w-full relative px-6 md:px-12 py-20 lg:py-32 overflow-hidden flex flex-col items-center">
        {/* Ambient orb */}
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[180px] opacity-[0.03] bg-emerald-500 pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Section label */}
          <motion.div {...fadeUp} className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
              <span className="text-[10px] tracking-[0.6em] uppercase font-medium text-emerald-400/60">
                Transportation
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white tracking-wide">
              Taxi & <span className="italic text-[#D4AF37]/80">Transfers</span>
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-base font-light leading-[2] text-white/45">
              Airport pickups, city-to-city transfers, and private chauffeur services across Sri Lanka.
              Travel in comfort with our trusted partner drivers.
            </p>
          </motion.div>

          {/* Cards grid — full width 3 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {taxiServices.map((service, i) => (
              <TaxiCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — FULL TOUR PACKAGES (Interactive Tabs)
          ══════════════════════════════════════════════════════════════ */}
      <section className="w-full relative px-6 md:px-12 py-20 lg:py-32 overflow-hidden flex flex-col items-center">
        {/* Ambient orbs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[180px] opacity-[0.04] bg-emerald-500 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.03] bg-[#D4AF37] pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto relative flex flex-col items-center">
          {/* Section label */}
          <motion.div {...fadeUp} className="text-center mb-20 md:mb-28">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
              <span className="text-[10px] tracking-[0.6em] uppercase font-medium text-emerald-400/60">
                Explore Sri Lanka
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white tracking-wide">
              Full Tour <span className="italic text-[#D4AF37]/80">Packages</span>
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-base font-light leading-[2] text-white/45">
              Curated multi-day itineraries to discover the best of Sri Lanka,
              tailored to every kind of traveler.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div {...stagger(0.1)} className="flex justify-center gap-3 sm:gap-4 flex-wrap mb-16 md:mb-20">
            {tourPackages.map((pkg, i) => (
              <button
                key={pkg.duration}
                onClick={() => setActiveTab(i)}
                className={`relative px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 ${
                  activeTab === i
                    ? 'text-white bg-white/[0.06] border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.08)]'
                    : 'text-white/35 border border-white/[0.06] hover:border-white/15 hover:text-white/60'
                }`}
              >
                <span className="relative z-10">{pkg.duration}</span>
                {activeTab === i && (
                  <motion.span
                    layoutId="tour-tab-glow"
                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-10 h-[2px] rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.7)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab content — full-width 12-col grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
            >
              {/* Left — Details card (7 columns) */}
              <div className="lg:col-span-7 p-10 md:p-14 rounded-[32px] backdrop-blur-xl bg-white/[0.025] border border-white/[0.06] flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <span className="px-4 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-medium bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37]">
                    {activePkg.tag}
                  </span>
                  <span className="text-[10px] tracking-[0.4em] uppercase font-light text-emerald-400/70">
                    {activePkg.duration} Tour
                  </span>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 tracking-wide leading-tight">
                  {activePkg.title}
                </h3>

                <p className="text-base font-light leading-[2] mb-12 text-white/45">
                  {activePkg.desc}
                </p>

                <h4 className="text-[10px] uppercase tracking-[0.4em] font-medium text-[#D4AF37]/80 mb-8">
                  Tour Highlights
                </h4>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-14 flex-1 text-left">
                  {activePkg.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3 text-sm font-light tracking-wide text-white/50">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#D4AF37]/10 border border-[#D4AF37]/25 shrink-0">
                        <Check size={10} strokeWidth={3} className="text-[#D4AF37]" />
                      </span>
                      {h}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/94774621521?text=Hi!%20I%27m%20interested%20in%20the%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#b8912c] shadow-[0_12px_36px_rgba(212,175,55,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(212,175,55,0.3)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#05100c]">Inquire Now</span>
                  <ArrowRight size={15} strokeWidth={2} className="text-[#05100c] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Right — Image (5 columns) */}
              <div className="lg:col-span-5 relative h-[420px] lg:h-auto min-h-[520px] rounded-[32px] overflow-hidden group">
                <Image
                  src={activePkg.img}
                  alt={activePkg.title}
                  fill
                  className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Duration badge overlay */}
                <div className="absolute top-8 left-8 px-5 py-2.5 rounded-full backdrop-blur-md bg-black/30 border border-white/10">
                  <span className="text-xs tracking-[0.3em] uppercase font-medium text-white/80">
                    {activePkg.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — AI CUSTOM TOUR PLANNER
          ══════════════════════════════════════════════════════════════ */}
      <section className="w-full relative px-6 md:px-12 py-20 lg:py-32 overflow-hidden flex flex-col items-center">
        {/* Ambient orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[250px] opacity-[0.03] bg-[#D4AF37] pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Section label */}
          <motion.div {...fadeUp} className="text-center mb-20 md:mb-28">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
              <Sparkles size={14} strokeWidth={1.5} className="text-[#D4AF37]/60" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white tracking-wide">
              AI Tour <span className="italic text-[#D4AF37]/80">Planner</span>
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-base font-light leading-[2] text-white/45">
              Tell us your preferences and our AI will generate a personalized Sri Lanka
              itinerary — tailored to your exact desires.
            </p>
          </motion.div>

          {/* Form + Result — full-width 12-col grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left — Form (6 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-6 p-10 md:p-14 rounded-[32px] backdrop-blur-xl bg-white/[0.025] border border-white/[0.06] flex flex-col items-center text-center"
            >
              {/* Header */}
              <div className="flex flex-col items-center justify-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/20">
                  <Sparkles size={20} strokeWidth={1.5} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white tracking-wide">Plan Your Trip</h3>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mt-1">Powered by AI</p>
                </div>
              </div>

              <div className="space-y-8 w-full text-left">
                {/* Interests */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.4em] font-medium mb-4 text-white/40">
                    Your Interests
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., wildlife, beach, culture, adventure..."
                    value={aiForm.interests}
                    onChange={(e) => setAiForm({ ...aiForm, interests: e.target.value })}
                    className="w-full px-6 py-5 rounded-2xl text-sm text-white placeholder-white/20 outline-none bg-white/[0.03] border border-white/[0.06] focus:border-[#D4AF37]/30 transition-colors duration-300"
                  />
                </div>

                {/* Duration + Travelers */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.4em] font-medium mb-4 text-white/40">
                      Duration
                    </label>
                    <select
                      value={aiForm.duration}
                      onChange={(e) => setAiForm({ ...aiForm, duration: e.target.value })}
                      className="w-full px-6 py-5 rounded-2xl text-sm text-white outline-none bg-white/[0.03] border border-white/[0.06] focus:border-[#D4AF37]/30 transition-colors duration-300"
                    >
                      {[3, 5, 7, 10, 14, 21].map((d) => (
                        <option key={d} value={d} className="bg-[#0a0d0b]">
                          {d} days
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.4em] font-medium mb-4 text-white/40">
                      Travelers
                    </label>
                    <select
                      value={aiForm.travelers}
                      onChange={(e) => setAiForm({ ...aiForm, travelers: e.target.value })}
                      className="w-full px-6 py-5 rounded-2xl text-sm text-white outline-none bg-white/[0.03] border border-white/[0.06] focus:border-[#D4AF37]/30 transition-colors duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6].map((t) => (
                        <option key={t} value={t} className="bg-[#0a0d0b]">
                          {t} {t === 1 ? 'person' : 'people'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Travel Pace */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.4em] font-medium mb-4 text-white/40">
                    Travel Pace
                  </label>
                  <div className="flex gap-3">
                    {['relaxed', 'moderate', 'fast'].map((b) => (
                      <button
                        key={b}
                        onClick={() => setAiForm({ ...aiForm, budget: b })}
                        className={`flex-1 py-4 rounded-2xl text-[10px] tracking-[0.3em] font-medium uppercase transition-all duration-400 ${
                          aiForm.budget === b
                            ? 'bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.1)]'
                            : 'bg-white/[0.025] border border-white/[0.06] text-white/35 hover:border-white/15'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate button */}
                <button
                  onClick={generateItinerary}
                  disabled={aiLoading}
                  className="w-full flex items-center justify-center gap-3 mt-4 py-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#b8912c] shadow-[0_12px_36px_rgba(212,175,55,0.2)] disabled:opacity-50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(212,175,55,0.3)]"
                >
                  <span className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-semibold text-[#05100c]">
                    {aiLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={18} /> Generate Itinerary
                      </>
                    )}
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Right — AI Result (6 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-6 relative p-10 md:p-14 rounded-[32px] min-h-[580px] flex flex-col items-center text-center backdrop-blur-xl bg-white/[0.025] border border-white/[0.06] overflow-hidden"
            >
              {/* Subtle glow when result exists */}
              {aiResult && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/[0.06] blur-[80px] rounded-full pointer-events-none" />
              )}

              {/* Status indicator */}
              <div className="flex items-center justify-center gap-3 mb-10 relative z-10">
                <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${aiResult ? 'bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.5)]' : 'bg-white/10'}`} />
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/40">
                  AI Generated Itinerary
                </h3>
              </div>

              {aiLoading ? (
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <Loader2 size={44} strokeWidth={0.8} className="animate-spin mx-auto mb-8 text-[#D4AF37]/50" />
                    <p className="text-sm font-light tracking-wide text-white/40">
                      Crafting your perfect itinerary...
                    </p>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mt-2">
                      This takes a few seconds
                    </p>
                  </div>
                </div>
              ) : aiResult ? (
                <div className="flex-1 relative z-10 flex flex-col items-center text-center">
                  <div className="text-sm leading-[2] whitespace-pre-line font-light flex-1 text-white/65 text-left w-full">
                    {aiResult}
                  </div>
                  <a
                    href={`https://wa.me/94774621521?text=${encodeURIComponent('Hi! I generated this itinerary and would like to discuss:\n\n' + aiResult)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-10 inline-flex items-center justify-center gap-3 py-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#b8912c] text-xs font-semibold uppercase tracking-[0.2em] text-[#05100c] transition-all duration-500 hover:-translate-y-1"
                  >
                    Discuss on WhatsApp
                    <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/[0.04] mx-auto mb-8">
                      <Sparkles size={32} strokeWidth={0.8} className="text-white/10" />
                    </div>
                    <p className="text-sm font-light leading-relaxed tracking-wide text-white/30">
                      Fill in your preferences and click
                      <br />
                      <span className="text-[#D4AF37]/50">Generate</span> to see your custom itinerary
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}