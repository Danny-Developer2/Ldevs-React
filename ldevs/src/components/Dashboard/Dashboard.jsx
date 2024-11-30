import React, { useState, useEffect } from 'react';
import { getProjects, addProject, deleteProject } from '../../services/dashboardService';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    startDate: '',
    repository: '',
    img: ''
  });

  // Cargar proyectos al montar el componente
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error al cargar los proyectos:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProject(form);
      fetchProjects(); // Recargar los proyectos
      setForm({
        name: '',
        description: '',
        startDate: '',
        repository: '',
        img: ''
      }); // Limpiar formulario
    } catch (error) {
      console.error('Error al agregar el proyecto:', error);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId);
      fetchProjects(); // Recargar los proyectos
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Nuevo Proyecto</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre del Proyecto</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Escribe el nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Descripción</label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    rows="3"
                    placeholder="Breve descripción"
                    value={form.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="repository" className="form-label">Repositorio Github</label>
                  <input
                    type="text"
                    id="repository"
                    name="repository"
                    className="form-control"
                    placeholder="Link de repositorio de Github"
                    value={form.repository}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="img" className="form-label">Imagen del proyecto</label>
                  <input
                    type="text"
                    id="img"
                    name="img"
                    className="form-control"
                    placeholder="Link de imagen del proyecto"
                    value={form.img}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="startDate" className="form-label">Fecha de Inicio</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    className="form-control"
                    value={form.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Guardar Proyecto</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Proyectos Existentes</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Fecha de Inicio</th>
                      <th>Repositorio Github</th>
                      <th>Imagen</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{project.description}</td>
                        <td>{project.startDate}</td>
                        <td>
                          <a href={project.repository} target="_blank" rel="noopener noreferrer">
                            {project.repository}
                          </a>
                        </td>
                        <td>
                          <img
                            src={project.img}
                            alt="Imagen del proyecto"
                            style={{ height: '100%', width: '100%' }}
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(project.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
