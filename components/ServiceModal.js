'use client';

import { X, Check, Clock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceModal({ service, isOpen, onClose }) {
  if (!service || !isOpen) return null;

  const scrollToContact = () => {
    onClose();
    // aspetta la chiusura dell’animazione prima di scorrere
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const IconComponent = service.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        >
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 btn btn-circle btn-sm bg-white/90 hover:bg-white border-0 focus-outline"
            aria-label="Chiudi modale"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid md:grid-cols-2">
            {/* immagine */}
            <div className="relative h-64 md:h-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>

            {/* testo */}
            <div className="p-8 overflow-y-auto max-h-[60vh] md:max-h-none">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral">
                  {service.title}
                </h3>
              </div>

              <p className="text-neutral/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* features */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-neutral mb-3">
                  Cosa include:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-neutral/80"
                    >
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* extra info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-base-200 rounded-2xl p-4 text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-neutral">Durata</p>
                  <p className="text-xs text-neutral/60">3-6 ore</p>
                </div>
                <div className="bg-base-200 rounded-2xl p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-neutral">Ospiti</p>
                  <p className="text-xs text-neutral/60">2-50 persone</p>
                </div>
              </div>

              {/* prezzo */}
              <div className="bg-accent/10 rounded-2xl p-4 mb-6">
                <p className="text-lg font-bold text-primary mb-1">
                  {service.price}
                </p>
                <p className="text-sm text-neutral/70">
                  Il prezzo finale dipende dal menù scelto e dal numero di
                  ospiti.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={scrollToContact}
                  className="btn btn-primary flex-1 rounded-full font-semibold focus-outline"
                >
                  Richiedi preventivo
                </button>
                <button
                  onClick={onClose}
                  className="btn btn-ghost flex-1 rounded-full focus-outline"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
