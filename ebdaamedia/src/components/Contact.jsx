import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>تواصل معنا...</h2>
          <div className="accent-line"></div>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>www.ebdaa-media.com</span>
          </div>
          <div className="contact-item">
            <i className="fab fa-whatsapp"></i>
            <span>777730311</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>02-366900</span>
          </div>
        </div>

        <div className="tagline">
          إبداع ميديا ... قم بتصميم هويتك واظهر منتجك ومشروعك إلى مستوى آخر من الإبداع حيث نقوم في إبداع ميديا بتصميم هويتك بشكل إحترافي وجديد. 
        </div>
      </div>
    </div>
  );
};

export default Contact;
