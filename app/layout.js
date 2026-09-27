import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import Loader from './components/Loader';

export const metadata = {
  title: 'Emerald Haven',
  description: 'Experience luxury safari cottages in Udawalawa, Sri Lanka. Rated 9.7/10 Exceptional. Family rooms with private bathrooms, outdoor pool, restaurant, and unforgettable safari experiences near Udawalawa National Park.',
  keywords: 'Udawalawa hotel, safari cottages, Sri Lanka accommodation, Udawalawa National Park, luxury cottages, safari lodge, wildlife hotel, Emerald Haven',
  authors: [{ name: 'Emerald Haven' }],
  openGraph: {
    title: 'Emerald Haven',
    description: 'Premium safari cottages rated 9.7/10 Exceptional. Located 16km from Udawalawa National Park with outdoor pool, restaurant, and world-class facilities.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Emerald Haven',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerald Haven Safari Cottages',
    description: 'Premium safari cottages in Udawalawa, Sri Lanka. Rated 9.7/10 Exceptional.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
