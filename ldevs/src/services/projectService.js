import axios from 'axios';

// Definir la función para obtener los proyectos
const getProyectos = async () => {
  try {
    const response = await axios.get('portafolio-backend-nodejs-production.up.railway.app/api/proyectos');
    return response.data; // Regresa los datos de los proyectos
  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    throw error; // Lanzamos el error para manejarlo en el componente
  }
};

// Asignar el objeto a una variable antes de exportarlo
const proyectoService = {
  getProyectos
};

export default proyectoService;
