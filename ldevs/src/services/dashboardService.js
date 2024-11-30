import axios from 'axios';

const API_BASE_URL = 'https://portafolio-backend-nodejs-production.up.railway.app/api/proyectos'; // Cambia la URL según tu configuración

/**
 * Obtiene todos los proyectos.
 * @returns {Promise} Promesa que resuelve con los proyectos.
 */
export const getProjects = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    throw error;
  }
};

/**
 * Agrega un nuevo proyecto.
 * @param {Object} project Datos del nuevo proyecto.
 * @returns {Promise} Promesa que resuelve con el proyecto agregado.
 */
export const addProject = async (project) => {
  try {
    const response = await axios.post(API_BASE_URL, project);
    return response.data;
  } catch (error) {
    console.error('Error al agregar el proyecto:', error);
    throw error;
  }
};

/**
 * Elimina un proyecto por su ID.
 * @param {number} projectId ID del proyecto a eliminar.
 * @returns {Promise} Promesa que resuelve cuando el proyecto es eliminado.
 */
export const deleteProject = async (projectId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${projectId}`);
  } catch (error) {
    console.error('Error al eliminar el proyecto:', error);
    throw error;
  }
};
