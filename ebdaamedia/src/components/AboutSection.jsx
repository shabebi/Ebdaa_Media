import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-top-line"></div>
      
      <div className="about-grid">
        <div className="about-left">
          <div className="feature-card">
            <h2>الأثرة والسرعة</h2>
            <p>
              إضافة إلى الجودة المالية للتي نحرص على أي تقدم 
              بها دعمتها، فإننا نحرص أيضاً على إجاز كافة المشروعات 
              في أقل وقت ممكن. وتسليمها لمماثلة في المواعد المتقن عليها.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>الجودة المالية</h2>
            <p>
              لمتقدم في بطي ميديا على استخدام أحدث اللوائح 
              وأدوة أنواع الخاصة في تقديم خدماتنا معايضي 
              لمماثلة لتحقيق على الخدمات التي يمتلكون إليها 
              باعلى جودة ممكنة.
            </p>
          </div>
        </div>
        
        <div className="about-right">
          <h2>ما يجعل إيداع ميديا الأفضل ...</h2>
          <h3>الخبرة الواسعة</h3>
          <p>
            تتمتع إيداع ميديا شركة حملة وإعلان بخبرة واسعة متعد 
            لمعيد من السنوات. عملت خلافة أعلى تنفيذ عديد من 
            المشروعات بإجازاته عليك، مختلفة من حسب ثقة عملية كثير.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;