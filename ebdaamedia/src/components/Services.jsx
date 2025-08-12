import React from "react";

const services = [
  {
    title: "تصميم الهوية البصرية",
    desc:
      "حلول متكاملة للشعار، اختيار الألوان، والنمط البصري لتعزيز حضور علامتك.",
    color: "#d25545"
  },
  {
    title: "تصميم الإعلانات",
    desc:
      "مواد إعلانية رقمية ومطبوعة عالية الجودة تجذب الجمهور وتحقق التفاعل.",
    color: "#22acc6"
  },
  {
    title: "إدارة الحملات",
    desc:
      "تخطيط وتنفيذ حملات فعالة على المنصات المختلفة مع قياس الأداء.",
    color: "#f1b964"
  },
  {
    title: "صناعة المحتوى البصري",
    desc:
      "محتوى بصري مبتكر (صور، فيديوهات، أنيميشن) يعبر عن هوية العلامة.",
    color: "#18a281"
  }
];

export default function Services() {
  return (
    <section id="services" className="services container">
      <h2 className="section-title">خدماتنا</h2>
      <div className="cards">
        {services.map((s) => (
          <article className="card" key={s.title} style={{ borderTopColor: s.color }}>
            <div className="card-icon" style={{ background: s.color }} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a className="card-link" href="#contact">اطلب الخدمة →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
