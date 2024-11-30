import React, { useEffect, useState } from 'react';
import projectService from '../../services/projectService';
import './Proyectos.css';

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  // Cargar los proyectos al montar el componente
  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const data = await projectService.getProyectos();
        setProyectos(data); // Almacena los proyectos en el estado
      } catch (error) {
        console.error('Error al obtener los proyectos:', error);
      }
    };

    fetchProyectos(); // Llamada a la función que obtiene los proyectos
  }, []); // El array vacío significa que solo se ejecutará una vez al montar el componente

  return (
    <div className="proyectos-container" style={{ marginTop: '5%' }}>
      <div className="proyectos-row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
        {/* Iterar sobre los proyectos */}
        {proyectos.map((proyecto) => (
          <div className="proyectos-col" key={proyecto.id}>
            <div className="proyectos-card h-100 shadow-sm border-light">
              <img
                src={proyecto.img || 'https://via.placeholder.com/150'}
                className="proyectos-card-img-top"
                alt="Imagen del proyecto"
                height="200"
                width="100%"
                style={{ objectFit: 'cover' }}
              />
              <div className="proyectos-card-body d-flex flex-column">
                <h5 className="proyectos-card-title">{proyecto.name}</h5>
                <p className="proyectos-card-text">{proyecto.description}</p>
                <p className="proyectos-card-text mb-2 mt-auto">
                  <strong>Fecha de inicio:</strong> {proyecto.startDate}
                </p>
                {proyecto.repository && (
                  <a href={proyecto.repository} className="btn btn-primary mt-2">
                    Ver repositorio
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
