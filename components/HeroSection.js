'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChefHat, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/menu9.png"
          alt="Maria Ingardia Catering"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <ChefHat className="w-12 h-12 text-accent" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Il ristorante...{' '}
          <span className="text-accent block">a casa tua</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Vivi un'esperienza gastronomica unica con menù personalizzati, 
          materie prime locali e un servizio curato nei minimi dettagli
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToContact}
            className="btn btn-secondary btn-lg text-neutral font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 focus-outline group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Prenota il tuo evento
          </button>
          
          <button
            onClick={scrollToAbout}
            className="btn btn-ghost btn-lg text-white border-white/30 hover:bg-white/10 px-8 py-4 rounded-full focus-outline"
          >
            Scopri di più
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
              <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}