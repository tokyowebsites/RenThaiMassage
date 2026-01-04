import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Booking } from './components/Booking';
import { Promotions } from './components/Promotions';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <Booking />
        <Promotions />
        <Location />
      </main>

      <Footer />
    </div>
  );
}