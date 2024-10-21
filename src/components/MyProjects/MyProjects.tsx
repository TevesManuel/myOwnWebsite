import React, { useState } from "react";
import "./MyProjects.css";

const MyProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slides: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="projectsMainContainer">
      <div className="projectsContainer">
        <div className="slider">
          <div
            className="slides-container"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentIndex ? 'focus' : ''}`}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default MyProjects;
