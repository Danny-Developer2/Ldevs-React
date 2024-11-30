import axios from 'axios';

const getProyectos = async () => {
  try {
    const response = await axios.get('http://localhost:5258/proyectos');
    return response.data; // Regresa los datos de los proyectos
  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    throw error; // Lanzamos el error para manejarlo en el componente
  }
};

export default { getProyectos };
