import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap si aún no lo has hecho

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white py-2">
      <div className="row">
        <div className="col-md-6">
          <p>&copy; 2017–2024 Company, Inc.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <p><a href="/" className="text-white text-decoration-none">Back to top</a></p>
        </div>
      </div>
      
      {/* Enlaces de privacidad y términos */}
      <div className="row">
        <div className="col-md-12 text-center text-md-start">
          <p>
            <a href="/" className="text-white text-decoration-none">Privacy</a> · 
            <a href="/" className="text-white text-decoration-none">Terms</a> ·
            <a href="/" className="text-white text-decoration-none">Cookie Policy</a>
          </p>
        </div>
      </div>
    
      {/* Redes sociales (opcional) */}
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            <a href="/" className="text-white me-3"><i className="bi bi-facebook"></i> Facebook</a>
            <a href="/" className="text-white me-3"><i className="bi bi-twitter"></i> Twitter</a>
            <a href="/" className="text-white me-3"><i className="bi bi-linkedin"></i> LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
