import React, { useEffect, useRef } from "react";
import "./Services.css";

const services = [
  {
    title: "تصميم الهوية البصرية",
    desc: "حلول متكاملة للشعار، اختيار الألوان، والنمط البصري لتعزيز حضور علامتك.",
    color: "#d25545",
    img: "/service1.png"
  },
  {
    title: "تصميم الإعلانات",
    desc: "مواد إعلانية رقمية ومطبوعة عالية الجودة تجذب الجمهور وتحقق التفاعل.",
    color: "#18a281",
    img: "/service2.png"
  },
  {
    title: "إدارة الحملات",
    desc: "تخطيط وتنفيذ حملات فعالة على المنصات المختلفة مع قياس الأداء.",
    color: "#f1b964",
    img: "/service3.png"
  },
  {
    title: "صناعة المحتوى البصري",
    desc: "محتوى بصري مبتكر (صور، فيديوهات، أنيميشن) يعبر عن هوية العلامة.",
    color: "#22acc6",
    img: "/service4.jpg"
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const activeRef = useRef(false); // true only when section is in view

  useEffect(() => {
    const section = sectionRef.current;
    const scroller = cardsRef.current;
    if (!section || !scroller) return;

    // Smooth programmatic scrolling + better snap feel
    scroller.style.scrollBehavior = "smooth";

    // Mark section active when mostly in view
    const io = new IntersectionObserver(
      ([entry]) => {
        activeRef.current = entry.isIntersecting && entry.intersectionRatio > 0.6;
      },
      { threshold: [0.6] }
    );
    io.observe(section);

    // Convert vertical wheel to horizontal while active and not at edges
    const onWheel = (e) => {
      if (!activeRef.current) return;

      const atStart = scroller.scrollLeft <= 0;
      const atEnd =
        Math.ceil(scroller.scrollLeft + scroller.clientWidth) >= scroller.scrollWidth;

      const forward = e.deltaY > 0; // scrolling down

      // While not at the edge in that direction, prevent vertical scroll and move sideways
      if ((forward && !atEnd) || (!forward && !atStart)) {
        e.preventDefault();
        scroller.scrollBy({ left: e.deltaY, behavior: "smooth" });
      }
      // If at the edge and trying to go further, we don't preventDefault -> page resumes vertical scroll
    };

    // Important: passive:false so preventDefault actually works
    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      io.disconnect();
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="services container">
      <h2 className="section-title">خدماتنا</h2>
      {/* dir="ltr" keeps scrollLeft math consistent even if the page is RTL */}
      <div className="cards" ref={cardsRef} dir="ltr">
        {services.map((s) => (
          <article className="card" key={s.title} style={{ borderTopColor: s.color }}>
            <div className="card-content">
              <div className="text-section">
                <div className="card-icon" style={{ background: s.color }} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="image-section">
                <img src={s.img} alt={s.title} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
