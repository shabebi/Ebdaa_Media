import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import sideImage1 from "/new-05.png";
import sideImage2 from "/new-04.png";

const ImageSlider = () => {
  const images = ["/ex1.png", "/ex2.png", "/ex3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (

    
    <div className="slider-wrapper">
  {/* Full width text at top */}
  <div className="slider-text">
    <h2>إبداع ميديا</h2>
    <p>هذه الصور أمثلة من الأعمال التي نقدمها في إبداع ميديا.</p>
    <p>
      نقدم خدمات تصميم إبداعية تشمل الصور، الفيديوهات، والحملات التسويقية
      المبتكرة لعرض أعمالك بأفضل طريقة ممكنة.
    </p>
  </div>

  {/* Content below text */}
  <div className="slider-bottom">
    {/* Side images */}
    <div className="side-images">
      <img src={sideImage1} />
      <img src={sideImage2}/>
    </div>

    {/* Image slider */}
    <div className="image-card">
      <button className="slider-btn left" onClick={prevSlide}>❯</button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slider-image"
      />
      <button className="slider-btn right" onClick={nextSlide}>❮</button>
    </div>

    <div className="side-images">
      <img src={sideImage2} />
      <img src={sideImage1}/>
    </div>

    
  </div>
</div>
  );
};

export default ImageSlider;
