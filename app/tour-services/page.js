'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { TreePine, Car, Map, Sparkles, Send, Calendar, Users, MapPin, Clock, ArrowRight, Check, Loader2 } from 'lucide-react';

const tourPackages = [
  {
    duration: '7 Days',
    title: 'Essential Sri Lanka',
    highlights: ['Udawalawa Safari', 'Ella Train Ride', 'Galle Fort', 'Mirissa Whale Watching', 'Sigiriya Rock Fortress', 'Temple of the Tooth'],
    desc: 'Perfect introduction to Sri Lanka covering the most iconic destinations.',
  },
  {
    duration: '14 Days',
    title: 'Grand Sri Lanka Explorer',
    highlights: ['All 7-Day highlights', 'Yala National Park', 'Nuwara Eliya Tea Country', 'Trincomalee Beaches', 'Dambulla Cave Temple', 'Kandy Cultural Tour', 'Arugam Bay Surfing', 'Colombo City Tour'],
    desc: 'Comprehensive journey across the entire island with diverse experiences.',
  },
  {
    duration: '21 Days',
    title: 'Ultimate Sri Lanka Odyssey',
    highlights: ['All 14-Day highlights', 'Wilpattu National Park', 'Jaffna Peninsula', 'Adam\'s Peak Trek', 'Polonnaruwa Ruins', 'Kalpitiya Dolphins', 'Cooking Classes', 'Village Homestay'],
    desc: 'The definitive Sri Lankan experience — every corner of paradise explored.',
  },
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
      setAiResult(`🌴 **Your Custom ${aiForm.duration}-Day Sri Lanka Itinerary**\n\n` +
        `For ${aiForm.travelers} traveler(s) | Pace: ${aiForm.budget}\n` +
        `Based on your interests: ${aiForm.interests || 'Wildlife & Nature'}\n\n` +
        `**Day 1-2:** Arrive at Emerald Haven Safari Cottages, Udawalawa. Welcome dinner, pool relaxation, and morning safari at Udawalawa National Park.\n\n` +
        `**Day 3:** Visit the Elephant Transit Home, nature walk through Nuwaragala Forest, evening BBQ at the cottage.\n\n` +
        `**Day 4-5:** ${aiForm.interests.includes('beach') ? 'Head to Mirissa for whale watching and beach time' : 'Explore Ella — Nine Arch Bridge, Little Adam\'s Peak, scenic train ride'}.\n\n` +
        `**Day 6${Number(aiForm.duration) > 7 ? '-8' : ''}:** ${aiForm.interests.includes('culture') ? 'Kandy Temple of the Tooth, cultural shows, and tea plantation visit' : 'Yala National Park safari for leopard spotting, Tissamaharama lake visit'}.\n\n` +
        `${Number(aiForm.duration) > 7 ? '**Day 9-' + aiForm.duration + ':** Extended exploration including Sigiriya Rock Fortress, Dambulla Cave Temple, and Galle Fort. Return to Colombo for departure.\n\n' : '**Day 7:** Return transfer to airport. Departure with unforgettable memories.\n\n'}` +
        `📞 Contact us to customize this itinerary further!`
      );
      setAiLoading(false);
    }, 2500);
  };

  return (
    <div className="page-transition pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="/images/collection/a9b7d1c6-97e2-4bc1-a7fc-f9dc165bd4ef.JPG" alt="Tour Services" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,13,0.5), rgba(10,15,13,0.85))' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6">
            <p className="text-xs tracking-[0.6em] uppercase mb-6 font-medium" style={{ color: 'rgba(16,185,129,0.7)' }}>Adventures</p>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-white mb-6 tracking-wide">Tour Services</h1>
            <p className="max-w-3xl mx-auto text-base font-light tracking-wide leading-relaxed" style={{ color: 'rgba(224,231,228,0.7)' }}>Safari arrangements, taxi services, and complete Sri Lanka tour packages</p>
          </motion.div>
        </div>
      </section>

      {/* Safari Arrangements */}
      <section className="section-padding" style={{ background: 'var(--dark-800)' }}>
        <div className="container-premium">
          <SectionHeader subtitle="Wild Encounters" title="Safari Arrangements" description="We arrange expert-guided jeep safaris to Udawalawa National Park — home to over 600 elephants." />
          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-96 md:h-[500px] rounded-md overflow-hidden group">
              <Image src="/images/collection/1e53ee0a-c57f-43f9-98f4-5172043bbb8e.JPG" alt="Safari" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105 ease-out" sizes="50vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} className="lg:pl-8">
              <div className="flex items-center gap-3 mb-6"><TreePine size={24} strokeWidth={1.5} style={{ color: 'rgba(201,162,39,0.8)' }} /><span className="text-xs tracking-[0.4em] font-light uppercase" style={{ color: 'rgba(16,185,129,0.7)' }}>Safari</span></div>
              <h3 className="font-serif text-4xl text-white mb-8 tracking-wide font-normal">Udawalawa National Park</h3>
              <ul className="space-y-5 mb-12">
                {['Morning & evening safari drives available', 'Expert English-speaking naturalist guides', 'Comfortable 4x4 jeep vehicles', 'Spot elephants, leopards, crocodiles & 200+ bird species', 'Half-day & full-day options', 'Refreshments & packed lunch included'].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-sm font-light tracking-wide" style={{ color: 'rgba(224,231,228,0.6)' }}><Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'rgba(16,185,129,0.5)' }} />{item}</li>
                ))}
              </ul>
              <a href="https://wa.me/94774621521?text=Hi!%20I%27m%20interested%20in%20a%20safari%20arrangement." target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3 relative z-10 group"><span className="relative z-10">Arrange Safari</span> <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Taxi Services */}
      <section className="section-padding" style={{ background: 'var(--dark-900)' }}>
        <div className="container-premium space-y-16">
          <SectionHeader subtitle="Transportation" title="Taxi & Transfer Services" description="Airport pickups, city transfers, and private chauffeur services across Sri Lanka." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Airport Transfer', desc: 'Comfortable AC vehicle transfers from Mattala (50 km) or Colombo airport.', icon: Car },
              { title: 'City-to-City Transfer', desc: 'Private transfers to Ella, Kandy, Galle, Mirissa, and beyond.', icon: Map },
              { title: 'Day Trip Chauffeur', desc: 'Full-day private vehicle with driver for sightseeing and exploration.', icon: Clock },
            ].map(({ title, desc, icon: Icon }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="p-10 rounded-md transition-all duration-500 hover:bg-white/5" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <Icon size={32} strokeWidth={1} className="mb-6 transition-colors duration-500 hover:text-gold-400" style={{ color: 'rgba(16,185,129,0.6)' }} />
                <h3 className="font-serif text-2xl font-normal tracking-wide text-white mb-4">{title}</h3>
                <p className="text-sm font-light leading-loose" style={{ color: 'rgba(224,231,228,0.5)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="section-padding" style={{ background: 'var(--dark-800)' }}>
        <div className="container-premium space-y-16">
          <SectionHeader subtitle="Explore Sri Lanka" title="Full Tour Packages" description="Curated multi-day itineraries to discover the best of Sri Lanka." />
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {tourPackages.map((pkg, i) => (
              <button key={pkg.duration} onClick={() => setActiveTab(i)} className="px-8 py-4 rounded-md text-sm font-light tracking-widest uppercase transition-all duration-500" style={{ background: activeTab === i ? 'rgba(255,255,255,0.05)' : 'transparent', border: `1px solid ${activeTab === i ? 'rgba(201,162,39,0.3)' : 'rgba(255,255,255,0.05)'}`, color: activeTab === i ? 'white' : 'rgba(224,231,228,0.5)' }}>
                {pkg.duration}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-16 items-start">
              <div className="p-10 rounded-md" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs tracking-[0.4em] uppercase font-light" style={{ color: 'rgba(16,185,129,0.7)' }}>{tourPackages[activeTab].duration} Tour</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6 tracking-wide">{tourPackages[activeTab].title}</h3>
                <p className="text-base font-light leading-loose mb-10" style={{ color: 'rgba(224,231,228,0.6)' }}>{tourPackages[activeTab].desc}</p>
                <h4 className="text-xs uppercase tracking-[0.3em] font-medium text-white mb-6" style={{ color: 'rgba(201,162,39,0.8)' }}>Tour Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2">
                  {tourPackages[activeTab].highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3 text-sm font-light tracking-wide" style={{ color: 'rgba(224,231,228,0.6)' }}>
                      <Check size={16} style={{ color: 'rgba(16,185,129,0.5)' }} />{h}
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/94774621521?text=Hi!%20I%27m%20interested%20in%20the%20tour%20package." target="_blank" className="btn-primary mt-12 inline-flex items-center gap-3 group">Inquire Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
              </div>
              <div className="relative h-96 md:h-full min-h-[500px] rounded-md overflow-hidden group">
                <Image src="/images/collection/5a76cede-17df-4ba3-8c81-23b6b1d68f4a.JPG" alt="Tour" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105 ease-out" sizes="50vw" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* AI Tour Planner */}
      <section className="section-padding" style={{ background: 'var(--dark-900)' }}>
        <div className="container-premium">
          <SectionHeader subtitle="Powered by AI" title="Custom AI Tour Planner" description="Tell us your preferences and our AI will generate a personalized Sri Lanka itinerary." />
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto mt-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="p-10 rounded-md" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div className="flex items-center gap-3 mb-8">
                <Sparkles size={24} strokeWidth={1.5} style={{ color: 'rgba(201,162,39,0.8)' }} />
                <h3 className="font-serif text-2xl font-normal text-white tracking-wide">Plan Your Trip</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(224,231,228,0.5)' }}>Your Interests</label>
                  <input type="text" placeholder="e.g., wildlife, beach, culture, adventure..." value={aiForm.interests} onChange={(e) => setAiForm({ ...aiForm, interests: e.target.value })} className="w-full px-5 py-4 rounded-sm text-sm text-white placeholder-gray-500 outline-none transition-all" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }} />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(224,231,228,0.5)' }}>Duration (days)</label>
                    <select value={aiForm.duration} onChange={(e) => setAiForm({ ...aiForm, duration: e.target.value })} className="w-full px-5 py-4 rounded-sm text-sm text-white outline-none" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {[3, 5, 7, 10, 14, 21].map((d) => <option key={d} value={d} className="bg-black">{d} days</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(224,231,228,0.5)' }}>Travelers</label>
                    <select value={aiForm.travelers} onChange={(e) => setAiForm({ ...aiForm, travelers: e.target.value })} className="w-full px-5 py-4 rounded-sm text-sm text-white outline-none" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {[1, 2, 3, 4, 5, 6].map((t) => <option key={t} value={t} className="bg-black">{t} {t === 1 ? 'person' : 'people'}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(224,231,228,0.5)' }}>Travel Pace</label>
                  <div className="flex gap-3">
                    {['relaxed', 'moderate', 'fast'].map((b) => (
                      <button key={b} onClick={() => setAiForm({ ...aiForm, budget: b })} className="flex-1 py-3 rounded-sm text-xs tracking-widest font-medium uppercase transition-all" style={{ background: aiForm.budget === b ? 'rgba(201,162,39,0.1)' : 'rgba(255,255,255,0.03)', border: `1px solid ${aiForm.budget === b ? 'rgba(201,162,39,0.3)' : 'rgba(255,255,255,0.05)'}`, color: aiForm.budget === b ? '#c9a227' : 'rgba(224,231,228,0.4)' }}>{b}</button>
                    ))}
                  </div>
                </div>
                <button onClick={generateItinerary} disabled={aiLoading} className="w-full btn-primary flex items-center justify-center gap-3 mt-4 py-5">
                  <span className="relative z-10 flex items-center gap-3 text-sm tracking-widest uppercase">
                    {aiLoading ? <><Loader2 size={18} className="animate-spin" /> Generating...</> : <><Sparkles size={18} /> Generate Itinerary</>}
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Result */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="p-10 rounded-md min-h-[500px] flex flex-col relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
              {aiResult && <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-[50px] rounded-full" />}
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-2 h-2 rounded-full" style={{ background: aiResult ? 'rgba(201,162,39,0.8)' : 'rgba(255,255,255,0.1)' }} />
                <h3 className="text-xs uppercase tracking-widest font-medium" style={{ color: 'rgba(224,231,228,0.5)' }}>AI Generated Itinerary</h3>
              </div>
              {aiLoading ? (
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <Loader2 size={40} strokeWidth={1} className="animate-spin mx-auto mb-6" style={{ color: 'rgba(201,162,39,0.6)' }} />
                    <p className="text-sm font-light tracking-wide" style={{ color: 'rgba(224,231,228,0.5)' }}>Crafting your perfect itinerary...</p>
                  </div>
                </div>
              ) : aiResult ? (
                <div className="flex-1 relative z-10 flex flex-col">
                  <div className="text-sm leading-loose whitespace-pre-line font-light flex-1" style={{ color: 'rgba(224,231,228,0.7)' }}>{aiResult}</div>
                  <a href={`https://wa.me/94774621521?text=${encodeURIComponent('Hi! I generated this itinerary and would like to discuss:\n\n' + aiResult)}`} target="_blank" className="btn-primary mt-8 inline-flex items-center justify-center gap-3 text-xs">
                    Discuss on WhatsApp <ArrowRight size={16} />
                  </a>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <Sparkles size={40} strokeWidth={1} className="mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.1)' }} />
                    <p className="text-sm font-light leading-relaxed tracking-wide" style={{ color: 'rgba(224,231,228,0.4)' }}>Fill in your preferences and click<br />Generate to see your custom itinerary</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
