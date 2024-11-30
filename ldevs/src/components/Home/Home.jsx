import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap si aún no lo has hecho

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para manejar el slide activo

  const images = [
    "https://digitalnestweb.com/wp-content/uploads/2022/10/Desarrollo-Web-FrontEnd.png",
    "https://bambu-mobile.com/wp-content/uploads/2024/08/Diferencia-entre-desarrollo-front-end-y-back-end.jpg",
    "https://www.starkcloud.com/hubfs/Imported_Blog_Media/Que-es-Ciberseguridad.webp"
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length); // Avanzar al siguiente slide
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Retroceder al slide anterior
  };

  return (
    <div id="myCarousel" className="carousel slide mb-6 vh-100" data-bs-ride="carousel">
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
      <div className="carousel-inner vh-100">
        {images.map((image, index) => (
          <div className={`carousel-item ${activeIndex === index ? "active" : ""}`} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="d-block w-100 carousel-image" />
          </div>
        ))}
      </div>

      {/* Controles */}
      <button className="carousel-control-prev" type="button" onClick={handlePrev} data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext} data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
