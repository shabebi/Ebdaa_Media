import React, { useRef } from "react";
import Header from "./components/Header";
import VideoSection from "./components/VideoSection";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const footerRef = useRef(null);

  return (
    <div>
      <Header footerRef={footerRef} />
      <VideoSection />
      <Hero />         
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
}
