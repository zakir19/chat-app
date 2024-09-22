import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import Testimonials from "./sections/Testimonials.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      
      gsap.fromTo(section,
        { 
          x: `${100 * direction}%`,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <main className="overflow-hidden">
      <Header />
      <section><Hero /></section>
      <section><Features /></section>
      <section><Pricing /></section>
      <section><Faq /></section>
      <section><Testimonials /></section>
      <section><Download /></section>
      <Footer />
    </main>
  );
};

export default App;