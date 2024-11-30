import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/authService'; // Asegúrate de tener este servicio configurado
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const phrase = "Portafolio";
  
  // Actualizar el estado de autenticación y rol al cargar el componente
  useEffect(() => {
    updateAuthStatus();
  }, []);

  const updateAuthStatus = () => {
    const isAuth = AuthService.isAuthenticated();
    const userRole = AuthService.getUserRole();
    console.log(isAuth, userRole);
    setIsAuthenticated(isAuth);
    setRole(userRole);
  };

  

  const logout = () => {
    AuthService.logout(); // Cerrar sesión
    navigate('/home'); // Redirigir al inicio
    updateAuthStatus(); // Actualizar el estado después del logout
  };

  return (
    <header className="mb-auto bg-black border-bottom py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
        <img 
  src="https://cdn-images-1.medium.com/max/1200/1*6aK8dL75VLR77mVcW9BZJw.png" 
  alt="Logo-Ldevs" 
  style={{ width: '100px', height: 'auto' }} 
/>

          <Link className="navbar-brand text-primary fs-3" to="/home">
            {phrase} {/* Muestra el texto animado */}
          </Link>

          {/* Botón de menú hamburguesa */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú colapsable */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bold py-1 px-3 text-light" to="/home">Home</Link>
              </li>

              {/* Mostrar Dashboard solo si el rol es admin */}
              {role === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link fw-bold py-1 px-3 text-light" to="/admin">Dashboard</Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link fw-bold py-1 px-3 text-light" to="/ciberseguridad">Ciberseguridad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold py-1 px-3 text-light" to="/proyectos">Proyectos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold py-1 px-3 text-light" to="/contacto">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold py-1 px-3 text-light" to="/sobre-mi">Sobre mí</Link>
              </li>

              {/* Mostrar botón Logout si el usuario está autenticado */}
              {isAuthenticated && (
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-danger ms-3">Logout</button>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
