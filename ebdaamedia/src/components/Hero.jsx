import React from "react";
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Top colored horizontal line */}
      <div className="hero-top-line"></div>

      <div className="container hero-grid">
        <div className="hero-image">
          <img src="waterfall method-rafiki.png" alt="Waterfall Method" />
        </div>

        <div className="hero-text">
          <h2>من نحن؟</h2>
          <p>
            إبداع ميديا هي شركة متخصصة في الدعاية والإعلان والتسويق الإبداعي.
            نسعى لابتكار حلول إعلانية فعالة تبرز هوية عملائنا وتوصل رسائلهم
            بأسلوب مؤثر. بخبرة تجمع بين الاحتراف والتجديد، نقدم خدمات تشمل:
            التصميم الإعلاني، إدارة الحملات التسويقية، صناعة المحتوى البصري،
            والهوية البصرية المتكاملة. نؤمن أن لكل علامة تجارية قصة تستحق أن
            تروى بإبداع، ونحن هنا لنرويها بأفضل صورة.
          </p>
        </div>

        <div className="hero-card">
          <div className="brand-card">
            <h3>رؤيتنا</h3>
            <p>أن نكون الخيار الأول في عالم الإبداع التسويقي والتصميم.</p>
            <h3>رسالتنا</h3>
            <p>نؤمن أن كل علامة تجارية تملك قصة تستحق أن تُروى بإبداع.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
