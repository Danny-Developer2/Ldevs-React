import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap si aún no lo has hecho

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white py-4">
    <div className="row d-flex justify-content-between align-items-center">
      <div className="col-12 col-md-6 text-center text-md-end">
      </div>
    </div>
  
    <hr className="my-4" style={{ borderTop: '1px solid #fff' }} />
  
    <div className="row">
    <div className="col-12 text-center">
      <p>Contact us: <a href="mailto:contact@ldevs.com" className="text-white text-decoration-none">daniel.luevanoui@uanl.edu.mx</a></p>
      <p>Phone: <a href="tel:+1234567890" className="text-white text-decoration-none">+52 (812) 598-6680</a></p>
    </div>
  </div>
  
    <div className="row">
      <div className="col-12 text-center ">
        <p>
          <a href="https://www.facebook.com/profile.php?id=61561237214590" className="text-white me-3"><i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i> Facebook</a>
          <a href="https://github.com/Danny-Developer2" className="text-white me-3"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i> Git Hub</a>
          <a href="https://www.linkedin.com/in/juan-daniel-luevano-ruiz-9b7a24175/" className="text-white me-3"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i> LinkedIn</a>
          
        </p>
      </div>
    </div>
  
    {/* Coloca el texto abajo a la derecha */}
    <div className="row">
      <div className="col-12 d-flex justify-content-end align-items-end">
        <div className="text-end">
          <p>&copy; 2023–2024 Ldevs Company, Inc.</p>
          <p>All rights reserved.</p>
          <p>
          <a href="/" className="text-white text-decoration-none">Privacy</a> · 
          <a href="/" className="text-white text-decoration-none">Terms</a> ·
          <a href="/" className="text-white text-decoration-none">Cookie Policy</a>
        </p>
        </div>
      </div>
      
    </div>
  </footer>
  
  
  );
};

export default Footer;
