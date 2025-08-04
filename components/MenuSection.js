'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image'; // ← AGGIUNTO IMPORT

/* ---------- DATA ---------- */
const menuItems = [
  {
    id: 1,
    name: 'Pasta Frolla Salata',
    description:
      'Cestini di pasta frolla salata ripieni di crema pasticcera salata e concasse di verdure.',
    image: '/images/menu1.JPG',
    category: 'Primi Piatti',
  },
  {
    id: 2,
    name: 'Polpette Ricotta e Limone',
    description:
      'coni di bambù con polpette di ricotta e limone, polpette di melanzane, polpette di manzo al cacao.',
    image: '/images/menu2.JPG',
    category: 'Secondi Piatti',
  },
  {
    id: 3,
    name: 'Pizza Bianca al Gel di Limone',
    description:
      'pizza bianca al gel di limone ricotta mozzarella di bufala e menta',
    image: '/images/menu3.JPG',
    category: 'Dolci',
  },
  {
    id: 4,
    name: 'Mix di Pizze al Gel e Focaccia Barese',
    description:
      'Pizze bianche e finger food',
    image: '/images/menu4.JPG',
    category: 'Antipasti',
  },
  {
    id: 5,
    name: 'Torta Demetra',
    description:
      'Torta Demetra a base di patate , prosciutto e verdure',
    image: '/images/menu5.JPG',
    category: 'Secondi Piatti',
  },
  {
    id: 6,
    name: 'Insalata di Polipo',
    description:
      'Insalata di polipo versione finger food',
    image: '/images/menu6.png',
    category: 'Primi Piatti',
  },
  {
    id: 7,
    name: 'Yo-Yo alle arachidi',
    description:
      'Un mignon di dolci',
    image: '/images/menu9.png',
    category: 'Antipasti',
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
              {menuItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  {/* Slide ─ image height drives card height */}
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative md:w-1/2 max-h-[650px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0} // Solo la prima immagine ha priority
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
      </div>
    </section>
  );
}