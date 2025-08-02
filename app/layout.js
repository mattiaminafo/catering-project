import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chef a Domicilio | Il ristorante a casa tua',
  description: 'Esperienza gastronomica unica con chef privata. Menù personalizzati, materie prime locali, servizio curato nei dettagli per eventi indimenticabili.',
  keywords: 'chef domicilio, catering casa, chef privata, eventi privati, cene romantiche, compleanni, menù personalizzati',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" data-theme="chef">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}