import React from "react";
import { useLocation } from "react-router-dom";

const ServerErrorPage = () => {
  const location = useLocation();
  const errorDetails = location.state?.errorDetails;

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
      {/* Encabezado de error */}
      <h1 className="text-danger">500 - Internal Server Error</h1>
      <p className="text-muted">Refreshing the page might resolve the issue!</p>

      {errorDetails ? (
        <div className="bg-white p-4 rounded shadow-sm">
          <h5 className="text-dark">Error: {errorDetails.message}</h5>
          <p className="text-muted">
            Estamos trabajando para solucionarlo. Intenta más tarde.
          </p>
          <p className="fw-bold">Detalles del error:</p>
          <div className="bg-light p-3 rounded text-start">
            <code>{errorDetails.stack}</code>
          </div>
        </div>
      ) : (
        <p className="text-muted">No se encontraron detalles adicionales del error.</p>
      )}
    </div>
  );
};

export default ServerErrorPage;
