'use server';

import { Resend } from 'resend';

export async function submitLead(formData) {
  try {
    // DEBUG: Verifica se l'API key esiste
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined!');
      return { 
        success: false, 
        error: 'Configurazione email non trovata. Contattami direttamente.' 
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const leadData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      eventDate: formData.get('eventDate'),
      guests: formData.get('guests'),
      eventType: formData.get('eventType') || '',
      notes: formData.get('notes') || '',
    };

    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.phone || !leadData.eventDate || !leadData.guests) {
      return { success: false, error: 'Tutti i campi obbligatori devono essere compilati.' };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadData.email)) {
      return { success: false, error: 'Inserisci un indirizzo email valido.' };
    }

    // Date validation (must be in the future)
    const eventDate = new Date(leadData.eventDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (eventDate < today) {
      return { success: false, error: 'La data dell\'evento deve essere futura.' };
    }

    // Format date for display
    const formattedDate = eventDate.toLocaleDateString('it-IT', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send email to chef
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #B85C38 0%, #8C3B24 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Nuova Richiesta di Preventivo</h1>
        </div>
        
        <div style="padding: 30px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #B85C38; margin-top: 0;">Dettagli Cliente</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">Nome:</td>
                <td style="padding: 10px 0; color: #666;">${leadData.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 10px 0; color: #666;">${leadData.email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">Telefono:</td>
                <td style="padding: 10px 0; color: #666;">${leadData.phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">Data Evento:</td>
                <td style="padding: 10px 0; color: #666;">${formattedDate}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">Numero Ospiti:</td>
                <td style="padding: 10px 0; color: #666;">${leadData.guests}</td>
              </tr>
              ${leadData.eventType ? `
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #333;">Tipo Evento:</td>
                <td style="padding: 10px 0; color: #666;">${leadData.eventType}</td>
              </tr>
              ` : ''}
            </table>
            
            ${leadData.notes ? `
            <h3 style="color: #B85C38; margin-top: 25px; margin-bottom: 10px;">Note Aggiuntive</h3>
            <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; border-left: 4px solid #B85C38;">
              <p style="margin: 0; color: #666; line-height: 1.5;">${leadData.notes}</p>
            </div>
            ` : ''}
          </div>
        </div>
        
        <div style="background-color: #333; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">Chef a Domicilio - Sistema di Preventivi</p>
        </div>
      </div>
    `;

    console.log('Attempting to send email...');

    // QUESTO È IL FIX: aspetta il risultato e gestisci la risposta
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['damamma.net@gmail.com'],
      subject: `Nuova richiesta preventivo - ${leadData.name} (${formattedDate})`,
      html: emailHtml,
      replyTo: leadData.email,
    });

    // Logga il risultato per debug
    console.log('Resend result:', result);

    // Controlla se c'è stato un errore
    if (result.error) {
      console.error('Resend error:', result.error);
      return { 
        success: false, 
        error: 'Errore durante l\'invio della richiesta. Riprova più tardi.' 
      };
    }

    console.log('Email sent successfully with ID:', result.data?.id);
    return { success: true };

  } catch (error) {
    console.error('Error sending lead email:', error);
    return { 
      success: false, 
      error: 'Errore durante l\'invio della richiesta. Riprova più tardi o contattami direttamente.' 
    };
  }
}