import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">تواصل معنا</h2>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
          <label>الاسم</label>
          <input placeholder="اسمك" />
          <label>الهاتف</label>
          <input placeholder="رقم الهاتف" />
          <label>الرسالة</label>
          <textarea placeholder="اكتب رسالتك" rows="4"/>
          <button className="btn btn-primary" type="submit">أرسل</button>
        </form>

        <div className="contact-info">
          <h3>الموقع</h3>
          <p>الجمهورية اليمنية - عدن - شارع التنسيـق</p>

          <h3>اتصل بنا</h3>
          <p>7777303110 / 7349008659</p>

          <h3>ساعات العمل</h3>
          <p>السبت - الخميس: 9 صباحاً - 6 مساءً</p>
        </div>
      </div>
    </section>
  );
}
