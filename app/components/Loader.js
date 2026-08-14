'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #0a0f0d 0%, #064e3b 50%, #0a0f0d 100%)' }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  background: `rgba(16, 185, 129, ${Math.random() * 0.5 + 0.1})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center"
          >
            {/* Emerald gem icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="mx-auto mb-6 w-16 h-16 relative"
            >
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)',
                }}
              />
              <div
                className="absolute inset-2 rounded-md"
                style={{
                  background: 'linear-gradient(135deg, #34d399, #10b981)',
                  transform: 'rotate(45deg)',
                }}
              />
            </motion.div>

            {/* Hotel name */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="font-serif text-3xl md:text-4xl font-light tracking-[0.3em] uppercase"
              style={{
                background: 'linear-gradient(135deg, #c9a227, #e6c547, #c9a227)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Emerald Haven
            </motion.h1>



            {/* Progress bar */}
            <div className="mt-10 w-48 mx-auto">
              <div
                className="h-[2px] rounded-full overflow-hidden"
                style={{ background: 'rgba(16, 185, 129, 0.15)' }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #10b981, #c9a227)',
                    width: `${Math.min(progress, 100)}%`,
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1 }}
                className="mt-3 text-xs tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Loading Experience
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
