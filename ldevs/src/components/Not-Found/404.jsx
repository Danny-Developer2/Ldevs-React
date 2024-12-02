import React from "react";
import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();
  const errorMessage = location.state?.errorMessage;

  return (
    <div className="bg-light d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <img
          src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"
          alt="Error 404"
          className="img-fluid mb-4"
          style={{ maxWidth: "300px", height: "auto" }}
        />
        <h1 className="display-4 fw-bold text-primary">404</h1>
        <p className="lead text-secondary">¡Ups! La página que buscas no se pudo encontrar.</p>
        <p className="text-muted">
          Es posible que la URL sea incorrecta o que la página haya sido eliminada.
        </p>
        <a href="/" className="btn btn-primary btn-lg mt-3">
          Regresar al inicio
        </a>

        {errorMessage && (
          <div className="bg-white p-4 rounded shadow-sm mt-4">
            <h5 className="text-dark">Detalles del error</h5>
            <p className="text-muted">
              Si ves esto, revisa si hay problemas en el cliente o servidor.
            </p>
            <p className="fw-bold">¿Qué hacer?</p>
            <ol className="text-start">
              <li>Verifica que la URL ingresada sea correcta.</li>
              <li>Intenta buscar la página en el menú principal.</li>
              <li>Contacta al administrador si el problema persiste.</li>
            </ol>
            <p className="fw-bold">Detalles técnicos:</p>
            <div className="bg-light p-3 rounded">
              <code>{errorMessage}</code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;
