// src/services/contactoService.js
import axios from "axios";

const API_URL = "http://localhost:5258/Email/send"; // Cambia esto según tu endpoint

export const enviarCorreo = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data; // Retorna la respuesta del backend
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw error; // Propaga el error para manejarlo en el componente
  }
};
