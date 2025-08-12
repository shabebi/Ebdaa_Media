import React from "react";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h2>نبذة تعريفية</h2>
          <p>
            إبداع ميديا هي شركة متخصصة في الدعاية والإعلان والتسويق الإبداعي.
            نسعى لابتكار حلول إعلانية فعالة تبرز هوية عملائنا وتوصل رسائلهم
            بأسلوب مؤثر. بخبرة تجمع بين الاحتراف والتجديد، نقدم خدمات تشمل:
            التصميم الإعلاني، إدارة الحملات التسويقية، صناعة المحتوى البصري،
            والهوية البصرية المتكاملة. نؤمن أن لكل علامة تجارية قصة تستحق أن
            تروى بإبداع، ونحن هنا لنرويها بأفضل صورة.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">اطلب عرض</a>
            <a href="#services" className="btn btn-outline">تعرف على خدماتنا</a>
          </div>
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
