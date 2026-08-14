'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Users, Maximize2, Wind, Eye, Wifi, Coffee, ShowerHead, ArrowRight, Check } from 'lucide-react';

const roomsData = [
  {
    name: 'Safari Family Cottage',
    img: '/images/support/IMG_6225.JPG',
    gallery: ['/images/support/IMG_6227.JPG', '/images/support/IMG_6237.JPG'],
    desc: 'Spacious thatched-roof cottage nestled amidst lush greenery with private bathroom, air-conditioning, garden views, and a generous balcony and terrace. Perfect for families seeking an authentic safari experience.',
    guests: 'Up to 4 Guests', size: '45 m²', view: 'Garden View',
    amenities: ['Private Bathroom', 'Air Conditioning', 'Free WiFi', 'Balcony & Terrace', 'Tea/Coffee Maker', 'Room Service', 'Mosquito Net', 'Mini Fridge'],
  },
  {
    name: 'Deluxe Garden Room',
    img: '/images/support/IMG_6237.JPG',
    gallery: ['/images/support/IMG_6239.JPG', '/images/support/IMG_6241.JPG'],
    desc: 'Elegantly appointed room with modern amenities surrounded by tropical gardens. Features air-conditioning, private bathroom with shower, and a charming seating area overlooking the property.',
    guests: 'Up to 2 Guests', size: '35 m²', view: 'Courtyard View',
    amenities: ['Private Bathroom', 'Air Conditioning', 'Free WiFi', 'Garden View', 'Tea/Coffee Maker', 'Hairdryer', 'Free Toiletries', 'Desk'],
  },
  {
    name: 'Premium Pool Suite',
    img: '/images/support/IMG_6239.JPG',
    gallery: ['/images/support/IMG_6226.JPG', '/images/support/IMG_6225.JPG'],
    desc: 'Our finest accommodation with direct access to the outdoor swimming pool. Features a sun terrace, luxury furnishings, extra-long beds, and panoramic views of the surrounding landscape.',
    guests: 'Up to 3 Guests', size: '50 m²', view: 'Pool & Garden View',
    amenities: ['Pool Access', 'Private Bathroom', 'Air Conditioning', 'Free WiFi', 'Sun Terrace', 'Extra-long Beds', 'Dining Area', 'Soundproofing'],
  },
];

export default function RoomsPage() {
  return (
    <div className="page-transition pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="/images/support/IMG_6237.JPG" alt="Our Rooms" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,13,0.5), rgba(10,15,13,0.8))' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6">
            <p className="text-xs tracking-[0.5em] uppercase mb-3" style={{ color: 'rgba(16,185,129,0.8)' }}>Luxury Stays</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Our Rooms & Cottages</h1>
            <p className="max-w-2xl mx-auto text-base" style={{ color: 'rgba(224,231,228,0.7)' }}>Every room is designed for comfort and immersion in nature</p>
          </motion.div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="section-padding" style={{ background: 'var(--dark-800)' }}>
        <div className="container-premium space-y-32">
          {roomsData.map((room, i) => (
            <motion.div key={room.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
              {/* Images */}
              <div className={`grid grid-cols-2 gap-4 ${i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="relative h-[400px] rounded-md overflow-hidden col-span-2 group">
                  <Image src={room.img} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                {room.gallery.map((g, gi) => (
                  <div key={gi} className="relative h-48 rounded-md overflow-hidden group">
                    <Image src={g} alt={`${room.name} detail ${gi + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" sizes="250px" />
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className={`${i % 2 !== 0 ? 'lg:[direction:ltr]' : ''} lg:px-8`}>
                <span className="text-xs tracking-[0.5em] uppercase mb-4 block font-medium" style={{ color: 'rgba(16,185,129,0.7)' }}>Room 0{i + 1}</span>
                <h2 className="font-serif text-3xl md:text-5xl font-normal text-white mb-6 tracking-wide">{room.name}</h2>
                <p className="text-sm md:text-base leading-loose font-light mb-10" style={{ color: 'rgba(224,231,228,0.6)' }}>{room.desc}</p>

                <div className="flex flex-wrap gap-4 mb-10">
                  {[
                    { icon: Users, label: room.guests },
                    { icon: Maximize2, label: room.size },
                    { icon: Eye, label: room.view },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 px-4 py-3 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <Icon size={16} strokeWidth={1.5} style={{ color: 'rgba(201,162,39,0.8)' }} />
                      <span className="text-xs font-light tracking-wide text-white">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-12">
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-3 text-sm font-light" style={{ color: 'rgba(224,231,228,0.5)' }}>
                      <Check size={14} style={{ color: 'rgba(16,185,129,0.5)' }} /> {a}
                    </div>
                  ))}
                </div>

                <a href="https://www.booking.com/hotel/lk/jungle-safari-cottage-udawalawa.en-gb.html" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3 group">
                  Reserve This Suite <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
