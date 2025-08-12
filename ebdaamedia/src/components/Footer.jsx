import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} إبداع ميديا</div>
        <div className="socials">
          <a href="#" aria-label="facebook">فيسبوك</a>
          <a href="#" aria-label="instagram">إنستغرام</a>
        </div>
      </div>
    </footer>
  );
}
