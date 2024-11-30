import React from 'react';
import './Sobremi.css'

const AboutMe = () => {
  const downloadCV = () => {
    window.open("https://drive.google.com/uc?export=download&id=1i66yW9qxEmj2RGFC2woloZJ2A2NHhpDI", "_blank");
  };

  return (
    <div className="full-container">
      <div className="row w-100">
        {/* Contenedor de texto a la izquierda */}
        <div className="col-md-6 text-container h-100">
          <h3 className="typing-effect">Sobre mí</h3>
          <h2>Ciberseguridad</h2>
          <p>
            Hackthebox<br />
            Licenciatura en Ciberseguridad en FCFM UANL como especialista en ciberseguridad protege sistemas y redes de amenazas cibernéticas. Se encarga de implementar medidas de seguridad, monitorear redes, realizar pruebas de penetración y responder a incidentes para asegurar la integridad y confidencialidad de los datos.
          </p>
          <h2>Frontend Developer</h2>
          <p>
            Practicas<br />
            Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.
          </p>
          <button className="container col-8 btn btn-secondary" onClick={downloadCV}>
            Descargar CV
          </button>
        </div>

        {/* Contenedor de imagen a la derecha */}
        <div className="col-md-6 image-container">
          {/* Círculo naranja de fondo */}
          <div className="circle"></div>
          <img src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-professional-web-developer-3d-illustration-png-image_13322705.png" alt="Imagen" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
