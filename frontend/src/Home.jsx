import React from "react";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

export default function Home(){
  return (
    <>
      <Hero />
      <main className="container">
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
