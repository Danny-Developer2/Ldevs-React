import React, { useState, useEffect } from "react";
import "./Home.css";

const BackgroundWithOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  const skills = [
    { name: "PostgreSQL", img: "https://www.soyhenry.com/technologies/postgre-sql.svg" },
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "MongoDB", img: "https://www.soyhenry.com/technologies/mongo-db.svg" },
    { name: "Python", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "HTML5", img: "https://www.soyhenry.com/technologies/web.svg" },
    { name: "Next", img: "https://www.soyhenry.com/technologies/next-js.svg" }

  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Efecto dura 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-effect">
          {/* Texto de carga */}
          <h1>Loading...</h1>
          <span>Por favor, espera</span>
        </div>
      )}
        <div
          className="position-relative text-center text-white d-flex justify-content-center align-items-center"
          style={{
            backgroundImage:
              "url(https://impactolatino.com/wp-content/uploads/2023/04/Este-articulo-fue-totalment-escrito-por-inteligencia-artificial.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundBlendMode: "darken",
            height: "100vh",
            width: "100vw",
          }}
        >
          {/* Contenido principal */}
          <div
            className="position-relative contenedor-texto"
            style={{ marginTop: "-35%"}}
          >
            <h1 className="display-1">Bienvenido a LDevs</h1>
            <p className="lead" style={{ fontStyle: "oblique" }}>
              Transformando ideas en soluciones digitales.
            </p>
            <p>Tu idea, nuestra misión.</p>
          </div>

          {/* Imagen sobrepuesta */}
          <img
            src="https://i.pinimg.com/originals/04/8f/24/048f2432a46f50d0053ced22c5934aa9.png"
            alt="Overlay Robot"
            className="position-absolute overlay-image"
            style={{
              bottom: "-10%",
              left: "0",
              maxWidth: "40%",
              height: "auto",
            }}
          />

          {/* Imagen rotatoria */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/841/109/non_2x/chatgpt-logo-transparent-background-free-png.png"
            alt="ChatGPT Logo"
            className="position-absolute rotating-image"
          />
          <div className="skills-container">
            <h2 className="skills-title">Habilidades</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="skill-image"
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      
      
    </>
  );
};

export default BackgroundWithOverlay;
