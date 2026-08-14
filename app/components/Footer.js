'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MapPin, Mail, Phone, Clock,
  Globe, Camera, Play,
  ArrowUpRight, Heart
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Rooms', href: '/rooms' },
  { name: 'Attractions', href: '/attractions' },
  { name: 'Tour Services', href: '/tour-services' },
  { name: 'Contact Us', href: '/contacts' },
];

const services = [
  'Safari Arrangements',
  'Airport Shuttle',
  'Taxi Services',
  'Tour Packages',
  'Restaurant & Dining',
  'Swimming Pool',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0f0d, #05120e)' }}>
      {/* Top decorative line */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201, 162, 39, 0.2), transparent)' }} />

      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201, 162, 39, 1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201, 162, 39, 1) 0%, transparent 50%)',
      }} />

      <div className="container-premium relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-24">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-sm" style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <Image
                  src="/images/logo/logo.png"
                  alt="Emerald Haven"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-normal tracking-wide text-white">
                  Emerald Haven
                </h3>
                <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: 'rgba(201, 162, 39, 0.8)' }}>
                  Safari Cottages
                </p>
              </div>
            </Link>
            <p className="text-sm font-light leading-loose mb-10" style={{ color: 'rgba(224, 231, 228, 0.6)' }}>
              Experience the untamed beauty of Udawalawa with bespoke safari cottages nestled in nature. 
              Rated 9.7/10 — Exceptional by our guests.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Globe, href: '#', label: 'Facebook' },
                { icon: Camera, href: '#', label: 'Instagram' },
                { icon: Play, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-500 hover:bg-white/5"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: 'rgba(224, 231, 228, 0.7)',
                  }}
                >
                  <Icon size={18} strokeWidth={1} className="transition-colors duration-500 hover:text-gold-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-serif text-lg font-normal mb-8 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-light flex items-center gap-3 group transition-colors duration-500"
                    style={{ color: 'rgba(224, 231, 228, 0.6)' }}
                  >
                    <span className="w-1.5 h-px bg-emerald-500/30 group-hover:w-3 transition-all duration-500" />
                    <span className="group-hover:text-emerald-400 transition-colors duration-500 tracking-wide">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-normal mb-8 text-white tracking-wide">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-sm font-light flex items-center gap-3 group" style={{ color: 'rgba(224, 231, 228, 0.6)' }}>
                  <span className="w-1.5 h-px bg-gold-500/30" />
                  <span className="tracking-wide">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-normal mb-8 text-white tracking-wide">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} strokeWidth={1} className="mt-1 flex-shrink-0" style={{ color: 'rgba(201, 162, 39, 0.8)' }} />
                <p className="text-sm font-light leading-relaxed tracking-wide" style={{ color: 'rgba(224, 231, 228, 0.6)' }}>
                  No 49/1, Thanamalwila Road,<br />
                  Udawalawa, Sri Lanka
                </p>
              </div>
              <a href="tel:+94774621521" className="flex items-center gap-4 group">
                <Phone size={18} strokeWidth={1} className="flex-shrink-0" style={{ color: 'rgba(201, 162, 39, 0.8)' }} />
                <span className="text-sm font-light tracking-wide group-hover:text-emerald-400 transition-colors duration-500" style={{ color: 'rgba(224, 231, 228, 0.6)' }}>
                  +94 77 462 1521
                </span>
              </a>
              <a href="mailto:emeralhaven.udawalaw@gmail.com" className="flex items-center gap-4 group">
                <Mail size={18} strokeWidth={1} className="flex-shrink-0" style={{ color: 'rgba(201, 162, 39, 0.8)' }} />
                <span className="text-sm font-light tracking-wide group-hover:text-emerald-400 transition-colors duration-500 break-all" style={{ color: 'rgba(224, 231, 228, 0.6)' }}>
                  emeralhaven.udawalaw@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-4">
                <Clock size={18} strokeWidth={1} className="flex-shrink-0" style={{ color: 'rgba(201, 162, 39, 0.8)' }} />
                <span className="text-sm font-light tracking-wide" style={{ color: 'rgba(224, 231, 228, 0.6)' }}>
                  24/7 Reception
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs font-light tracking-wide" style={{ color: 'rgba(224, 231, 228, 0.4)' }}>
              © {new Date().getFullYear()} Emerald Haven Safari Cottages. All rights reserved.
            </p>
            <p className="text-xs font-light tracking-wide flex items-center gap-2" style={{ color: 'rgba(224, 231, 228, 0.4)' }}>
              Crafted with <Heart size={12} strokeWidth={1.5} className="text-red-500/70" /> for an unforgettable safari experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
