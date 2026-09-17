import React from "react";
import Navbar from "./Navbar";
import Contacto from "./Contacto";
import HeroSection from "./HeroSection";
import WhyUsSection from "./PorqueNova";
import PlansSection from "./PlansSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Hero() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <PlansSection />
      <TestimonialsSection />
      <Contacto />
    </>
  );
}
