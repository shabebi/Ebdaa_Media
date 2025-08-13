import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-line"></div>
      
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="footer-logo">إبداع</span>
            <span className="footer-name">ميديا </span>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </div>
        </div>
        
        <div className="footer-middle">
          <div className="footer-tagline">
            إنجاح البحث من بين "نحاكي الإبداع" وتصنع التأثير لإنجاح ميديا للخطة والعلى والتسويق الإبداعي
          </div>
        </div>
        
        <div className="footer-right">
          <div className="socials">
            <a href="#" aria-label="facebook" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span>فيسبوك</span>
            </a>
            <a href="#" aria-label="instagram" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>إنستغرام</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}