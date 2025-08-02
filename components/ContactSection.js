'use client';

import { motion } from 'framer-motion';
import { Calendar, Mail, MapPin, Phone, Send, Users } from 'lucide-react';
import { useState } from 'react';
import { submitLead } from '../actions/sendLead';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    
    try {
      const result = await submitLead(formData);
      
      if (result.success) {
        setShowToast(true);
        // Reset form
        const form = document.getElementById('contact-form');
        if (form) form.reset();
        
        setTimeout(() => setShowToast(false), 5000);
      } else {
        alert(result.error || 'Errore durante l\'invio. Riprova più tardi.');
      }
    } catch (error) {
      alert('Errore durante l\'invio. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary/10 via-base-100 to-accent/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">
            Richiedi un preventivo
          </h2>
          <p className="text-xl text-neutral/70 max-w-3xl mx-auto">
            Raccontami il tuo evento e creerò un menù perfetto per te. 
            Ti risponderò entro 24 ore con un preventivo dettagliato.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <form id="contact-form" action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-neutral">Nome completo *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="input input-bordered w-full bg-base-50 border-2 focus:border-primary focus-outline"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-neutral">Email *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="input input-bordered w-full bg-base-50 border-2 focus:border-primary focus-outline"
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-neutral">Telefono *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="input input-bordered w-full bg-base-50 border-2 focus:border-primary focus-outline"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-neutral">Data evento *</span>
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      className="input input-bordered w-full bg-base-50 border-2 focus:border-primary focus-outline"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-neutral">Numero di ospiti *</span>
                  </label>
                  <select
                    name="guests"
                    required
                    className="select select-bordered w-full bg-base-50 border-2 focus:border-primary focus-outline"
                  >
                    <option value="">Seleziona il numero di ospiti</option>
                    <option value="2-5">2-5 persone</option>
                    <option value="6-10">6-10 persone</option>
                    <option value="11-20">11-20 persone</option>
                    <option value="21-30">21-30 persone</option>
                    <option value="31-50">31-50 persone</option>
                    <option value="50+">Più di 50 persone</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-neutral">Tipo di evento</span>
                  </label>
                  <select
                    name="eventType"
                    className="select select-bordered w-full bg-base-50 border-2 focus:border-primary focus-outline"
                  >
                    <option value="">Seleziona il tipo di evento</option>
                    <option value="compleanno">Compleanno</option>
                    <option value="romantico">Cena romantica</option>
                    <option value="aziendale">Evento aziendale</option>
                    <option value="matrimonio">Matrimonio</option>
                    <option value="anniversario">Anniversario</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-neutral">Note aggiuntive</span>
                  </label>
                  <textarea
                    name="notes"
                    className="textarea textarea-bordered h-32 w-full bg-base-50 border-2 focus:border-primary focus-outline resize-none"
                    placeholder="Raccontami di più sul tuo evento: preferenze culinarie, allergie, richieste speciali..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg w-full rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus-outline group"
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Invia richiesta preventivo
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-neutral mb-6">Informazioni di contatto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral">Telefono</p>
                    <p className="text-neutral/70">+39 328 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral">Email</p>
                    <p className="text-neutral/70">sofia@chef-domicilio.it</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral">Zona di servizio</p>
                    <p className="text-neutral/70">Milano e provincia (50km)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-neutral mb-4">Tempi di risposta</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  <span className="text-neutral/80">Preventivi: entro 24 ore</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary mr-3" />
                  <span className="text-neutral/80">Disponibilità: 6 giorni su 7</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Pronto per iniziare?</h4>
              <p className="mb-4 text-white/90">
                Ogni evento merita di essere speciale. Contattami per trasformare 
                la tua idea in un'esperienza culinaria indimenticabile.
              </p>
              <p className="text-accent font-semibold">
                Consultazione iniziale sempre gratuita!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success shadow-lg">
            <div>
              <span className="font-semibold">Richiesta inviata con successo!</span>
              <div className="text-sm opacity-80">Ti risponderò entro 24 ore.</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}