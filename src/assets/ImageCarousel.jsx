import { useState, useEffect, useRef } from "react";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const images = [
    "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/NavCrousalImg1.jpg?raw=true",
    "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/NavCrousalImg2.jpg?raw=true",
    "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/NavCrousalImg3.jpg?raw=true",
    "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/NavCrousalImg4.jpg?raw=true",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const slideInterval = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide(); // Prevent multiple intervals
    slideInterval.current = setInterval(() => {
      handleNext();
    }, 3000); // Auto-slide every 3 seconds
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
    stopAutoSlide();
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    setTranslateX(currentX - startX);
  };

  const handleDragEnd = () => {
    if (Math.abs(translateX) > 50) {
      if (translateX > 0) handlePrev(); // Swipe right
      else handleNext(); // Swipe left
    }
    setIsDragging(false);
    setTranslateX(0);
    startAutoSlide();
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(${-currentIndex * 100 + translateX / 10}%)`,
          transition: isDragging ? "none" : "transform 0.5s ease",
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {images.map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
