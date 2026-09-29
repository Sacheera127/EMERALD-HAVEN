'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Calendar, User, MessageSquare, BedDouble, Sparkles } from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', checkIn: '', checkInTime: '', checkOut: '', checkOutTime: '', roomType: 'Safari Family Cottage', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `🏨 *Booking Inquiry - Emerald Haven*\n\n👤 Name: ${form.name}\n📅 Check-in: ${form.checkIn}${form.checkInTime ? ' at ' + form.checkInTime : ''}\n📅 Check-out: ${form.checkOut}${form.checkOutTime ? ' at ' + form.checkOutTime : ''}\n🛏️ Room: ${form.roomType}\n💬 Message: ${form.message || 'N/A'}`;
    window.open(`https://wa.me/94774621521?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="page-transition pt-24 relative w-full overflow-x-hidden" style={{ background: 'linear-gradient(180deg, #05100c 0%, #020705 100%)', isolation: 'isolate' }}>

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/support/IMG_6241.JPG"
          alt="Contact Emerald Haven — Luxury Sri Lanka Lodge"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          unoptimized
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,13,0.6), rgba(10,15,13,0.8))' }} />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6">
            <p className="text-xs tracking-[0.6em] uppercase mb-6 font-medium" style={{ color: 'rgba(16,185,129,0.7)' }}>Get in Touch</p>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-white mb-6 tracking-wide">
              Contact Us
            </h1>
            <p className="text-base max-w-2xl mx-auto font-light leading-relaxed tracking-wide" style={{ color: 'rgba(224,231,228,0.7)' }}>
              We&apos;d love to hear from you — reach out for bookings, inquiries, or safari arrangements
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           SECTION 2 — CONTACT DETAILS + FORM (2-COL GRID)
           ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: 'var(--dark-900)', padding: '120px 0' }}>
        {/* Ambient glow */}
        <div className="absolute pointer-events-none" style={{ top: '15%', left: '5%', width: '500px', height: '500px', borderRadius: '9999px', opacity: 0.04, background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '9999px', opacity: 0.03, background: 'radial-gradient(circle, #10b981, transparent 70%)' }} />

        <div className="container-premium relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="text-center"
            style={{ marginBottom: '80px' }}
          >
            <div className="flex items-center justify-center" style={{ gap: '14px', marginBottom: '20px' }}>
              <span style={{ width: '28px', height: '1px', background: 'rgba(16,185,129,0.6)' }} />
              <p className="text-xs tracking-[0.5em] uppercase font-medium" style={{ color: 'rgba(16,185,129,0.85)' }}>Reach Us</p>
              <span style={{ width: '28px', height: '1px', background: 'rgba(16,185,129,0.6)' }} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white tracking-wide" style={{ marginBottom: '20px' }}>
              We&apos;re Here to <em className="italic" style={{ color: 'rgba(212,175,55,0.85)' }}>Help</em>
            </h2>
            <p className="max-w-lg mx-auto text-sm md:text-base font-light leading-loose" style={{ color: 'rgba(224,231,228,0.62)' }}>
              Whether you&apos;re planning a safari adventure, reserving a room, or need airport transfers — our team is available around the clock.
            </p>
          </motion.div>

          {/* 2-Column Grid */}
          <div className="grid lg:grid-cols-2 items-start" style={{ gap: '64px' }}>

            {/* ─── LEFT COLUMN: Contact Details + Map ─── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left w-full"
            >
              {/* Contact items */}
              <div className="w-full" style={{ marginBottom: '48px' }}>
                <div className="flex flex-col" style={{ gap: '32px' }}>
                  {[
                    { icon: MapPin, title: 'Address', text: 'No 49/1, Thanamalwila Road, Udawalawa, Sri Lanka', href: null },
                    { icon: Phone, title: 'Phone / WhatsApp', text: '+94 77 462 1521', href: 'tel:+94774621521' },
                    { icon: Mail, title: 'Email', text: 'emeralhaven.udawalaw@gmail.com', href: 'mailto:emeralhaven.udawalaw@gmail.com' },
                    { icon: Clock, title: 'Reception Hours', text: '24/7 — We never close', href: null },
                  ].map(({ icon: Icon, title, text, href }, i) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8, ease: luxuryEase }}
                      className="group flex items-start justify-center lg:justify-start"
                      style={{ gap: '20px' }}
                    >
                      <div
                        className="flex items-center justify-center rounded-2xl shrink-0 transition-all duration-500 group-hover:scale-105"
                        style={{
                          width: '52px',
                          height: '52px',
                          background: 'rgba(16,185,129,0.06)',
                          border: '1px solid rgba(16,185,129,0.15)',
                        }}
                      >
                        <Icon size={20} strokeWidth={1.25} style={{ color: 'rgba(16,185,129,0.8)' }} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-medium text-white" style={{ marginBottom: '8px' }}>{title}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-light tracking-wide transition-colors duration-500 hover:text-emerald-400"
                            style={{ color: 'rgba(224,231,228,0.62)' }}
                          >
                            {text}
                          </a>
                        ) : (
                          <p className="text-sm font-light tracking-wide" style={{ color: 'rgba(224,231,228,0.62)' }}>{text}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Google Map — Framed Art */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1, delay: 0.2, ease: luxuryEase }}
                className="w-full"
              >
                <p className="text-xs tracking-[0.5em] uppercase font-medium" style={{ color: 'rgba(16,185,129,0.7)', marginBottom: '16px' }}>Our Location</p>
                <div
                  className="relative overflow-hidden rounded-3xl group"
                  style={{
                    border: '1px solid rgba(212,175,55,0.3)',
                    boxShadow: '0 0 40px rgba(212,175,55,0.1), 0 20px 60px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Gold corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-10" style={{ borderTop: '1px solid rgba(212,175,55,0.4)', borderLeft: '1px solid rgba(212,175,55,0.4)', borderTopLeftRadius: '24px' }} />
                  <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none z-10" style={{ borderBottom: '1px solid rgba(212,175,55,0.4)', borderRight: '1px solid rgba(212,175,55,0.4)', borderBottomRightRadius: '24px' }} />

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d80.8831!3d6.4381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMTcuMiJOIDgwwrA1MycwMC4wIkU!5e0!3m2!1sen!2slk!4v1"
                    width="100%"
                    height="320"
                    style={{
                      border: 0,
                      filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2) grayscale(0.5)',
                      display: 'block',
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Emerald Haven Location"
                    className="transition-all duration-700 group-hover:brightness-110"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* ─── RIGHT COLUMN: Reservation Form ─── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="w-full"
            >
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{
                  padding: '48px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(212,175,55,0.15)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
                }}
              >
                {/* Ambient glow inside card */}
                <div className="absolute top-0 right-0 pointer-events-none" style={{ width: '250px', height: '250px', opacity: 0.06, background: 'radial-gradient(circle at top right, #D4AF37, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: '200px', height: '200px', opacity: 0.04, background: 'radial-gradient(circle at bottom left, #10b981, transparent 70%)' }} />

                {/* Header */}
                <div className="relative z-10" style={{ marginBottom: '40px' }}>
                  <div className="flex items-center" style={{ gap: '14px', marginBottom: '20px' }}>
                    <div
                      className="flex items-center justify-center rounded-2xl"
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'rgba(212,175,55,0.08)',
                        border: '1px solid rgba(212,175,55,0.2)',
                      }}
                    >
                      <Send size={18} strokeWidth={1.25} style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-normal text-white tracking-wide">
                        Reserve Your <em className="italic" style={{ color: 'rgba(212,175,55,0.85)' }}>Stay</em>
                      </h3>
                    </div>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: 'rgba(224,231,228,0.35)' }}>
                    Inquiry sent directly via WhatsApp for instant response
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col" style={{ gap: '24px' }}>
                  {/* Name */}
                  <div>
                    <label className="flex items-center text-[10px] uppercase tracking-[0.3em] font-medium" style={{ gap: '8px', color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>
                      <User size={12} style={{ color: '#D4AF37' }} /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      id="contact-name"
                      className="w-full text-sm text-white outline-none transition-all duration-500 focus:border-[rgba(212,175,55,0.4)]"
                      style={{
                        padding: '16px 20px',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        letterSpacing: '0.02em',
                      }}
                    />
                  </div>

                  {/* Check-in Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '20px' }}>
                    <div>
                      <label className="flex items-center text-[10px] uppercase tracking-[0.3em] font-medium" style={{ gap: '8px', color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>
                        <Calendar size={12} style={{ color: '#D4AF37' }} /> Check-in Date
                      </label>
                      <input
                        type="date"
                        required
                        value={form.checkIn}
                        onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                        id="contact-checkin"
                        className="w-full text-sm text-white outline-none transition-all duration-500 focus:border-[rgba(212,175,55,0.4)]"
                        style={{
                          padding: '16px 20px',
                          borderRadius: '16px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          colorScheme: 'dark',
                        }}
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-[10px] uppercase tracking-[0.3em] font-medium" style={{ gap: '8px', color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>
                        <Clock size={12} style={{ color: '#D4AF37' }} /> Arrival Time
                      </label>
                      <input
                        type="time"
                        value={form.checkInTime}
                        onChange={(e) => setForm({ ...form, checkInTime: e.target.value })}
                        id="contact-checkin-time"
                        className="w-full text-sm text-white outline-none transition-all duration-500 focus:border-[rgba(212,175,55,0.4)]"
                        style={{
                          padding: '16px 20px',
                          borderRadius: '16px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          colorScheme: 'dark',
                        }}
                      />
                    </div>
                  </div>

                  {/* Check-out Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '20px' }}>
                    <div>
                      <label className="flex items-center text-[10px] uppercase tracking-[0.3em] font-medium" style={{ gap: '8px', color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>
                        <Calendar size={12} style={{ color: '#D4AF37' }} /> Check-out Date
                      </label>
                      <input
                        type="date"
                        required
                        value={form.checkOut}
                        onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                        id="contact-checkout"
                        className="w-full text-sm text-white outline-none transition-all duration-500 focus:border-[rgba(212,175,55,0.4)]"
                        style={{
                          padding: '16px 20px',
                          borderRadius: '16px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          colorScheme: 'dark',
                        }}
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-[10px] uppercase tracking-[0.3em] font-medium" style={{ gap: '8px', color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>
                        <Clock size={12} style={{ color: '#D4AF37' }} /> Departure Time
                      </label>
                      <input
                        type="time"
                        value={form.checkOutTime}
                        onChange={(e) => setForm({ ...form, checkOutTime: e.target.value })}
                        id="contact-checkout-time"
                        className="w-full text-sm text-white outline-none transition-all duration-500 focus:border-[rgba(212,175,55,0.4)]"
                        style={{
                          padding: '16px 20px',
                          borderRadius: '16px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          colorScheme: 'dark',
                        }}
                      />
                    </div>
                  </div>

                  {/* Room Selection */}
                  <div>
                    <label className="flex items-center text-[10px] uppercase tracking-[0.3em] font-medium" style={{ gap: '8px', color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>
                      <BedDouble size={12} style={{ color: '#D4AF37' }} /> Room Selection
                    </label>
                    <select
                      value={form.roomType}
                      onChange={(e) => setForm({ ...form, roomType: e.target.value })}
                      id="contact-room"
                      className="w-full text-sm text-white outline-none transition-all duration-500 focus:border-[rgba(212,175,55,0.4)]"
                      style={{
                        padding: '16px 20px',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                      }}
                    >
                      <option value="Safari Family Cottage" className="bg-[#05100c]">Safari Family Cottage</option>
                      <option value="Deluxe Garden Room" className="bg-[#05100c]">Deluxe Garden Room</option>
                      <option value="Premium Pool Suite" className="bg-[#05100c]">Premium Pool Suite</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center text-[10px] uppercase tracking-[0.3em] font-medium" style={{ gap: '8px', color: 'rgba(224,231,228,0.4)', marginBottom: '12px' }}>
                      <MessageSquare size={12} style={{ color: '#D4AF37' }} /> Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Any special requests, dietary needs, or questions..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      id="contact-message"
                      className="w-full text-sm text-white outline-none transition-all duration-500 resize-none focus:border-[rgba(212,175,55,0.4)]"
                      style={{
                        padding: '16px 20px',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        letterSpacing: '0.02em',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit"
                    className="w-full flex items-center justify-center rounded-full transition-all duration-500 hover:-translate-y-1 group"
                    style={{
                      gap: '12px',
                      padding: '18px',
                      marginTop: '8px',
                      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                      boxShadow: '0 10px 30px rgba(34,197,94,0.25)',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#fff' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">Send via WhatsApp</span>
                    <ArrowRight size={14} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-[10px] uppercase tracking-[0.3em] font-light" style={{ color: 'rgba(224,231,228,0.25)', marginTop: '4px' }}>
                    Secure · Instant Response · No Spam
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
           SECTION 3 — QUICK CONNECT CTA STRIP
           ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: 'var(--dark-800)', padding: '80px 0' }}>
        <div className="absolute pointer-events-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '300px', opacity: 0.04, background: 'radial-gradient(ellipse, #D4AF37, transparent 70%)' }} />

        <div className="container-premium relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="text-center"
          >
            <div className="flex items-center justify-center" style={{ gap: '14px', marginBottom: '20px' }}>
              <span style={{ width: '28px', height: '1px', background: 'rgba(16,185,129,0.5)' }} />
              <p className="text-[10px] tracking-[0.5em] uppercase font-medium" style={{ color: 'rgba(16,185,129,0.7)' }}>Quick Connect</p>
              <span style={{ width: '28px', height: '1px', background: 'rgba(16,185,129,0.5)' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white tracking-wide" style={{ marginBottom: '16px' }}>
              Prefer a Direct <em className="italic" style={{ color: 'rgba(212,175,55,0.85)' }}>Call?</em>
            </h2>
            <p className="max-w-md mx-auto text-sm font-light leading-[1.9]" style={{ color: 'rgba(224,231,228,0.4)', marginBottom: '40px' }}>
              Our concierge team is available 24/7 to assist with reservations and safari planning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: '16px' }}>
              <a
                href="tel:+94774621521"
                className="group inline-flex items-center rounded-full transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  gap: '10px',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #b8912c 100%)',
                  boxShadow: '0 10px 28px rgba(212,175,55,0.25)',
                }}
              >
                <Phone size={15} strokeWidth={2} style={{ color: '#05100c' }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#05100c' }}>Call Now</span>
                <ArrowRight size={14} strokeWidth={2} style={{ color: '#05100c' }} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:emeralhaven.udawalaw@gmail.com"
                className="group inline-flex items-center rounded-full transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  gap: '10px',
                  padding: '16px 32px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Mail size={15} strokeWidth={1.5} style={{ color: '#D4AF37' }} />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-white">Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
