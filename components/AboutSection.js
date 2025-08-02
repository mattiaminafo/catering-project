'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Heart, Users } from 'lucide-react';
// import { useState } from 'react';
// import ChefModal from './ChefModal';

export default function AboutSection() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="section-padding bg-base-100">
      <div className="container-custom max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* ---------- LEFT ---------- */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">
              Chi sono
            </h2>

            <p className="text-lg text-neutral/80 mb-6 leading-relaxed">
              Ciao, sono Maria, chef privata con quasi 30&nbsp;anni di esperienza
              nelle cucine di ristoranti, hotel e catering di tutta Italia.
              Oggi porto questa lunga storia ai tuoi eventi, unendo la cura di
              un ristorante stellato al calore di casa tua.
            </p>

            <p className="text-lg text-neutral/80 mb-8 leading-relaxed">
              Prediligo ingredienti di stagione provenienti da produttori locali,
              che trasformo in menù su misura per ogni occasione—dalla cena
              intima al grande ricevimento. La mia firma? Finger food creativi
              che stupiscono al primo morso, raccontando tradizione e innovazione
              in miniatura.
            </p>

            {/*​ Highlights */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                </div>
                <p className="text-sm font-semibold text-neutral">20+ anni</p>
                <p className="text-xs text-neutral/60">di esperienza</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3">
                  <Heart className="w-8 h-8 text-primary mx-auto" />
                </div>
                <p className="text-sm font-semibold text-neutral">50+</p>
                <p className="text-xs text-neutral/60">eventi realizzati</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary mx-auto" />
                </div>
                <p className="text-sm font-semibold text-neutral">100%</p>
                <p className="text-xs text-neutral/60">clienti soddisfatti</p>
              </div>
            </div>

            {/* 
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus-outline"
            >
              Scopri il mio percorso
            </button>
            */}
          </div>

          {/* ---------- RIGHT ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <Image
                  src="/images/chef_profilo.png"
                  alt="Chef Maria - Chef privata a domicilio"
                  width={500}
                  height={600}
                  className="rounded-2xl object-cover w-full aspect-[4/5]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 
      <ChefModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      */}
    </section>
  );
}
