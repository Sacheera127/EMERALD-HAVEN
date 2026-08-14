'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { MapPin, ArrowRight } from 'lucide-react';

const attractions = [
  { name: 'Udawalawa National Park', img: '/images/collection/1e53ee0a-c57f-43f9-98f4-5172043bbb8e.JPG', desc: 'Home to over 600 elephants, leopards, water buffalo, and exotic birds. Just 16 km from Emerald Haven.', distance: '16 km' },
  { name: 'Elephant Transit Home', img: '/images/collection/5a76cede-17df-4ba3-8c81-23b6b1d68f4a.JPG', desc: 'Orphaned baby elephants are rehabilitated and prepared for release back into the wild.', distance: '18 km' },
  { name: 'Nuwaragala Forest', img: '/images/collection/72cbcea6-5b51-4145-8b66-a6a131dbba41.JPG', desc: 'A pristine forest reserve just 2.9 km away, perfect for nature walks and bird watching.', distance: '2.9 km' },
  { name: 'Udawalawa Reservoir', img: '/images/collection/a9b7d1c6-97e2-4bc1-a7fc-f9dc165bd4ef.JPG', desc: 'A stunning man-made lake surrounded by mountains, ideal for scenic drives and photography.', distance: '8 km' },
  { name: 'Local Cultural Village', img: '/images/collection/d495eb3f-4cf8-4653-a63f-77ededee9638.JPG', desc: 'Experience authentic Sri Lankan village life, traditional cooking classes, and local craftsmanship.', distance: '5 km' },
  { name: 'Scenic Mountain Views', img: '/images/collection/IMG_6233.JPG', desc: 'Breathtaking panoramic views of the surrounding mountains and lush valleys.', distance: '10 km' },
  { name: 'Tea Plantations', img: '/images/collection/IMG_6256.JPG', desc: 'Visit nearby tea estates for guided tours and tastings of world-famous Ceylon tea.', distance: '30 km' },
  { name: 'Wildlife Bird Sanctuary', img: '/images/collection/IMG_6263.JPG', desc: 'Over 200 species of birds including rare endemic species found in this protected sanctuary.', distance: '12 km' },
  { name: 'Ancient Temple Ruins', img: '/images/collection/IMG_6264.JPG', desc: 'Explore centuries-old Buddhist temples and archaeological sites rich with history.', distance: '20 km' },
];

export default function AttractionsPage() {
  return (
    <div className="page-transition pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="/images/collection/1e53ee0a-c57f-43f9-98f4-5172043bbb8e.JPG" alt="Attractions" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,13,0.5), rgba(10,15,13,0.85))' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6">
            <p className="text-xs tracking-[0.6em] uppercase mb-6 font-medium" style={{ color: 'rgba(16,185,129,0.7)' }}>Explore</p>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-white mb-6 tracking-wide">Local Attractions</h1>
            <p className="max-w-2xl mx-auto text-base font-light tracking-wide leading-relaxed" style={{ color: 'rgba(224,231,228,0.7)' }}>Discover the natural wonders and cultural treasures surrounding Emerald Haven</p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="section-padding" style={{ background: 'var(--dark-800)' }}>
        <div className="container-premium space-y-16">
          <SectionHeader subtitle="Discover Udawalawa" title="Must-Visit Destinations" description="From wildlife sanctuaries to ancient temples — Udawalawa offers unforgettable experiences." />
          <div className="masonry-grid mt-16">
            {attractions.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 3) * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="masonry-item group relative rounded-md overflow-hidden cursor-pointer"
                style={{ border: '1px solid rgba(255,255,255,0.03)' }}
              >
                <div className={`relative overflow-hidden ${i % 3 === 0 ? 'h-[400px]' : i % 3 === 1 ? 'h-[300px]' : 'h-[350px]'}`}>
                  <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-[3s] group-hover:scale-105 ease-out" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'linear-gradient(180deg, transparent 20%, rgba(10,15,13,0.95) 100%)' }} />
                </div>

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={16} strokeWidth={1.5} style={{ color: 'rgba(201,162,39,0.8)' }} />
                    <span className="text-xs tracking-widest uppercase font-medium" style={{ color: 'rgba(201,162,39,0.8)' }}>{item.distance} away</span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal tracking-wide text-white mb-3">{item.name}</h3>
                  <p className="text-sm font-light leading-loose opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" style={{ color: 'rgba(224,231,228,0.7)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Surroundings */}
      <section className="section-padding" style={{ background: 'var(--dark-900)' }}>
        <div className="container-premium space-y-16">
          <SectionHeader subtitle="Nearby" title="Property Surroundings" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Restaurants & Cafes', items: [{ name: 'Walawa Wine Stores', dist: '650 m' }, { name: 'Shashikala Wine Stores', dist: '700 m' }, { name: 'Ice Burge Family Restaurant', dist: '850 m' }] },
              { title: 'Natural Beauty', items: [{ name: 'Nuwaragala Forest', dist: '2.9 km' }, { name: 'Udawalawa National Park', dist: '16 km' }, { name: 'Udawalawa Reservoir', dist: '8 km' }] },
              { title: 'Closest Airports', items: [{ name: 'Mattala Rajapaksa International', dist: '50 km' }, { name: 'Weerawila Airport', dist: '65 km' }, { name: 'Colombo (BIA)', dist: '180 km' }] },
            ].map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="p-8 rounded-md" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <h3 className="font-serif text-xl font-normal text-white mb-8 tracking-wide">{cat.title}</h3>
                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm font-light" style={{ color: 'rgba(224,231,228,0.6)' }}>
                      <span>{item.name}</span>
                      <span className="text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm" style={{ background: 'rgba(255,255,255,0.03)', color: 'rgba(16,185,129,0.7)' }}>{item.dist}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
