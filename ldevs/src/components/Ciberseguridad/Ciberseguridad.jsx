import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAchievements } from '../../services/apiService';  // Importa el servicio
import './Ciberseguridad.css';  // Asegúrate de tener tus estilos de CSS

const Ciberseguridad = () => {
  const [achievements, setAchievements] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  // useEffect para consumir el endpoint usando el servicio
  useEffect(() => {
    // Registrar evento de navegación
    console.log('Ciberseguridad Component Re-loaded');
    
    // Llamada al servicio para obtener los logros
    getAchievements()
      .then(data => {
        setAchievements(data); // Actualizar el estado con los datos obtenidos
      })
      .catch(err => {
        setError('Error al obtener los logros.');  // Manejo del error
      });
  }, [location]); // Dependencia en location, se ejecutará al cambiar la URL

  return (
    <div className="container marketing">
      {error && <div className="alert alert-danger">{error}</div>} {/* Mostrar mensaje de error */}
      {achievements.map((achievement, index) => (
        <div key={index} className="row featurette">
          <hr className="featurette-divider" />
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              {achievement.title} <span className="text-body-secondary">{achievement.nombre}</span>
            </h2>
            <p className="lead">{achievement.description}</p>
            <a href={achievement.linkCertificado} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Ver Certificado
            </a>
          </div>
          <div className="col-md-5">
            <img 
              src={achievement.img} 
              alt={achievement.title} 
              className="featurette-image img-fluid mx-auto" 
              width="200" 
              height="250"
            />
          </div>
          <hr className="featurette-divider" />
        </div>
      ))}
    </div>
  );
};

export default Ciberseguridad;
