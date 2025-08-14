import React from "react";
import './Footer.css';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
            ابداع ميديا .. تقدم لكم الكثير من الخدمات لمساعدتكم في إظهار منتجاتكم او مشاريعكم بشكل يرقى لمستوى خدمات 
عملائها
          </div>
        </div>
        


        <div className="footer-right">
          <div className="socials">
            <a 
              href="https://www.facebook.com/share/16S8oEcweL/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="facebook" 
              className="social-link"
            >
              <FaFacebookF className="social-icon" />
              <span>فيسبوك</span>
            </a>

            <a 
              href="https://www.instagram.com/ebdaamedia2025/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="instagram" 
              className="social-link"
            >
              <FaInstagram className="social-icon" />
              <span>إنستغرام</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}