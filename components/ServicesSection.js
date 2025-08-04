'use client';

import { motion } from 'framer-motion';
import {
  Cake,
  Heart,
  Briefcase,
  Clock,
  Users,
  Utensils,
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image'; // ← AGGIUNTO IMPORT
import ServiceModal from './ServiceModal';

/* ---------- DATI SERVIZI ---------- */
const services = [
  {
    id: 'birthdays',
    icon: Cake,
    title: 'Compleanni & Feste',
    description:
      'Trasforma il compleanno in un evento indimenticabile con menù personalizzati per ogni età.',
    features: [
      'Menù per bambini e adulti',
      'Torte personalizzate',
      'Animazione culinaria',
    ],
    price: 'A partire da €20 a persona',
    image: '/images/menu6.png',
  },
  {
    id: 'romantic',
    icon: Heart,
    title: 'Cene Romantiche',
    description:
      "Crea l'atmosfera perfetta per momenti speciali con un servizio elegante e discreto.",
    features: [
      'Servizio ai tavoli',
      'Menù afrodisiaci',
      'Mise en place romantica',
 
    ],
    price: 'A partire da €30 a persona',
    image: '/images/menu4.JPG',
  },
  {
    id: 'corporate',
    icon: Briefcase,
    title: 'Eventi Aziendali',
    description:
      'Impressiona clienti e colleghi con un catering professionale di alta qualità.',
    features: [
      'Business lunch',
      'Aperitivi aziendali',
      'Team building culinari',
      'Menù vegetariani/vegani',
    ],
    price: 'A partire da €40 a persona',
    image: '/images/menu9.png',
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section-padding bg-base-200">
      <div className="container-custom">
        {/* ---------- HEADER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">
            I miei servizi
          </h2>
          <p className="text-xl text-neutral/70 max-w-3xl mx-auto">
            Ogni evento è unico. Scelgo personalmente ogni ingrediente e creo
            menù su misura per rendere la tua occasione speciale davvero
            indimenticabile.
          </p>
        </motion.div>

        {/* ---------- CARD GRID ---------- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* immagine */}
                <figure className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </figure>

                {/* corpo card */}
                <div className="card-body p-6">
                  <h3 className="card-title text-xl font-bold text-neutral mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-primary">
                      {service.price}
                    </span>
                    <button className="btn btn-primary btn-sm rounded-full focus-outline">
                      Dettagli
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ---------- INFO BOXES ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 mt-16 shadow-xl"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoBox icon={Clock} title="Servizio completo" text="Dalla spesa alla pulizia finale" />
            <InfoBox icon={Users} title="Qualsiasi numero" text="Da 2 a 100 persone" />
            <InfoBox icon={Utensils} title="Attrezzature incluse" text="Stoviglie e mise en place" />
            <InfoBox icon={Heart} title="Su misura" text="Menù personalizzati sempre" />
          </div>
        </motion.div>
      </div>

      {/* ---------- MODALE ---------- */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}

/* ---------- COMPONENTE INFO BOX ---------- */
function InfoBox({ icon: Icon, title, text }) {
  return (
    <div className="text-center">
      <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
        <Icon className="w-8 h-8 text-primary mx-auto" />
      </div>
      <h4 className="font-bold text-neutral mb-2">{title}</h4>
      <p className="text-sm text-neutral/70">{text}</p>
    </div>
  );
}