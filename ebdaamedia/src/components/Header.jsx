import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ footerRef }) {
  const [imgPosition, setImgPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const scrollTop = window.scrollY;
      const footerTop = footerRef.current.getBoundingClientRect().top + window.scrollY;
      const maxScroll = footerTop - window.innerHeight;

      // Calculate percentage of scroll until footer
      const progress = Math.min(scrollTop / maxScroll, 1);

      // Move image from left (0%) to right (100%)
      setImgPosition(progress * 1300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerRef]);

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#hero">من نحن؟</a></li>
          <li><a href="#services">خدماتنا</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
        </ul>
      </nav>
      <img
        src="/ebdaa_slider-06.jpg"
        alt="Logo"
        className="header-logo"
        style={{ transform: `translateX(${imgPosition}%)` }}
      />
    </header>
  );
}
