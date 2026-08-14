'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Calendar, User, MessageSquare, BedDouble } from 'lucide-react';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', checkIn: '', checkOut: '', roomType: 'Safari Family Cottage', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `🏨 *Booking Inquiry - Emerald Haven*\n\n👤 Name: ${form.name}\n📅 Check-in: ${form.checkIn}\n📅 Check-out: ${form.checkOut}\n🛏️ Room: ${form.roomType}\n💬 Message: ${form.message || 'N/A'}`;
    window.open(`https://wa.me/94774621521?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="page-transition pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="/images/support/IMG_6241.JPG" alt="Contact Us" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,13,0.5), rgba(10,15,13,0.85))' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6">
            <p className="text-xs tracking-[0.5em] uppercase mb-3" style={{ color: 'rgba(16,185,129,0.8)' }}>Get in Touch</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-base" style={{ color: 'rgba(224,231,228,0.7)' }}>We&apos;d love to hear from you — reach out for bookings, inquiries, or safari arrangements</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding" style={{ background: 'var(--dark-800)' }}>
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <p className="text-xs tracking-[0.6em] uppercase mb-6 font-medium" style={{ color: 'rgba(16,185,129,0.7)' }}>Reach Us</p>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-8 tracking-wide">We&apos;re Here to Help</h2>
              <p className="text-base font-light leading-loose mb-12" style={{ color: 'rgba(224,231,228,0.6)' }}>
                Whether you&apos;re planning a safari adventure, reserving a room, or need airport transfers — our team is available to assist you.
              </p>

              <div className="space-y-10 mb-12">
                {[
                  { icon: MapPin, title: 'Address', text: 'No 49/1, Thanamalwila Road, Udawalawa, Sri Lanka', href: null },
                  { icon: Phone, title: 'Phone / WhatsApp', text: '+94 77 462 1521', href: 'tel:+94774621521' },
                  { icon: Mail, title: 'Email', text: 'emeralhaven.udawalaw@gmail.com', href: 'mailto:emeralhaven.udawalaw@gmail.com' },
                  { icon: Clock, title: 'Reception Hours', text: '24/7 — We never close', href: null },
                ].map(({ icon: Icon, title, text, href }) => (
                  <div key={title} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} strokeWidth={1} style={{ color: 'rgba(201,162,39,0.8)' }} className="group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-medium text-white mb-2">{title}</p>
                      {href ? (
                        <a href={href} className="text-sm font-light tracking-wide transition-colors duration-500 hover:text-emerald-400" style={{ color: 'rgba(224,231,228,0.6)' }}>{text}</a>
                      ) : (
                        <p className="text-sm font-light tracking-wide" style={{ color: 'rgba(224,231,228,0.6)' }}>{text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className="relative h-72 rounded-md overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d80.8831!3d6.4381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMTcuMiJOIDgwwrA1MycwMC4wIkU!5e0!3m2!1sen!2slk!4v1"
                  width="100%" height="100%" style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2) grayscale(0.5)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Emerald Haven Location"
                />
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <div className="p-10 md:p-14 rounded-md relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <Send size={24} strokeWidth={1} style={{ color: 'rgba(16,185,129,0.8)' }} />
                  <div>
                    <h3 className="font-serif text-3xl font-normal text-white tracking-wide">Reserve Your Stay</h3>
                    <p className="text-xs uppercase tracking-widest font-light mt-2" style={{ color: 'rgba(224,231,228,0.5)' }}>Send details via WhatsApp</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(224,231,228,0.5)' }}>
                      <User size={14} /> Full Name
                    </label>
                    <input type="text" required placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-4 rounded-sm text-sm text-white placeholder-gray-500 outline-none transition-all" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }} id="contact-name" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(224,231,228,0.5)' }}>
                        <Calendar size={14} /> Check-in
                      </label>
                      <input type="date" required value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} className="w-full px-5 py-4 rounded-sm text-sm text-white outline-none transition-all" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', colorScheme: 'dark' }} id="contact-checkin" />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(224,231,228,0.5)' }}>
                        <Calendar size={14} /> Check-out
                      </label>
                      <input type="date" required value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} className="w-full px-5 py-4 rounded-sm text-sm text-white outline-none transition-all" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', colorScheme: 'dark' }} id="contact-checkout" />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(224,231,228,0.5)' }}>
                      <BedDouble size={14} /> Room Selection
                    </label>
                    <select value={form.roomType} onChange={(e) => setForm({ ...form, roomType: e.target.value })} className="w-full px-5 py-4 rounded-sm text-sm text-white outline-none transition-all" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }} id="contact-room">
                      <option value="Safari Family Cottage" className="bg-black">Safari Family Cottage</option>
                      <option value="Deluxe Garden Room" className="bg-black">Deluxe Garden Room</option>
                      <option value="Premium Pool Suite" className="bg-black">Premium Pool Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(224,231,228,0.5)' }}>
                      <MessageSquare size={14} /> Requests
                    </label>
                    <textarea rows={4} placeholder="Any special requests or questions..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-5 py-4 rounded-sm text-sm text-white placeholder-gray-500 outline-none transition-all resize-none" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }} id="contact-message" />
                  </div>

                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-3 py-5 group mt-4" id="contact-submit">
                    <span className="relative z-10 flex items-center gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Send via WhatsApp
                    </span>
                  </button>
                </form>

                <p className="text-center text-[10px] uppercase tracking-widest mt-6" style={{ color: 'rgba(224,231,228,0.4)' }}>
                  Secure WhatsApp Connection
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
