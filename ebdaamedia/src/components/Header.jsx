import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img
            src="/logo.png" 
            alt="Company Logo"
            className="logo-mark"
            />
          <div>
            <h1>إبداع ميديا</h1>
            <p className="tagline">حلول إعلانية و تسويق إبداعي</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#services">خدماتنا</a>
          <a href="#about">نبذة</a>
          <a href="#contact" className="cta">تواصل معنا</a>
        </nav>
      </div>
    </header>
  );
}
