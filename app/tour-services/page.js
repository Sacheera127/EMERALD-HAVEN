'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TreePine, Car, Map, Sparkles, Calendar, Clock, ArrowRight, Check, Loader2, ShoppingCart, X, Send } from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

const tourPackages = [
  {
    duration: '7 Days',
    title: 'Essential Sri Lanka',
    highlights: ['Udawalawa Safari', 'Ella Train Ride', 'Galle Fort', 'Mirissa Whale Watching', 'Sigiriya Rock Fortress', 'Temple of the Tooth'],
    desc: 'Perfect introduction to Sri Lanka covering the most iconic destinations.',
    image: '/images/collection/5a76cede-17df-4ba3-8c81-23b6b1d68f4a.JPG',
  },
  {
    duration: '14 Days',
    title: 'Grand Sri Lanka Explorer',
    highlights: ['All 7-Day highlights', 'Yala National Park', 'Nuwara Eliya Tea Country', 'Trincomalee Beaches', 'Dambulla Cave Temple', 'Kandy Cultural Tour', 'Arugam Bay Surfing', 'Colombo City Tour'],
    desc: 'Comprehensive journey across the entire island with diverse experiences.',
    image: '/images/collection/72cbcea6-5b51-4145-8b66-a6a131dbba41.JPG',
  },
  {
    duration: '21 Days',
    title: 'Ultimate Sri Lanka Odyssey',
    highlights: ['All 14-Day highlights', 'Wilpattu National Park', 'Jaffna Peninsula', 'Adam\'s Peak Trek', 'Polonnaruwa Ruins', 'Kalpitiya Dolphins', 'Cooking Classes', 'Village Homestay'],
    desc: 'The definitive Sri Lankan experience — every corner of paradise explored.',
    image: '/images/collection/d495eb3f-4cf8-4653-a63f-77ededee9638.JPG',
  },
];

const safariTypes = [
  { id: 'morning', title: 'Morning Safari', time: '05:30 AM - 10:00 AM', glow: 'from-amber-500/20 to-orange-600/10' },
  { id: 'afternoon', title: 'Afternoon Safari', time: '02:30 PM - 06:30 PM', glow: 'from-orange-600/20 to-red-700/10' },
  { id: 'full', title: 'Full Day Safari', time: '05:30 AM - 06:30 PM', glow: 'from-emerald-500/20 to-teal-600/10' }
];

export default function TourServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [aiForm, setAiForm] = useState({ interests: '', duration: '7', travelers: '2', budget: 'moderate' });
  const [aiResult, setAiResult] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  // Luxury Safari Booking State
  const [bookingState, setBookingState] = useState('initial'); // 'initial', 'expanded', 'success'
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSafari, setSelectedSafari] = useState(null);
  const [hoveredSafari, setHoveredSafari] = useState(null);
  
  // Cart State
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);

  // Reset booking widget after 5 seconds of success
  useEffect(() => {
    if (bookingState === 'success') {
      const timer = setTimeout(() => {
        setBookingState('initial');
        setSelectedDate('');
        setSelectedSafari(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [bookingState]);

  const handleAddToCart = () => {
    if (!selectedDate || !selectedSafari) return;
    
    const safariDetails = safariTypes.find(s => s.id === selectedSafari);
    const newItem = {
      id: Date.now(),
      type: safariDetails.title,
      date: selectedDate,
      time: safariDetails.time
    };

    setCartItems(prev => [...prev, newItem]);
    setBookingState('success');
    
    // Trigger cart pulse animation
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 2000);
  };

  const handleSendBooking = () => {
    if (cartItems.length === 0) return;
    
    let message = `*Luxury Safari Booking Request* 🌿\n\n`;
    cartItems.forEach((item, index) => {
      message += `*${index + 1}. ${item.type}*\n`;
      message += `Date: ${item.date}\n`;
      message += `Time: ${item.time}\n\n`;
    });
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/94774621521?text=${encodedMessage}`, '_blank');
    setIsCartOpen(false);
    setCartItems([]); // Optional: clear cart after sending
  };

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

  // Determine current ambient glow for the safari section
  const currentSafariGlow = hoveredSafari 
    ? safariTypes.find(s => s.id === hoveredSafari)?.glow 
    : selectedSafari 
      ? safariTypes.find(s => s.id === selectedSafari)?.glow
      : 'from-[#050a08] to-[#020705]';

  return (
    <div className="page-transition pt-24 relative w-full overflow-x-hidden" style={{ background: '#050a08' }}>
      
      {/* ─── FLOATING CART BUTTON ─── */}
      <div className="fixed top-28 right-6 md:right-12 z-50">
        <button 
          onClick={() => setIsCartOpen(true)}
          className={`relative flex items-center justify-center w-16 h-16 rounded-full border shadow-2xl transition-all duration-700 hover:scale-105 will-change-transform backdrop-blur-sm md:backdrop-blur-md ${cartPulse ? 'animate-pulse' : ''}`}
          style={{
            background: 'rgba(5, 10, 8, 0.8)',
            borderColor: 'rgba(212, 175, 55, 0.25)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)'
          }}
        >
          {cartPulse && <div className="absolute inset-0 rounded-full animate-ping" style={{ background: 'rgba(212, 175, 55, 0.2)' }}></div>}
          <ShoppingCart size={22} style={{ color: '#d4af37' }} />
          <AnimatePresence>
            {cartItems.length > 0 && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 w-5 h-5 text-xs font-bold rounded-full flex items-center justify-center font-montserrat"
                style={{ 
                  background: '#d4af37', 
                  color: '#050a08',
                  boxShadow: '0 0 12px rgba(212,175,55,0.5)'
                }}
              >
                {cartItems.length}
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ─── SLIDE-OUT CART PANEL ─── */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-[100]"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-[480px] z-[101] flex flex-col"
              style={{
                background: 'linear-gradient(180deg, #0a0f0d 0%, #050a08 100%)',
                borderLeft: '1px solid rgba(255,255,255,0.04)'
              }}
            >
              {/* Cart Header */}
              <div className="p-10 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div>
                  <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: '#d4af37' }}>Your Collection</p>
                  <h2 className="font-playfair text-3xl text-white tracking-wide">Safari <em className="italic" style={{ color: 'rgba(212,175,55,0.8)' }}>Bookings</em></h2>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="text-white/30 hover:text-white transition-colors duration-500 p-3 rounded-full hover:bg-white/5">
                  <X size={22} />
                </button>
              </div>
              
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-10 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                    <ShoppingCart size={48} strokeWidth={0.8} style={{ color: 'rgba(255,255,255,0.08)' }} />
                    <p className="font-montserrat font-light tracking-[0.3em] uppercase text-xs" style={{ color: 'rgba(245,240,232,0.25)' }}>No safaris selected</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="p-7 rounded-2xl relative group" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl" style={{ background: 'linear-gradient(180deg, #d4af37 0%, transparent 100%)', opacity: 0.5 }}></div>
                      <h3 className="font-playfair text-xl text-white mb-4 tracking-wide">{item.type}</h3>
                      <div className="flex items-center gap-3 text-sm font-light mb-2 font-montserrat" style={{ color: 'rgba(245,240,232,0.45)' }}>
                        <Calendar size={14} style={{ color: '#d4af37' }} /> {item.date}
                      </div>
                      <div className="flex items-center gap-3 text-sm font-light font-montserrat" style={{ color: 'rgba(245,240,232,0.45)' }}>
                        <Clock size={14} style={{ color: '#d4af37' }} /> {item.time}
                      </div>
                      <button 
                        onClick={() => setCartItems(items => items.filter(i => i.id !== item.id))}
                        className="absolute top-5 right-5 text-white/20 hover:text-red-400 transition-all duration-500 opacity-0 group-hover:opacity-100"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
              
              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="p-10" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <button 
                    onClick={handleSendBooking}
                    className="w-full relative group overflow-hidden rounded-full p-[1px]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-amber-200 to-[#d4af37] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"></span>
                    <div className="relative rounded-full px-8 py-5 transition-all duration-700 flex items-center justify-center gap-3" style={{ background: '#050a08' }}>
                      <Send size={18} style={{ color: '#d4af37' }} className="group-hover:text-black transition-colors duration-700" />
                      <span className="font-montserrat font-medium tracking-[0.2em] uppercase text-xs transition-colors duration-700" style={{ color: '#d4af37' }}>
                        Send via WhatsApp
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════
         HERO SECTION — Cinematic editorial treatment
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden bg-[#05100c]">
        <Image 
          src="/images/collection/a9b7d1c6-97e2-4bc1-a7fc-f9dc165bd4ef.JPG" 
          alt="Tour Services — Luxury Sri Lanka Experiences" 
          fill 
          className="object-cover scale-105" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={80}
          priority={true}
          unoptimized={true}
        />
        {/* Deep cinematic gradient overlay */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(180deg, rgba(5,10,8,0.4) 0%, rgba(5,10,8,0.6) 40%, rgba(5,10,8,0.92) 100%)' 
        }} />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="text-center px-6"
          >
            {/* Overline label */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: luxuryEase }}
              className="font-montserrat text-[11px] tracking-[0.5em] uppercase mb-8 font-medium"
              style={{ color: 'rgba(212, 175, 55, 0.7)' }}
            >
              Curated Adventures
            </motion.p>
            
            {/* Editorial serif heading with italic accent */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-normal text-white mb-8 tracking-wide leading-[1.1]">
              Tour <em className="italic" style={{ color: 'rgba(212, 175, 55, 0.85)' }}>Services</em>
            </h1>
            
            {/* Animated gold divider */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1.2, delay: 0.5, ease: luxuryEase }}
              className="gold-shimmer-line mx-auto mb-8"
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="max-w-2xl mx-auto font-montserrat text-sm md:text-base font-light tracking-wider leading-relaxed"
              style={{ color: 'rgba(245, 240, 232, 0.55)' }}
            >
              Safari expeditions, private transfers, and bespoke Sri Lanka tour packages
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SAFARI ARRANGEMENTS — Overlapping glassmorphism card
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen py-40 overflow-hidden transition-colors duration-1000" style={{ background: '#050a08' }}>
        
        {/* Dynamic Background Glow Layer */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSafariGlow} opacity-20 transition-all duration-[1500ms] ease-in-out z-0`} />
        {/* Subtle radial gold accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[100vw] rounded-full opacity-[0.03] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)' }} />
        
        <div className="container-premium relative z-10 max-w-7xl mx-auto px-6 lg:px-0 w-full">
          {/* Custom Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="text-center mb-28"
          >
            <p className="font-montserrat text-[11px] tracking-[0.5em] uppercase mb-7 font-medium" style={{ color: 'rgba(212, 175, 55, 0.6)' }}>Wild Encounters</p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 tracking-wide">
              Safari <em className="italic" style={{ color: 'rgba(212, 175, 55, 0.75)' }}>Arrangements</em>
            </h2>
            <div className="gold-shimmer-line mx-auto mb-8" />
            <p className="max-w-2xl mx-auto font-montserrat text-sm font-light tracking-wider leading-loose" style={{ color: 'rgba(245, 240, 232, 0.45)' }}>
              Experience the wild in unparalleled luxury. Expert-guided jeep safaris to Udawalawa National Park.
            </p>
          </motion.div>
          
          {/* Safari Image + Booking Card Overlap */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="relative w-full rounded-[32px] overflow-hidden shadow-2xl bg-[#05100c]"
            style={{ height: '75vh', minHeight: '650px' }}
          >
            {/* Cinematic Background Image */}
            <Image 
              src="/images/collection/1e53ee0a-c57f-43f9-98f4-5172043bbb8e.JPG" 
              alt="Udawalawa Safari Experience" 
              fill 
              className="object-cover scale-[1.02]" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              quality={80}
              priority={true}
              unoptimized={true}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,10,8,0.85) 0%, rgba(5,10,8,0.4) 50%, rgba(5,10,8,0.2) 100%)' }} />
            
            {/* Glassmorphism Booking Card */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-16 lg:left-24 lg:translate-x-0 w-[92%] max-w-[520px] rounded-3xl overflow-hidden transition-all duration-700 backdrop-blur-md lg:backdrop-blur-xl flex flex-col items-center text-center lg:items-start lg:text-left"
              style={{
                background: 'rgba(5, 10, 8, 0.5)',
                border: '1px solid rgba(212, 175, 55, 0.12)',
                boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.03)'
              }}
            >
              {/* Card Content */}
              <div className="p-8 lg:p-12 w-full flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Overline */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-8 w-full">
                  <div className="w-10 h-[1px] hidden lg:block" style={{ background: '#d4af37' }}></div>
                  <span className="font-montserrat text-[10px] tracking-[0.4em] font-medium uppercase" style={{ color: '#d4af37' }}>Udawalawa</span>
                </div>
                
                {/* Title */}
                <h3 className="font-playfair text-4xl md:text-5xl text-white mb-10 tracking-wide leading-tight">
                  Safari<br/><em className="italic" style={{ color: 'rgba(212,175,55,0.8)' }}>Expedition</em>
                </h3>
                
                {/* Features */}
                <ul className="space-y-5 mb-12 w-full">
                  {['Expert naturalist guides', 'Luxury 4×4 vehicles', 'Refreshments included'].map((item) => (
                    <li key={item} className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 font-montserrat text-sm font-light tracking-wider w-full" style={{ color: 'rgba(245,240,232,0.55)' }}>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}>
                        <Check size={12} style={{ color: '#d4af37' }} />
                      </div>
                      <span className="text-center lg:text-left">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Booking Widget Area */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    
                    {/* State: Initial */}
                    {bookingState === 'initial' && (
                      <motion.div
                        key="initial"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.6, ease: luxuryEase }}
                        className="w-full"
                      >
                        <button 
                          onClick={() => setBookingState('expanded')}
                          className="w-full relative group overflow-hidden rounded-full p-[1px]"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/30 via-amber-200/60 to-[#d4af37]/30 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></span>
                          <div className="relative rounded-full px-8 py-5 transition-all duration-700 flex items-center justify-between" style={{ background: 'rgba(5,10,8,0.9)', backdropFilter: 'blur(10px)' }}>
                            <span className="font-montserrat font-medium tracking-[0.2em] text-white uppercase text-sm">Arrange Safari</span>
                            <ArrowRight size={20} style={{ color: '#d4af37' }} className="group-hover:translate-x-1 transition-transform duration-500" />
                          </div>
                        </button>
                      </motion.div>
                    )}

                    {/* State: Expanded Booking Flow */}
                    {bookingState === 'expanded' && (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.8, ease: luxuryEase }}
                        className="space-y-7"
                      >
                        {/* Date Picker */}
                        <div className="space-y-3">
                          <label className="font-montserrat text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'rgba(212,175,55,0.6)' }}>Select Date</label>
                          <div className="relative">
                            <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(245,240,232,0.3)' }} />
                            <input 
                              type="date" 
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              className="luxury-date-input"
                            />
                          </div>
                        </div>

                        {/* Safari Type Selectors */}
                        <div className="space-y-3">
                          <label className="font-montserrat text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'rgba(212,175,55,0.6)' }}>Safari Type</label>
                          <div className="space-y-3">
                            {safariTypes.map((safari) => (
                              <button
                                key={safari.id}
                                onMouseEnter={() => setHoveredSafari(safari.id)}
                                onMouseLeave={() => setHoveredSafari(null)}
                                onClick={() => setSelectedSafari(safari.id)}
                                className="w-full text-left px-6 py-5 rounded-2xl transition-all duration-700 flex items-center justify-between group"
                                style={{
                                  background: selectedSafari === safari.id ? 'rgba(212,175,55,0.08)' : 'rgba(255,255,255,0.02)',
                                  border: `1px solid ${selectedSafari === safari.id ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.05)'}`,
                                }}
                              >
                                <div>
                                  <div className={`font-montserrat font-medium text-sm tracking-wider transition-colors duration-500`} style={{ color: selectedSafari === safari.id ? '#d4af37' : '#f5f0e8' }}>
                                    {safari.title}
                                  </div>
                                  <div className="font-montserrat text-xs mt-1.5 font-light tracking-wider" style={{ color: 'rgba(245,240,232,0.3)' }}>{safari.time}</div>
                                </div>
                                <div 
                                  className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500"
                                  style={{
                                    border: selectedSafari === safari.id ? '2px solid #d4af37' : '1.5px solid rgba(255,255,255,0.15)',
                                    background: selectedSafari === safari.id ? '#d4af37' : 'transparent'
                                  }}
                                >
                                  {selectedSafari === safari.id && <Check size={11} style={{ color: '#050a08' }} />}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Confirm Button */}
                        <button 
                          onClick={handleAddToCart}
                          disabled={!selectedDate || !selectedSafari}
                          className="w-full relative group overflow-hidden rounded-full p-[1px] disabled:opacity-40 disabled:cursor-not-allowed mt-2 block"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-amber-200 to-[#d4af37] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></span>
                          <div className="relative rounded-full px-8 py-5 transition-all duration-700 flex items-center justify-center" style={{ background: '#050a08' }}>
                            <span className="font-montserrat font-medium tracking-[0.2em] uppercase text-sm transition-colors duration-500" style={{ color: '#d4af37' }}>Confirm & Add</span>
                          </div>
                        </button>
                        
                        <button 
                          onClick={() => setBookingState('initial')}
                          className="w-full text-center font-montserrat text-xs uppercase tracking-[0.3em] mt-2 transition-colors duration-500"
                          style={{ color: 'rgba(245,240,232,0.25)' }}
                          onMouseEnter={(e) => e.target.style.color = 'rgba(245,240,232,0.7)'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(245,240,232,0.25)'}
                        >
                          Cancel
                        </button>
                      </motion.div>
                    )}

                    {/* State: Success */}
                    {bookingState === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: luxuryEase }}
                        className="w-full flex flex-col items-center justify-center py-12 rounded-2xl"
                        style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.15)' }}
                      >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(212,175,55,0.12)' }}>
                          <Check size={30} style={{ color: '#d4af37' }} />
                        </div>
                        <h4 className="font-playfair text-2xl text-white mb-3 tracking-wide">Added to Cart</h4>
                        <p className="font-montserrat text-xs font-light text-center px-8 tracking-wider" style={{ color: 'rgba(245,240,232,0.4)' }}>Your safari has been securely added to your booking collection.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         TAXI & TRANSFER SERVICES — Elegant service cards
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-40 relative overflow-hidden" style={{ background: '#050a08' }}>
        {/* Subtle top separator */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)' }} />
        
        <div className="container-premium space-y-20 px-6 lg:px-0 w-full">
          {/* Custom Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="text-center mb-8"
          >
            <p className="font-montserrat text-[11px] tracking-[0.5em] uppercase mb-7 font-medium" style={{ color: 'rgba(212, 175, 55, 0.6)' }}>Transportation</p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 tracking-wide">
              Taxi & <em className="italic" style={{ color: 'rgba(212, 175, 55, 0.75)' }}>Transfer</em> Services
            </h2>
            <div className="gold-shimmer-line mx-auto mb-8" />
            <p className="max-w-2xl mx-auto font-montserrat text-sm font-light tracking-wider leading-loose" style={{ color: 'rgba(245, 240, 232, 0.45)' }}>
              Airport pickups, city transfers, and private chauffeur services across Sri Lanka.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { title: 'Airport Transfer', desc: 'Comfortable AC vehicle transfers from Mattala (50 km) or Colombo airport.', icon: Car },
              { title: 'City-to-City Transfer', desc: 'Private transfers to Ella, Kandy, Galle, Mirissa, and beyond.', icon: Map },
              { title: 'Day Trip Chauffeur', desc: 'Full-day private vehicle with driver for sightseeing and exploration.', icon: Clock },
            ].map(({ title, desc, icon: Icon }, i) => (
              <motion.div 
                key={title} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: '200px' }} 
                transition={{ delay: i * 0.15, duration: 1, ease: luxuryEase }} 
                className="tour-luxury-card flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <Icon 
                  size={36} 
                  strokeWidth={1} 
                  className="mb-8 card-icon" 
                  style={{ color: 'rgba(212, 175, 55, 0.5)' }} 
                />
                <h3 className="font-playfair text-2xl font-normal tracking-wide text-white mb-5">{title}</h3>
                <p className="font-montserrat text-sm font-light leading-[1.9] tracking-wider" style={{ color: 'rgba(245, 240, 232, 0.4)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         TOUR PACKAGES — Minimalist tabs with gold underlines
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-40 relative overflow-hidden" style={{ background: '#0a0f0d' }}>
        {/* Subtle top separator */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)' }} />
        
        <div className="container-premium space-y-20 px-6 lg:px-0 w-full">
          {/* Custom Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="text-center mb-8"
          >
            <p className="font-montserrat text-[11px] tracking-[0.5em] uppercase mb-7 font-medium" style={{ color: 'rgba(212, 175, 55, 0.6)' }}>Explore Sri Lanka</p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 tracking-wide">
              Full Tour <em className="italic" style={{ color: 'rgba(212, 175, 55, 0.75)' }}>Packages</em>
            </h2>
            <div className="gold-shimmer-line mx-auto mb-8" />
            <p className="max-w-2xl mx-auto font-montserrat text-sm font-light tracking-wider leading-loose" style={{ color: 'rgba(245, 240, 232, 0.45)' }}>
              Curated multi-day itineraries to discover the best of Sri Lanka.
            </p>
          </motion.div>

          {/* Minimalist Text Tabs */}
          <div className="flex justify-center gap-10 md:gap-16 mb-20">
            {tourPackages.map((pkg, i) => (
              <button 
                key={pkg.duration} 
                onClick={() => setActiveTab(i)} 
                className="relative pb-4 group"
              >
                <span 
                  className="font-montserrat text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-700"
                  style={{ color: activeTab === i ? '#d4af37' : 'rgba(245, 240, 232, 0.3)' }}
                >
                  {pkg.duration}
                </span>
                {/* Gold underline indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: '#d4af37' }}
                  initial={false}
                  animate={{ 
                    scaleX: activeTab === i ? 1 : 0,
                    opacity: activeTab === i ? 1 : 0
                  }}
                  transition={{ duration: 0.6, ease: luxuryEase }}
                />
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.8, ease: luxuryEase }} 
              className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center"
            >
              <div className="p-10 lg:p-14 rounded-3xl flex flex-col items-center text-center lg:items-start lg:text-left w-full" style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 mb-10 w-full">
                  <div className="w-8 h-[1px] hidden lg:block" style={{ background: '#d4af37' }}></div>
                  <span className="font-montserrat text-[10px] tracking-[0.4em] uppercase font-medium" style={{ color: 'rgba(212,175,55,0.6)' }}>{tourPackages[activeTab].duration} Tour</span>
                </div>
                
                <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-8 tracking-wide leading-tight">{tourPackages[activeTab].title}</h3>
                <p className="font-montserrat text-sm font-light leading-[2] tracking-wider mb-12" style={{ color: 'rgba(245, 240, 232, 0.5)' }}>{tourPackages[activeTab].desc}</p>
                
                <h4 className="font-montserrat text-[10px] uppercase tracking-[0.4em] font-semibold mb-8" style={{ color: 'rgba(212,175,55,0.7)' }}>Tour Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 w-full">
                  {tourPackages[activeTab].highlights.map((h) => (
                    <div key={h} className="flex flex-col lg:flex-row items-center justify-center lg:justify-start text-center lg:text-left gap-3 font-montserrat text-sm font-light tracking-wider" style={{ color: 'rgba(245,240,232,0.5)' }}>
                      <Check size={14} style={{ color: '#d4af37', flexShrink: 0 }} />{h}
                    </div>
                  ))}
                </div>
                
                <a 
                  href="https://wa.me/94774621521?text=Hi!%20I%27m%20interested%20in%20the%20tour%20package." 
                  target="_blank" 
                  className="mt-14 inline-flex items-center gap-3 group relative overflow-hidden rounded-full p-[1px]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/30 via-amber-200/50 to-[#d4af37]/30 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"></span>
                  <div className="relative rounded-full px-8 py-4 transition-all duration-700 flex items-center gap-3" style={{ background: '#0a0f0d' }}>
                    <span className="font-montserrat font-medium tracking-[0.15em] uppercase text-xs" style={{ color: '#d4af37' }}>Inquire Now</span>
                    <ArrowRight size={16} style={{ color: '#d4af37' }} className="transition-transform group-hover:translate-x-1 duration-500" />
                  </div>
                </a>
              </div>
              
              {/* Large Image */}
              <div className="relative h-96 md:h-full min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden group bg-[#05100c]">
                <Image 
                  src={tourPackages[activeTab].image} 
                  alt={tourPackages[activeTab].title} 
                  fill 
                  className="object-cover transition-transform duration-[2.5s] group-hover:scale-105" 
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  quality={80}
                  priority={true}
                  unoptimized={true}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         AI TOUR PLANNER — Exclusive concierge experience
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-40 relative overflow-hidden" style={{ background: '#050a08' }}>
        {/* Subtle top separator */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)' }} />
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.02] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)' }} />
        
        <div className="container-premium px-6 lg:px-0 w-full">
          {/* Custom Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="text-center mb-20"
          >
            <p className="font-montserrat text-[11px] tracking-[0.5em] uppercase mb-7 font-medium" style={{ color: 'rgba(212, 175, 55, 0.6)' }}>Exclusive Concierge</p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 tracking-wide">
              AI Tour <em className="italic" style={{ color: 'rgba(212, 175, 55, 0.75)' }}>Planner</em>
            </h2>
            <div className="gold-shimmer-line mx-auto mb-8" />
            <p className="max-w-2xl mx-auto font-montserrat text-sm font-light tracking-wider leading-loose" style={{ color: 'rgba(245, 240, 232, 0.45)' }}>
              Share your preferences and our concierge will craft a personalized Sri Lanka itinerary.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: '200px' }} 
              transition={{ duration: 1, ease: luxuryEase }} 
              className="p-10 lg:p-14 rounded-3xl"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 mb-12 w-full text-center lg:text-left">
                <Sparkles size={22} strokeWidth={1.5} style={{ color: 'rgba(212,175,55,0.7)' }} />
                <h3 className="font-playfair text-2xl font-normal text-white tracking-wide">Plan Your <em className="italic" style={{ color: 'rgba(212,175,55,0.7)' }}>Journey</em></h3>
              </div>
              
              <div className="space-y-10">
                {/* Interests — material input */}
                <div>
                  <label className="block font-montserrat text-[10px] uppercase tracking-[0.3em] font-medium mb-1" style={{ color: 'rgba(245,240,232,0.35)' }}>Your Interests</label>
                  <input 
                    type="text" 
                    placeholder="e.g., wildlife, beach, culture, adventure..." 
                    value={aiForm.interests} 
                    onChange={(e) => setAiForm({ ...aiForm, interests: e.target.value })} 
                    className="luxury-input"
                  />
                </div>
                
                {/* Duration + Travelers — side by side on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div>
                    <label className="block font-montserrat text-[10px] uppercase tracking-[0.3em] font-medium mb-1" style={{ color: 'rgba(245,240,232,0.35)' }}>Duration</label>
                    <select 
                      value={aiForm.duration} 
                      onChange={(e) => setAiForm({ ...aiForm, duration: e.target.value })} 
                      className="luxury-select"
                    >
                      {[3, 5, 7, 10, 14, 21].map((d) => <option key={d} value={d}>{d} days</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-montserrat text-[10px] uppercase tracking-[0.3em] font-medium mb-1" style={{ color: 'rgba(245,240,232,0.35)' }}>Travelers</label>
                    <select 
                      value={aiForm.travelers} 
                      onChange={(e) => setAiForm({ ...aiForm, travelers: e.target.value })} 
                      className="luxury-select"
                    >
                      {[1, 2, 3, 4, 5, 6].map((t) => <option key={t} value={t}>{t} {t === 1 ? 'person' : 'people'}</option>)}
                    </select>
                  </div>
                </div>
                
                {/* Travel Pace — pill buttons */}
                <div>
                  <label className="block font-montserrat text-[10px] uppercase tracking-[0.3em] font-medium mb-4" style={{ color: 'rgba(245,240,232,0.35)' }}>Travel Pace</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {['relaxed', 'moderate', 'fast'].map((b) => (
                      <button 
                        key={b} 
                        onClick={() => setAiForm({ ...aiForm, budget: b })} 
                        className="flex-1 py-3.5 rounded-2xl sm:rounded-full font-montserrat text-xs tracking-[0.15em] font-medium uppercase transition-all duration-700"
                        style={{ 
                          background: aiForm.budget === b ? 'rgba(212,175,55,0.12)' : 'rgba(255,255,255,0.02)', 
                          border: `1px solid ${aiForm.budget === b ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.05)'}`, 
                          color: aiForm.budget === b ? '#d4af37' : 'rgba(245,240,232,0.3)' 
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Generate Button */}
                <button 
                  onClick={generateItinerary} 
                  disabled={aiLoading} 
                  className="w-full relative group overflow-hidden rounded-full p-[1px] mt-4"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/40 via-amber-200/60 to-[#d4af37]/40 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"></span>
                  <div className="relative rounded-full px-8 py-5 transition-all duration-700 flex items-center justify-center gap-3" style={{ background: '#050a08' }}>
                    {aiLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" style={{ color: '#d4af37' }} />
                        <span className="font-montserrat font-medium tracking-[0.2em] text-sm uppercase" style={{ color: '#d4af37' }}>Crafting...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={18} style={{ color: '#d4af37' }} />
                        <span className="font-montserrat font-medium tracking-[0.2em] text-sm uppercase" style={{ color: '#d4af37' }}>Generate Itinerary</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Result — Luxury itinerary card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: '200px' }} 
              transition={{ duration: 1, ease: luxuryEase }} 
              className="p-10 lg:p-14 rounded-3xl min-h-[550px] flex flex-col relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              {/* Decorative gold corner ornament */}
              {aiResult && (
                <>
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.06] pointer-events-none" style={{ background: 'radial-gradient(circle at top right, #d4af37, transparent 70%)' }} />
                  <div className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, #d4af37, transparent 70%)' }} />
                </>
              )}
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-10 relative z-10">
                <div className="w-2 h-2 rounded-full transition-colors duration-700" style={{ background: aiResult ? '#d4af37' : 'rgba(255,255,255,0.08)' }} />
                <h3 className="font-montserrat text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'rgba(245,240,232,0.35)' }}>Your Personalized Itinerary</h3>
              </div>
              
              {aiLoading ? (
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <Loader2 size={40} strokeWidth={0.8} className="animate-spin mx-auto mb-8" style={{ color: 'rgba(212,175,55,0.5)' }} />
                    <p className="font-montserrat text-sm font-light tracking-wider" style={{ color: 'rgba(245,240,232,0.35)' }}>Crafting your perfect itinerary...</p>
                  </div>
                </div>
              ) : aiResult ? (
                <div className="flex-1 relative z-10 flex flex-col">
                  <div 
                    className="font-montserrat text-sm leading-[2] whitespace-pre-line font-light flex-1 tracking-wide"
                    style={{ color: 'rgba(245,240,232,0.6)' }}
                  >
                    {aiResult}
                  </div>
                  <a 
                    href={`https://wa.me/94774621521?text=${encodeURIComponent('Hi! I generated this itinerary and would like to discuss:\n\n' + aiResult)}`} 
                    target="_blank" 
                    className="mt-10 inline-flex items-center justify-center gap-3 relative group overflow-hidden rounded-full p-[1px]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/30 via-amber-200/50 to-[#d4af37]/30 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"></span>
                    <div className="relative rounded-full px-8 py-4 transition-all duration-700 flex items-center gap-3" style={{ background: '#050a08' }}>
                      <span className="font-montserrat font-medium tracking-[0.15em] uppercase text-xs" style={{ color: '#d4af37' }}>Discuss on WhatsApp</span>
                      <ArrowRight size={14} style={{ color: '#d4af37' }} />
                    </div>
                  </a>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <Sparkles size={44} strokeWidth={0.8} className="mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.06)' }} />
                    <p className="font-montserrat text-sm font-light leading-relaxed tracking-wider" style={{ color: 'rgba(245,240,232,0.25)' }}>
                      Fill in your preferences and click<br />Generate to see your custom itinerary
                    </p>
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
