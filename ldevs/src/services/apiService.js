import axios from 'axios';

// Crear una instancia de axios para configuraciones globales
const api = axios.create({
  baseURL: 'http://localhost:5258',  // Base URL para todas las peticiones
  headers: {
    'Content-Type': 'application/json',
  },
});

// Servicio para obtener los logros
export const getAchievements = async () => {
  try {
    const response = await api.get('/Hackthebox');
    return response.data;  // Retornar los datos obtenidos
  } catch (error) {
    console.error('Error al obtener los datos', error);
    throw error;  // Lanza el error para ser manejado en el componente
  }
};
