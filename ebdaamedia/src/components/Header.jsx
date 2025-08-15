import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ footerRef }) {
  const [imgPosition, setImgPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    const handleScroll = () => {
      if (!footerRef.current) return;

      const scrollTop = window.scrollY;
      const footerTop = footerRef.current.getBoundingClientRect().top + window.scrollY;
      const maxScroll = footerTop - window.innerHeight;
      const progress = Math.min(scrollTop / maxScroll, 1);

      // Different behavior for mobile and desktop
      if (isMobile) {
        // For mobile: move from 0% to 100% (but CSS will limit actual movement)
        setImgPosition(progress * 100);
      } else {
        // For desktop: keep your original large movement
        setImgPosition(progress * 850);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [footerRef, isMobile]);

  return (
    <header className={`header ${isMobile ? 'mobile' : ''}`}>
      <nav>
        <ul>
          <li><a href="#hero">من نحن؟</a></li>
          <li><a href="#services">خدماتنا</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
        </ul>
      </nav>
      <img
        src="ebdaa_slider-06.jpg"
        alt="Logo"
        className="header-logo"
        style={{ transform: `translateX(${imgPosition}%)` }}
      />
    </header>
  );
}