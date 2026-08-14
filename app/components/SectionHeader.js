'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({ subtitle, title, description, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
      className={`mb-24 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs tracking-[0.5em] uppercase font-medium mb-6"
          style={{ color: 'rgba(16,185,129,0.7)' }}
        >
          {subtitle}
        </motion.p>
      )}
      <h2
        className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 text-white tracking-wide"
      >
        {title}
      </h2>
      <div
        className={`premium-divider mb-8 ${align === 'center' ? '' : '!ml-0'}`}
      />
      {description && (
        <p
          className="max-w-3xl text-sm md:text-base leading-loose font-light"
          style={{
            color: 'rgba(224,231,228,0.6)',
            margin: align === 'center' ? '0 auto' : undefined,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
