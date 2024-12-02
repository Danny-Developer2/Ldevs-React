import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ErrorComponent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Usar useNavigate para redirección

  const handleError = async (errorCode) => {
    try {
      const response = await axios.get(`https://portafolio-backend-nodejs-production.up.railway.app/api/buggy/${errorCode}`);
    } catch (error) {
      setErrorMessage(`Error ${errorCode}: ${error.message}`);
    

      // Redirigir a la ruta correspondiente en función del error
      if (errorCode === "not-found") {
        navigate("/404"); // Redirigir a /404
      } else if (errorCode === "server-error") {
        navigate("/500", {
          state: {
            errorDetails: {
              message: error.response.data.message || "No se proporcionó un mensaje de error.",
              stack: error.response.data.stack || "Sin detalles del stack.",
            },
          },
        });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <button onClick={() => handleError("not-found")} className="btn btn-outline-primary mr-3">Test 404 Error</button>
      <button onClick={() => handleError("bad-request")} className="btn btn-outline-primary mr-3">Test 400 Error</button>
      <button onClick={() => handleError("server-error")} className="btn btn-outline-primary mr-3">Test 500 Error</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default ErrorComponent;
