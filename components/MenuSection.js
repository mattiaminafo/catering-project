'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useState } from 'react';

/* ---------- DATA ---------- */
const menuItems = [
  {
    id: 1,
    name: 'Risotto al Tartufo Nero',
    description:
      'Risotto cremoso con tartufo nero di Norcia, parmigiano 24 mesi e burro alle erbe',
    image: '/images/menu1.jpg',
    category: 'Primi Piatti',
  },
  {
    id: 2,
    name: 'Branzino in Crosta di Sale',
    description:
      'Branzino fresco del Mediterraneo cotto in crosta di sale rosa, servito con salsa verde',
    image: '/images/menu2.jpg',
    category: 'Secondi Piatti',
  },
  {
    id: 3,
    name: 'Tiramisù Decostruito',
    description:
      'Reinterpretazione moderna del classico tiramisù con savoiardi, mascarpone e caffè',
    image: '/images/menu3.jpg',
    category: 'Dolci',
  },
  {
    id: 4,
    name: 'Crudo di Ricciola',
    description:
      'Ricciola marinata con agrumi siciliani, avocado, pomodorini confit e olio EVO',
    image: '/images/menu4.jpg',
    category: 'Antipasti',
  },
  {
    id: 5,
    name: 'Agnello alle Erbe',
    description:
      'Carré di agnello delle Madonie con crosta di erbe aromatiche e riduzione al Barolo',
    image: '/images/menu5.jpg',
    category: 'Secondi Piatti',
  },
  {
    id: 6,
    name: 'Gnocchi di Patate Viola',
    description:
      'Gnocchi di patate viola con fonduta di caciocavallo e crumble alle nocciole',
    image: '/images/menu6.jpg',
    category: 'Primi Piatti',
  },
  {
    id: 7,
    name: 'Polpo alla Galiziana',
    description:
      'Polpo scottato con patate, paprika affumicata e olio EVO agrumato',
    image: '/images/menu7.jpg',
    category: 'Antipasti',
  },
  {
    id: 8,
    name: 'Filetto di Manzo Rossini',
    description:
      'Filetto di manzo con foie gras, tartufo e salsa demi-glace al Porto',
    image: '/images/menu8.jpg',
    category: 'Secondi Piatti',
  },
  {
    id: 9,
    name: 'Semifreddo al Pistacchio',
    description:
      'Semifreddo artigianale con pistacchi di Bronte IGP e salsa al cioccolato fondente',
    image: '/images/menu9.jpg',
    category: 'Dolci',
  },
];

/* ---------- COMPONENT ---------- */
export default function MenuSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % menuItems.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  const goToSlide = (i) => setCurrentSlide(i);

  return (
    <section id="menu" className="section-padding bg-base-100">
      <div className="container-custom">
        {/* ---------- TITLE ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">
            Alcuni Servizi Offerti
          </h2>
          <p className="text-xl text-neutral/70 max-w-3xl mx-auto mb-8">
            Ogni piatto è realizzato con ingredienti di stagione selezionati
            personalmente. Questi sono solo alcuni esempi della mia cucina
            creativa.
          </p>
        </motion.div>

        {/* ---------- CAROUSEL ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Track */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {menuItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  {/* Slide ─ image height drives card height */}
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative md:w-1/2 max-h-[650px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="badge badge-primary">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-neutral mb-4">
                        {item.name}
                      </h3>
                      <p className="text-lg text-neutral/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle bg-white/90 hover:bg-white border-0 shadow-lg focus-outline"
              aria-label="Piatto precedente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle bg-white/90 hover:bg-white border-0 shadow-lg focus-outline"
              aria-label="Piatto successivo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {menuItems.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-colors focus-outline ${
                  i === currentSlide ? 'bg-primary' : 'bg-neutral/30'
                }`}
                aria-label={`Vai al piatto ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* ---------- DOWNLOAD CTA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn btn-secondary btn-lg rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus-outline group">
            <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
            Scarica menù completo PDF
          </button>
          <p className="text-sm text-neutral/60 mt-3">
            Oltre 50 piatti tra cui scegliere per il tuo evento
          </p>
        </motion.div>
      </div>
    </section>
  );
}
