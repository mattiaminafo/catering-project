'use client';

import { X, GraduationCap, MapPin, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ChefModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 btn btn-circle btn-sm bg-white/80 hover:bg-white border-0 focus-outline"
            aria-label="Chiudi modale"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-8">
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex-shrink-0">
                <Image
                  src="/images/chef.png"
                  alt="Chef Sofia"
                  width={150}
                  height={150}
                  className="rounded-full object-cover mx-auto sm:mx-0"
                />
              </div>
              
              <div className="text-center sm:text-left">
                <h3 className="text-3xl font-bold text-neutral mb-2">Chef Sofia Rossi</h3>
                <p className="text-lg text-primary font-semibold mb-4">Chef Privata & Consulente Culinaria</p>
                
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                  <span className="badge badge-primary badge-outline">Cucina Italiana</span>
                  <span className="badge badge-primary badge-outline">Fusion</span>
                  <span className="badge badge-primary badge-outline">Vegetariana</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-neutral mb-3 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                  Formazione
                </h4>
                <ul className="space-y-2 text-neutral/80">
                  <li>• Diploma presso l'Istituto Alberghiero di Milano (2010)</li>
                  <li>• Corso di specializzazione in Cucina Vegetariana - Cordon Bleu (2012)</li>
                  <li>• Master in Food Design - Accademia di Belle Arti (2014)</li>
                  <li>• Certificazione HACCP e sicurezza alimentare</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-neutral mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Esperienza Professionale
                </h4>
                <ul className="space-y-3 text-neutral/80">
                  <li>
                    <strong>2020 - Presente:</strong> Chef Privata Freelance<br />
                    <span className="text-sm">Specializzata in eventi privati e catering a domicilio</span>
                  </li>
                  <li>
                    <strong>2016 - 2020:</strong> Sous Chef - Ristorante "Il Convivio" (1 stella Michelin)<br />
                    <span className="text-sm">Responsabile della cucina vegetariana e menù degustazione</span>
                  </li>
                  <li>
                    <strong>2012 - 2016:</strong> Chef de Partie - Hotel Villa San Martino<br />
                    <span className="text-sm">Gestione eventi e banchetti per matrimoni di lusso</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-neutral mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-primary" />
                  Riconoscimenti
                </h4>
                <ul className="space-y-2 text-neutral/80">
                  <li>• Premio "Giovane Chef dell'Anno" - Gambero Rosso (2018)</li>
                  <li>• Menzione speciale "Cucina Sostenibile" - Slow Food (2019)</li>
                  <li>• Featured in "Cucina & Vini" Magazine (2021)</li>
                  <li>• 5 stelle su tutte le piattaforme di recensioni</li>
                </ul>
              </div>

              <div className="bg-accent/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-neutral mb-2">La mia filosofia</h4>
                <p className="text-neutral/80 italic">
                  "Credo che il cibo sia il linguaggio universale dell'amore. Ogni piatto che creo 
                  è pensato per raccontare una storia, evocare emozioni e creare ricordi indimenticabili. 
                  La mia missione è trasformare ogni evento in un'esperienza sensoriale unica, 
                  dove sapori autentici incontrano creatività e passione."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}