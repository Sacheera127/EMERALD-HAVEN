'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TreePine, Car, Map, Sparkles, Calendar, Clock, ArrowRight, Check, Loader2, ShoppingCart, X, Send } from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

const tourPackages = [
  { duration: '7 Days', title: 'Essential Sri Lanka', highlights: ['Udawalawa Safari', 'Ella Train Ride', 'Galle Fort', 'Mirissa Whale Watching', 'Sigiriya Rock Fortress', 'Temple of the Tooth'], desc: 'Perfect introduction to Sri Lanka covering the most iconic destinations.', image: '/images/collection/5a76cede-17df-4ba3-8c81-23b6b1d68f4a.JPG' },
  { duration: '14 Days', title: 'Grand Sri Lanka Explorer', highlights: ['All 7-Day highlights', 'Yala National Park', 'Nuwara Eliya Tea Country', 'Trincomalee Beaches', 'Dambulla Cave Temple', 'Kandy Cultural Tour', 'Arugam Bay Surfing', 'Colombo City Tour'], desc: 'Comprehensive journey across the entire island with diverse experiences.', image: '/images/collection/72cbcea6-5b51-4145-8b66-a6a131dbba41.JPG' },
  { duration: '21 Days', title: 'Ultimate Sri Lanka Odyssey', highlights: ['All 14-Day highlights', 'Wilpattu National Park', 'Jaffna Peninsula', "Adam's Peak Trek", 'Polonnaruwa Ruins', 'Kalpitiya Dolphins', 'Cooking Classes', 'Village Homestay'], desc: 'The definitive Sri Lankan experience — every corner of paradise explored.', image: '/images/collection/d495eb3f-4cf8-4653-a63f-77ededee9638.JPG' },
];

export default function TourServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [aiForm, setAiForm] = useState({ interests: '', duration: '7', travelers: '2', budget: 'moderate' });
  const [aiResult, setAiResult] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const generateItinerary = () => {
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
  };

  return (
    <div className="page-transition pt-24 relative w-full overflow-x-hidden" style={{ background: 'linear-gradient(180deg, #05100c 0%, #020705 100%)', isolation: 'isolate' }}>



      {/* SECTION 1 — HERO */}
      <section className="relative w-full overflow-hidden" style={{ height: '58vh', minHeight: '440px', maxHeight: '580px', background: '#05100c' }}>
        <Image src="/images/collection/a9b7d1c6-97e2-4bc1-a7fc-f9dc165bd4ef.JPG" alt="Tour Services — Luxury Sri Lanka Experiences" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,10,8,0.35) 0%, rgba(5,10,8,0.55) 45%, #05100c 100%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '800px', height: '300px', opacity: 0.05, background: 'radial-gradient(ellipse, #D4AF37, transparent 70%)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: luxuryEase }} className="text-center px-6 max-w-3xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] uppercase font-medium" style={{ color: 'rgba(212,175,55,0.65)', marginBottom: '28px' }}>Curated Adventures</p>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-white tracking-wide leading-[1.05]" style={{ marginBottom: '28px' }}>Tour <em className="italic" style={{ color: 'rgba(212,175,55,0.85)' }}>Services</em></h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 72 }} transition={{ duration: 1, delay: 0.4, ease: luxuryEase }} style={{ height: '1px', margin: '0 auto 28px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
            <p className="max-w-lg mx-auto text-sm md:text-base font-light tracking-wide leading-[1.9]" style={{ color: 'rgba(224,231,228,0.55)' }}>Safari expeditions, private transfers, and bespoke Sri Lanka tour packages</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — SAFARI ARRANGEMENTS */}
      <section className="relative overflow-hidden" style={{ background: 'var(--dark-900)', padding: '120px 0' }}>
        <div className="absolute pointer-events-none" style={{ top: '20%', right: '10%', width: '500px', height: '500px', borderRadius: '9999px', opacity: 0.05, background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />

        <div className="container-premium relative">
          <div className="grid lg:grid-cols-2 items-center" style={{ gap: '64px' }}>

            {/* LEFT — Image gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: luxuryEase }}
            >
              <div className="relative rounded-[28px] overflow-hidden group" style={{ height: '420px', boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}>
                <Image
                  src="/images/collection/1e53ee0a-c57f-43f9-98f4-5172043bbb8e.JPG"
                  alt="Udawalawa Safari"
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span
                  className="absolute rounded-full text-[10px] font-medium tracking-[0.2em] uppercase"
                  style={{ top: '20px', left: '20px', padding: '6px 14px', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', backdropFilter: 'blur(8px)' }}
                >
                  Safari 01
                </span>
              </div>

              <div className="grid grid-cols-2" style={{ gap: '16px', marginTop: '16px' }}>
                <div className="relative rounded-[20px] overflow-hidden" style={{ height: '140px' }}>
                  <Image src="/images/collection/72cbcea6-5b51-4145-8b66-a6a131dbba41.JPG" alt="Safari detail" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative rounded-[20px] overflow-hidden" style={{ height: '140px' }}>
                  <Image src="/images/collection/d495eb3f-4cf8-4653-a63f-77ededee9638.JPG" alt="Safari detail" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Content, plain column, no overlap */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left w-full"
            >
              <div className="flex items-center justify-center lg:justify-start" style={{ gap: '12px', marginBottom: '20px' }}>
                <span className="hidden lg:block" style={{ width: '28px', height: '1px', background: 'rgba(16,185,129,0.6)' }} />
                <span className="text-[10px] tracking-[0.4em] uppercase font-medium" style={{ color: 'rgba(16,185,129,0.8)' }}>
                  Where The Wild Meets Comfort
                </span>
                <span className="hidden lg:block" style={{ width: '28px', height: '1px', background: 'rgba(16,185,129,0.6)' }} />
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-normal text-white tracking-wide" style={{ marginBottom: '24px' }}>
                Safari <em className="italic" style={{ color: 'rgba(212,175,55,0.85)' }}>Arrangements</em>
              </h2>

              <p className="text-sm md:text-base font-light leading-[1.9]" style={{ color: 'rgba(224,231,228,0.55)', marginBottom: '32px' }}>
                Expert-guided jeep safaris to Udawalawa National Park — home to over 600 elephants, leopards, and 200+ bird species, just minutes from your cottage.
              </p>

              {/* Stat pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full" style={{ gap: '14px', marginBottom: '32px' }}>
                {[
                  { icon: TreePine, label: 'Half & Full Day' },
                  { icon: Calendar, label: 'Morning & Evening' },
                  { icon: Car, label: '4×4 Jeep Included' },
                  { icon: Check, label: 'Guide & Refreshments' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center justify-center lg:justify-start rounded-2xl"
                    style={{ gap: '10px', padding: '14px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Icon size={15} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
                    <span className="text-xs font-light tracking-wide text-white">{label}</span>
                  </div>
                ))}
              </div>

              {/* Amenities checklist — two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full" style={{ gap: '14px 20px', marginBottom: '40px' }}>
                {['Expert naturalist guides', 'Luxury 4×4 vehicles', 'Refreshments included', 'Half-day & full-day options', 'Morning & evening drives', 'Pickup from cottage'].map((item) => (
                  <div key={item} className="flex items-center justify-center lg:justify-start text-sm font-light" style={{ gap: '10px', color: 'rgba(224,231,228,0.55)' }}>
                    <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: '20px', height: '20px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}>
                      <Check size={10} strokeWidth={3} style={{ color: '#D4AF37' }} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA — matches "Explore Room" gold pill style */}
              <a
                href="https://wa.me/94774621521?text=Hi!%20I%27m%20interested%20in%20a%20safari%20arrangement."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center rounded-full transition-all duration-500 hover:-translate-y-0.5"
                style={{ gap: '10px', padding: '16px 32px', background: 'linear-gradient(135deg, #D4AF37 0%, #b8912c 100%)', boxShadow: '0 10px 28px rgba(212,175,55,0.25)' }}
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#05100c' }}>Arrange Safari</span>
                <ArrowRight size={15} strokeWidth={2} style={{ color: '#05100c' }} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TAXI & TRANSFER SERVICES */}
      <section className="relative overflow-hidden" style={{ background: 'var(--dark-900)', padding: '120px 0' }}>
        <div className="absolute pointer-events-none" style={{ bottom: 0, left: '20%', width: '500px', height: '500px', borderRadius: '9999px', opacity: 0.03, background: 'radial-gradient(circle, #10b981, transparent 70%)' }} />
        <div className="container-premium relative">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1, ease: luxuryEase }} className="text-center" style={{ marginBottom: '72px' }}>
            <div className="flex items-center justify-center" style={{ gap: '14px', marginBottom: '20px' }}>
              <span style={{ width: '28px', height: '1px', background: 'rgba(212,175,55,0.5)' }} />
              <p className="text-[10px] tracking-[0.5em] uppercase font-medium" style={{ color: 'rgba(212,175,55,0.75)' }}>Transportation</p>
              <span style={{ width: '28px', height: '1px', background: 'rgba(212,175,55,0.5)' }} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white tracking-wide" style={{ marginBottom: '20px' }}>Taxi & <em className="italic" style={{ color: 'rgba(212,175,55,0.85)' }}>Transfer</em> Services</h2>
            <p className="max-w-lg mx-auto text-sm font-light leading-[1.9]" style={{ color: 'rgba(224,231,228,0.45)',marginLeft:'380px' }}>Airport pickups, city transfers, and private chauffeur services across Sri Lanka.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 items-stretch" style={{ gap: '28px' }}>
            {[
              { title: 'Airport Transfer', desc: 'Comfortable AC vehicle transfers from Mattala (50 km) or Colombo airport. Complimentary bottled water and WiFi.', icon: Car },
              { title: 'City-to-City Transfer', desc: 'Private transfers to Ella, Kandy, Galle, Mirissa, and beyond. Scenic routes with photo stops included.', icon: Map },
              { title: 'Day Trip Chauffeur', desc: 'Full-day private vehicle with experienced driver for sightseeing, shopping, and exploration at your own pace.', icon: Clock },
            ].map(({ title, desc, icon: Icon }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: i * 0.12, duration: 1, ease: luxuryEase }} className="group relative flex flex-col items-center text-center h-full rounded-[24px] transition-all duration-500 hover:-translate-y-1" style={{ padding: '40px 32px', background: 'rgba(255,255,255,0.025)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.1)' }}>
                <div className="flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-105" style={{ width: '56px', height: '56px', background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)', marginBottom: '28px' }}><Icon size={22} strokeWidth={1.25} style={{ color: '#D4AF37' }} /></div>
                <h3 className="font-serif text-2xl font-normal tracking-wide text-white" style={{ marginBottom: '16px' }}>{title}</h3>
                <p className="text-sm font-light leading-[1.9]" style={{ color: 'rgba(224,231,228,0.45)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — TOUR PACKAGES */}
      <section className="relative overflow-hidden" style={{ background: 'var(--dark-800)', padding: '120px 0' }}>
        <div className="absolute pointer-events-none" style={{ top: '25%', right: 0, width: '480px', height: '480px', borderRadius: '9999px', opacity: 0.04, background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
        <div className="container-premium relative">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1, ease: luxuryEase }} className="text-center" style={{ marginBottom: '64px' }}>
            <div className="flex items-center justify-center" style={{ gap: '14px', marginBottom: '20px' }}>
              <span style={{ width: '28px', height: '1px', background: 'rgba(212,175,55,0.5)' }} />
              <p className="text-[10px] tracking-[0.5em] uppercase font-medium" style={{ color: 'rgba(212,175,55,0.75)' }}>Explore Sri Lanka</p>
              <span style={{ width: '28px', height: '1px', background: 'rgba(212,175,55,0.5)' }} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white tracking-wide" style={{ marginBottom: '20px' }}>Full Tour <em className="italic" style={{ color: 'rgba(212,175,55,0.85)' }}>Packages</em></h2>
            <p className="max-w-lg mx-auto text-sm font-light leading-[1.9]" style={{ color: 'rgba(224,231,228,0.45)',marginLeft:'380px' }}>Curated multi-day itineraries to discover the best of Sri Lanka.</p>
          </motion.div>

          <div className="flex justify-center flex-wrap" style={{ gap: '40px', marginBottom: '64px' }}>
            {tourPackages.map((pkg, i) => (
              <button key={pkg.duration} onClick={() => setActiveTab(i)} className="relative" style={{ paddingBottom: '14px' }}>
                <span className="text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-500" style={{ color: activeTab === i ? '#D4AF37' : 'rgba(224,231,228,0.3)' }}>{pkg.duration}</span>
                <motion.div className="absolute bottom-0 left-0 right-0 rounded-full" style={{ height: '2px', background: '#D4AF37' }} initial={false} animate={{ scaleX: activeTab === i ? 1 : 0, opacity: activeTab === i ? 1 : 0 }} transition={{ duration: 0.5, ease: luxuryEase }} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: luxuryEase }} className="grid md:grid-cols-2 items-stretch" style={{ gap: '48px' }}>
              <div className="flex flex-col items-center text-center w-full rounded-[28px]" style={{ padding: '48px 40px', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.1)' }}>
                <div className="flex items-center" style={{ gap: '14px', marginBottom: '28px' }}>
                  <span style={{ width: '24px', height: '1px', background: '#D4AF37' }} />
                  <span className="text-[10px] tracking-[0.4em] uppercase font-medium" style={{ color: 'rgba(212,175,55,0.7)' }}>{tourPackages[activeTab].duration} Tour</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-normal text-white tracking-wide leading-tight" style={{ marginBottom: '20px' }}>{tourPackages[activeTab].title}</h3>
                <p className="text-sm font-light leading-[2]" style={{ color: 'rgba(224,231,228,0.5)', marginBottom: '32px' }}>{tourPackages[activeTab].desc}</p>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold" style={{ color: 'rgba(212,175,55,0.75)', marginBottom: '24px' }}>Tour Highlights</h4>
                <div className="grid sm:grid-cols-2 w-full" style={{ gap: '14px 20px' }}>
                  {tourPackages[activeTab].highlights.map((h) => (
                    <div key={h} className="flex items-center justify-center md:justify-start text-sm font-light tracking-wide" style={{ gap: '10px', color: 'rgba(224,231,228,0.5)' }}><Check size={13} style={{ color: '#D4AF37', flexShrink: 0 }} />{h}</div>
                  ))}
                </div>
                <a href="https://wa.me/94774621521?text=Hi!%20I%27m%20interested%20in%20the%20tour%20package." target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full transition-all duration-500 hover:-translate-y-0.5" style={{ gap: '10px', padding: '15px 30px', marginTop: '40px', background: 'linear-gradient(135deg, #D4AF37 0%, #b8912c 100%)', boxShadow: '0 8px 24px rgba(212,175,55,0.25)' }}>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: '#05100c' }}>Inquire Now</span>
                  <ArrowRight size={15} style={{ color: '#05100c' }} />
                </a>
              </div>
              <div className="relative rounded-[28px] overflow-hidden group" style={{ minHeight: '380px', boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}>
                <Image src={tourPackages[activeTab].image} alt={tourPackages[activeTab].title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 5 — AI TOUR PLANNER */}
      <section className="relative overflow-hidden" style={{ background: 'var(--dark-900)', padding: '120px 0' }}>
        <div className="absolute pointer-events-none" style={{ top: '10%', right: 0, width: '450px', height: '450px', borderRadius: '9999px', opacity: 0.03, background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
        <div className="container-premium relative">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1, ease: luxuryEase }} className="text-center" style={{ marginBottom: '64px' }}>
            <div className="flex items-center justify-center" style={{ gap: '14px', marginBottom: '20px' }}>
              <span style={{ width: '28px', height: '1px', background: 'rgba(212,175,55,0.5)' }} />
              <p className="text-[10px] tracking-[0.5em] uppercase font-medium" style={{ color: 'rgba(212,175,55,0.75)' }}>Exclusive Concierge</p>
              <span style={{ width: '28px', height: '1px', background: 'rgba(212,175,55,0.5)' }} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white tracking-wide" style={{ marginBottom: '20px' }}>AI Tour <em className="italic" style={{ color: 'rgba(212,175,55,0.85)' }}>Planner</em></h2>
            <p className="max-w-lg mx-auto text-sm font-light leading-[1.9]" style={{ color: 'rgba(224,231,228,0.45)',marginLeft:'370px' }}>Share your preferences and our concierge will craft a personalized Sri Lanka itinerary.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 max-w-5xl mx-auto items-stretch lg:translate-x-[20px]" style={{ gap: '32px',marginLeft:'120px' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1, ease: luxuryEase }} className="rounded-[28px]" style={{ padding: '44px', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.1)' }}>
              <div className="flex items-center" style={{ gap: '14px', marginBottom: '36px' }}>
                <Sparkles size={20} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
                <h3 className="font-serif text-2xl font-normal text-white tracking-wide">Plan Your <em className="italic" style={{ color: 'rgba(212,175,55,0.8)' }}>Journey</em></h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>Your Interests</label>
                  <input type="text" placeholder="e.g., wildlife, beach, culture, adventure..." value={aiForm.interests} onChange={(e) => setAiForm({ ...aiForm, interests: e.target.value })} className="w-full text-sm text-white outline-none transition-colors duration-300" style={{ padding: '16px 20px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }} />
                </div>
                <div className="grid sm:grid-cols-2" style={{ gap: '20px' }}>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>Duration</label>
                    <select value={aiForm.duration} onChange={(e) => setAiForm({ ...aiForm, duration: e.target.value })} className="w-full text-sm text-white outline-none" style={{ padding: '16px 20px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {[3, 5, 7, 10, 14, 21].map((d) => <option key={d} value={d} className="bg-[#05100c]">{d} days</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>Travelers</label>
                    <select value={aiForm.travelers} onChange={(e) => setAiForm({ ...aiForm, travelers: e.target.value })} className="w-full text-sm text-white outline-none" style={{ padding: '16px 20px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {[1, 2, 3, 4, 5, 6].map((t) => <option key={t} value={t} className="bg-[#05100c]">{t} {t === 1 ? 'person' : 'people'}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'rgba(224,231,228,0.4)', marginBottom: '14px' }}>Travel Pace</label>
                  <div className="flex" style={{ gap: '10px' }}>
                    {['relaxed', 'moderate', 'fast'].map((b) => (
                      <button key={b} onClick={() => setAiForm({ ...aiForm, budget: b })} className="flex-1 text-[10px] tracking-[0.15em] font-medium uppercase transition-all duration-500 rounded-full" style={{ padding: '14px', background: aiForm.budget === b ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.02)', border: `1px solid ${aiForm.budget === b ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)'}`, color: aiForm.budget === b ? '#D4AF37' : 'rgba(224,231,228,0.35)' }}>{b}</button>
                    ))}
                  </div>
                </div>
                <button onClick={generateItinerary} disabled={aiLoading} className="w-full flex items-center justify-center gap-3 rounded-full transition-all duration-500 disabled:opacity-50 hover:-translate-y-0.5" style={{ padding: '18px', marginTop: '8px', background: 'linear-gradient(135deg, #D4AF37 0%, #b8912c 100%)', boxShadow: '0 10px 28px rgba(212,175,55,0.22)' }}>
                  {aiLoading ? (<><Loader2 size={18} className="animate-spin" style={{ color: '#05100c' }} /><span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#05100c' }}>Crafting...</span></>) : (<><Sparkles size={18} style={{ color: '#05100c' }} /><span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#05100c' }}>Generate Itinerary</span></>)}
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1, ease: luxuryEase }} className="relative flex flex-col rounded-[28px] overflow-hidden" style={{ padding: '44px', minHeight: '480px', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.1)' }}>
              {aiResult && <div className="absolute pointer-events-none" style={{ top: 0, right: 0, width: '160px', height: '160px', opacity: 0.06, background: 'radial-gradient(circle at top right, #D4AF37, transparent 70%)' }} />}
              <div className="relative flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
                <div className="rounded-full transition-colors duration-500" style={{ width: '8px', height: '8px', background: aiResult ? '#D4AF37' : 'rgba(255,255,255,0.08)' }} />
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'rgba(224,231,228,0.4)' }}>Your Personalized Itinerary</h3>
              </div>
              {aiLoading ? (
                <div className="flex-1 flex items-center justify-center relative z-10"><div className="text-center"><Loader2 size={38} strokeWidth={0.8} className="animate-spin mx-auto" style={{ color: 'rgba(212,175,55,0.5)', marginBottom: '24px' }} /><p className="text-sm font-light tracking-wide" style={{ color: 'rgba(224,231,228,0.4)' }}>Crafting your perfect itinerary...</p></div></div>
              ) : aiResult ? (
                <div className="flex-1 relative z-10 flex flex-col">
                  <div className="text-sm leading-[2] whitespace-pre-line font-light flex-1" style={{ color: 'rgba(224,231,228,0.65)' }}>{aiResult}</div>
                  <a href={`https://wa.me/94774621521?text=${encodeURIComponent('Hi! I generated this itinerary and would like to discuss:\n\n' + aiResult)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full transition-all duration-500 hover:-translate-y-0.5" style={{ padding: '15px', marginTop: '32px', background: 'linear-gradient(135deg, #D4AF37 0%, #b8912c 100%)' }}>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: '#05100c' }}>Discuss on WhatsApp</span>
                    <ArrowRight size={14} style={{ color: '#05100c' }} />
                  </a>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center relative z-10"><div className="text-center"><Sparkles size={38} strokeWidth={0.8} className="mx-auto" style={{ color: 'rgba(255,255,255,0.08)', marginBottom: '24px' }} /><p className="text-sm font-light leading-relaxed tracking-wide" style={{ color: 'rgba(224,231,228,0.3)' }}>Fill in your preferences and click<br />Generate to see your custom itinerary</p></div></div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
