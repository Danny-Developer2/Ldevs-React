import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la redirección

// Crear una instancia de Axios
const axiosInstance = axios.create({
  baseURL: "https://portafolio-backend-nodejs-production.up.railway.app/", // URL base de la API
  timeout: 10000, // Tiempo de espera por defecto para las solicitudes
});

// Interceptor de respuesta para manejar diferentes códigos de error
axiosInstance.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa (status 2xx), simplemente la devolvemos
    return response;
  },
  (error) => {
    // Usamos useNavigate para redirigir
    const navigate = useNavigate();

    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx

      switch (error.response.status) {
        case 400:
          console.error("Solicitud incorrecta (400)");
          break;
        case 401:
          console.error("No autorizado (401)");
          break;
        case 403:
          console.error("Prohibido (403)");
          break;
        case 404:
          console.error("No encontrado (404)");
          // Redirigir a una página de "Página no encontrada"
          navigate("/404"); // Asegúrate de tener una ruta /not-found
          break;
          case 500:
            navigate("/500", {
              state: {
                errorDetails: {
                  message: error.response.data.message || "No se proporcionó un mensaje de error.",
                  stack: error.response.data.stack || "Sin detalles del stack.",
                },
              },
            });
            break;
          
        default:
          console.error("Error desconocido");
          break;
      }
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor");
    } else {
      console.error("Error en la configuración de la solicitud:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
