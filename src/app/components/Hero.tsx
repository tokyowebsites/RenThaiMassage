import React from 'react';
import { motion } from 'motion/react';
import heroImage from '@/assets/9560d1b888ac43900e2c0d9cd3817315ceddc6e3.png';
import logoImage from '@/assets/d53807f633fe067da90f84356fe69e82d4cf3996.png';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Ren Thai Massage 店内"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A4543]/80 via-[#4A4543]/60 to-[#4A4543]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src={logoImage}
            alt="Ren Thai Massage"
            className="w-[80%] max-w-[300px] md:max-w-5xl mx-auto mb-12 mt-20 md:mt-0 invert brightness-0 sm:invert-0 sm:brightness-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="w-32 h-px bg-[#D4B896] mx-auto mb-10" />
          <p className="text-2xl md:text-3xl text-white/95 mb-16 tracking-wide" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            心と体を癒す、本格タイ古式マッサージ
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="tel:070-1614-1177"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-[#4A4543] rounded-full hover:bg-[#F5F1ED] transition-all duration-300 shadow-xl text-lg"
            >
              お電話でご予約
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#4A4543] transition-all duration-300 text-lg"
            >
              WEB予約
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - positioned below content */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}