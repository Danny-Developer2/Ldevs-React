import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://digitalnestweb.com/wp-content/uploads/2022/10/Desarrollo-Web-FrontEnd.png",
    "https://bambu-mobile.com/wp-content/uploads/2024/08/Diferencia-entre-desarrollo-front-end-y-back-end.jpg",
    "https://www.starkcloud.com/hubfs/Imported_Blog_Media/Que-es-Ciberseguridad.webp"
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="myCarousel" className="carousel slide mb-6 w-100" data-bs-ride="carousel">
      {/* Indicadores */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={index}
            className={activeIndex === index ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carrusel */}
      <div className="carousel-inner">
  {images.map((image, index) => (
    <div className={`carousel-item ${activeIndex === index ? "active" : ""}`} key={index}>
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className="d-block vh-100" // Asegura que la imagen ocupe el 100% del ancho
        style={{ 
          objectFit: 'cover',  // Asegura que la imagen cubra el área sin distorsión
          height: 'auto',      // Mantiene la altura proporcional al ancho
          width: '100%',    // Mantiene la anchura proporcional al alto
        }}
      />
    </div>
  ))}
</div>


      {/* Controles */}
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
