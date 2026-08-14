'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
              <p className="text-xs tracking-[0.5em] uppercase mb-6 font-medium" style={{ color: 'rgba(16,185,129,0.7)' }}>The Property</p>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-10 tracking-wide leading-tight">Comfortable Accommodations in the Heart of Nature</h2>
              <div className="space-y-6 text-sm md:text-base leading-loose font-light" style={{ color: 'rgba(224,231,228,0.6)' }}>
                <p><strong className="text-white font-medium">Bespoke Comfort:</strong> Emerald Haven Safari Cottages in Udawalawa offers family rooms with private bathrooms, air-conditioning, and garden views. Each room includes a private balcony or terrace, ensuring a pleasant and immersive stay.</p>
                <p><strong className="text-white font-medium">Exceptional Facilities:</strong> Guests enjoy a sun terrace, lush garden, and a year-round outdoor swimming pool. High-speed WiFi is available throughout the property, enhancing connectivity without compromising tranquility.</p>
                <p><strong className="text-white font-medium">Dining Experience:</strong> The on-site restaurant serves Chinese, Indian, local, Asian, international, and barbecue grill cuisines. Breakfast options include full English, vegetarian, vegan, and gluten-free.</p>
                <p><strong className="text-white font-medium">Convenient Location:</strong> Located merely 16 km from Udawalawa National Park and 50 km from Mattala Rajapaksa International Airport, the lodge provides seamless access to prime attractions.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-12">
                <div className="flex items-center gap-4 px-6 py-4 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="px-3 py-1.5 rounded-sm text-sm font-medium text-white tracking-widest" style={{ background: 'rgba(201,162,39,0.2)', border: '1px solid rgba(201,162,39,0.4)' }}>9.7</div>
                  <div>
                    <p className="text-sm font-medium text-white tracking-widest uppercase">Exceptional</p>
                    <p className="text-xs font-light" style={{ color: 'rgba(224,231,228,0.5)' }}>139 reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-6 py-4 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <MapPin size={20} strokeWidth={1} style={{ color: 'rgba(16,185,129,0.8)' }} />
                  <div>
                    <p className="text-sm font-medium text-white tracking-widest uppercase">9.7 Location</p>
                    <p className="text-xs font-light" style={{ color: 'rgba(224,231,228,0.5)' }}>Highly rated</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 md:h-72 rounded-md overflow-hidden group"><Image src="/images/support/IMG_6225.JPG" alt="Cottage exterior" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" sizes="300px" /></div>
                <div className="relative h-72 md:h-96 rounded-md overflow-hidden group"><Image src="/images/support/IMG_6237.JPG" alt="Room interior" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" sizes="300px" /></div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative h-72 md:h-96 rounded-md overflow-hidden group"><Image src="/images/support/IMG_6226.JPG" alt="Pool area" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" sizes="300px" /></div>
                <div className="relative h-64 md:h-72 rounded-md overflow-hidden group"><Image src="/images/support/IMG_6239.JPG" alt="Garden view" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" sizes="300px" /></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding" style={{ background: 'var(--dark-900)' }}>
        <div className="container-premium space-y-20">
          <SectionHeader subtitle="World-Class Amenities" title="Facilities & Services" description="Everything you need for a perfect stay — from poolside relaxation to gourmet dining." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="p-8 rounded-md text-center transition-all duration-500 hover:bg-white/5 group" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <Icon size={32} strokeWidth={1} className="mx-auto mb-6 transition-colors duration-500 group-hover:text-gold-400" style={{ color: 'rgba(16,185,129,0.6)' }} />
                <h3 className="text-sm font-medium tracking-widest uppercase text-white mb-3">{title}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: 'rgba(224,231,228,0.5)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Amenities */}
      <section className="section-padding" style={{ background: 'var(--dark-800)' }}>
        <div className="container-premium space-y-20">
          <SectionHeader subtitle="Complete List" title="All Amenities & Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenityCategories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="p-8 rounded-md" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <h3 className="font-serif text-2xl font-normal text-white mb-8 tracking-wide">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-light" style={{ color: 'rgba(224,231,228,0.6)' }}>
                      <Check size={16} style={{ color: 'rgba(16,185,129,0.5)' }} /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--dark-900)' }}>
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="relative p-16 md:p-24 rounded-md overflow-hidden text-center group">
            <Image src="/images/hero/hero-1.jpg" alt="Book Now" fill className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-[3s] ease-out" sizes="100vw" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,78,59,0.8), rgba(10,15,13,0.9))' }} />
            <div className="relative z-10">
              <p className="text-xs tracking-[0.5em] uppercase mb-6 font-medium" style={{ color: 'rgba(16,185,129,0.8)' }}>Ready to Experience?</p>
              <h2 className="font-serif text-4xl md:text-6xl font-normal text-white mb-8 tracking-wide">Book Your Safari Stay</h2>
              <p className="text-base font-light max-w-xl mx-auto mb-12 leading-loose" style={{ color: 'rgba(224,231,228,0.6)' }}>Couples rated it 9.8 for a two-person trip. Start your bespoke adventure today.</p>
              <a href="https://www.booking.com/hotel/lk/jungle-safari-cottage-udawalawa.en-gb.html" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
                Reserve Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
