import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BackgroundWithOverlay = () => {
  const backgroundImage = "https://impactolatino.com/wp-content/uploads/2023/04/Este-articulo-fue-totalment-escrito-por-inteligencia-artificial.jpg";
  const overlayImage = "https://i.pinimg.com/originals/04/8f/24/048f2432a46f50d0053ced22c5934aa9.png";
  const rotatingImage = "https://static.vecteezy.com/system/resources/previews/022/841/109/non_2x/chatgpt-logo-transparent-background-free-png.png";

  return (
    <div
      className="position-relative text-center text-white d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'darken',
        height: '100vh',
        width: '100vw',
      }}
    >
      {/* Contenedor del texto centrado */}
      <div className="position-relative contenedor-texto" style={{ marginTop: '-30%' }}>
        {/* Texto de bienvenida */}
        <h1 className="display-1">Bienvenido a LDevs</h1>
        <p className="lead" style={{ fontStyle: 'oblique' }}>
          Transformando ideas en soluciones digitales.
        </p>
        <p>Tu idea, nuestra misión.</p>
      </div>

      {/* Imagen sobrepuesta solo para pantallas grandes */}
      <img
        src={overlayImage}
        alt="Overlay Robot"
        className="position-absolute overlay-image"
        style={{
          bottom: '-10%',
          left: '0',
          maxWidth: '40%',
          height: 'auto',
        }}
      />

      {/* Imagen rotatoria */}
      <img
        src={rotatingImage}
        alt="ChatGPT Logo"
        className="position-absolute"
        style={{
          bottom: '16%',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: '20%',
          animation: 'rotate 5s infinite linear',
        }}
      />

     

      {/* Estilo para la animación */}
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: translateX(-50%) rotate(0deg);
            }
            100% {
              transform: translateX(-50%) rotate(360deg);
            }
          }

          /* Media query para dispositivos móviles */
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }

            p {
              font-size: 1.2rem;
            }

            .rotating-image {
              max-width: 40%;
              bottom: 20%;
            }

            /* Ocultar imagen de robot en pantallas pequeñas */
            .overlay-image {
              display: none;
            }

            /* Ocultar imagen al lado del texto en pantallas pequeñas */
            .side-image {
              display: none;
            }
          }

          /* Media query para pantallas muy pequeñas (375x667 o menos) */
          @media (max-width: 375px) {
            h1 {
              font-size: 1.3rem;  /* Texto más pequeño */
            }

            p {
              font-size: 1rem;    /* Texto más pequeño */
            }

            .rotating-image {
              max-width: 50%;
              bottom: 25%;
            }

            .overlay-image {
              display: none;
            }

            .side-image {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundWithOverlay;
