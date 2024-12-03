import { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import styles from "./TechSkills.module.css";


const BackgroundWithOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Habilidades técnicas");
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);  // Estado para manejar errores
  const [loading, setLoading] = useState(true);  // Estado para manejar carga
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Efecto dura 3 segundos
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/?page=1');
        setCharacters(response.data.results); // Almacenar los resultados en el estado
      } catch (err) {
        setError("Hubo un error al cargar los datos."); // Manejo de errores
      } finally {
        setLoading(false); // Termina el estado de carga
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <div>Cargando...</div>;  // Mensaje mientras se cargan los datos
  }

  if (error) {
    return <div>{error}</div>;  // Mensaje si ocurre un error
  }

  const tabs = [
    { label: "Habilidades técnicas", content: <TechnicalSkills /> },
    { label: "Habilidades blandas", content: <SoftSkills /> },
    { label: "Herramientas", content: <Tools /> },
  ];

 


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
          minHeight: "100vh", // Cambiado de height a minHeight
          width: "100vw",
        }}
      >
        {/* Contenido principal */}
        <div
          className="contenedor-texto-moderno position-relative text-center"
          style={{ marginTop: "10%" }}
        >
          <h1 className="titulo-neon display-1">Bienvenido a LDevs</h1>
          <p className="subtitulo-neon lead">
            Transformando ideas en soluciones digitales.
          </p>
          <p className="texto-simple">Tu idea, nuestra misión.</p>
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
        </div>
      {/* Contenido adicional debajo */}
      <section className="container my-5 seccion-2">
  <div className="text-center">
    <h2 className="mb-4">Las tecnologías que el mundo demanda</h2>
    <p className="mb-4">
      Incorpora las herramientas y tecnologías más utilizadas por las compañías.
    </p>
    <div className="mb-4">
      <select
        className="form-select w-auto mx-auto"
        value={activeTab}
        onChange={(e) => setActiveTab(e.target.value)}
      >
        {tabs.map((tab, index) => (
          <option key={index} value={tab.label}>
            {tab.label}
          </option>
        ))}
      </select>
    </div>
    <div>
      <div className="d-flex flex-wrap justify-content-center mb-3">
        {tabs.map((tab, index) => (
          <h3
            key={index}
            role="tab"
            className={`px-3 py-2 ${
              activeTab === tab.label ? "text-primary fw-bold border-bottom border-primary" : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
            style={{ cursor: "pointer" }}
          >
            {tab.label}
          </h3>
        ))}
      </div>
      <div className="text-center">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  </div>
</section>

<section className="container my-5">
      <div className="text-center mb-4">
        <h2 className="mb-3">Galería de Imágenes</h2>
        <p>Descubre algunas de las imágenes más impactantes de Rick and Morty.</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {characters.map((character, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm border-light rounded-3">
              <img
                src={character.image}
                alt={character.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Estado: {character.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>



    </>
  );
};
const TechnicalSkills = () => (
  <div className={styles.skillsTab}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="Logo de HTML5" />
  <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Logo de Redux" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo de React" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Logo de Next.js" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="Logo de PostgreSQL" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Logo de Node.js" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Logo de TypeScript" />
  <img src="https://avatars.githubusercontent.com/u/7552965?s=200&v=4" alt="Logo de Mongoose" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Logo de Docker" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="Logo de MongoDB"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="logo de Angular" />
</div>
);
const skills = [
  'Comunicación',
  'Resolución de problemas',
  'Gestión del tiempo',
  'Adaptabilidad',
  'Autonomía',
  'Trabajo en equipo',
];

const SoftSkills = () => (
  
<div className="my-4 d-flex flex-column align-items-center justify-content-center">
  <p className="mb-3 fw-bold text-center">Contenido relacionado con habilidades blandas:</p>
  <div className="d-flex flex-wrap gap-2 justify-content-center">
    {skills.map((skill, index) => (
      <span
        key={index}
        className="badge bg-light text-dark shadow-sm py-2 px-3 rounded-pill"
        style={{ fontSize: '14px' }}
      >
        {skill}
      </span>
    ))}
  </div>
</div>


);

const tools = [
  {
    name: 'Slack',
    img: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
  },
  {
    name: 'Trello',
    img: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
  },
  {
    name: 'Chat GPT',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  },
  {
    name: 'Git',
    img: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
  },
  {
    name: 'Github',
    img: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
  },
  {
    name: 'Jira',
    img: 'https://cdn.worldvectorlogo.com/logos/jira-3.svg',
  },
];

const Tools = () => (
  <div className="my-4">
  <p className="mb-3 fw-bold text-center">Contenido relacionado con herramientas:</p>
  <div className="d-flex flex-wrap justify-content-center gap-4">
    {tools.map((tool, index) => (
      <div
        key={index}
        className="d-flex flex-column align-items-center text-center p-3 border rounded-3 shadow-sm"
        style={{ maxWidth: '150px' }}
      >
        <img
          src={tool.img}
          alt={`logo de ${tool.name}`}
          className="img-fluid mb-2"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <span className="fs-6 fw-bold">{tool.name}</span>
      </div>
    ))}
  </div>
</div>

);

export default BackgroundWithOverlay;
