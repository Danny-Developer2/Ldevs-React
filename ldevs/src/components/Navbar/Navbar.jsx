// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/authService'; // Asegúrate de tener este servicio configurado
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // Actualizar el estado de autenticación y rol al cargar el componente
  useEffect(() => {
    updateAuthStatus();
  }, []);

  const updateAuthStatus = () => {
    const isAuth = AuthService.isAuthenticated();
    const userRole = AuthService.getUserRole();

    console.log(isAuth,userRole)

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
      <div className="container text-center">
        <h3 className="mb-3 text-primary typing-effect">Portafolio</h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link className="nav-link fw-bold py-1 px-3 active text-light" to="/home">Home</Link>

          {/* Mostrar Dashboard solo si el rol es admin */}
          {role === 'admin' && (
            <Link className="nav-link fw-bold py-1 px-3 text-light" to="/admin">Dashboard</Link>
          )}

          <Link className="nav-link fw-bold py-1 px-3 text-light" to="/ciberseguridad">Ciberseguridad</Link>
          <Link className="nav-link fw-bold py-1 px-3 text-light" to="/proyectos">Proyectos</Link>
          <Link className="nav-link fw-bold py-1 px-3 text-light" to="/contacto">Contacto</Link>
          <Link className="nav-link fw-bold py-1 px-3 text-light" to="/sobre-mi">Sobre mí</Link>

          {/* Mostrar botón Logout si el usuario está autenticado */}
          {isAuthenticated && (
            <button onClick={logout} className="btn btn-danger ms-3">Logout</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
