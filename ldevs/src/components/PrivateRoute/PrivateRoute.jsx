// src/components/PrivateRoute/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthService } from '../../services/authService';  // Asegúrate de importar el servicio de autenticación

const PrivateRoute = ({ element, ...rest }) => {
  const role = AuthService.getUserRole();
  const isAuthenticated = AuthService.isAuthenticated();

  // Si no está autenticado o el rol no es 'admin', redirige al login
  if (!isAuthenticated || role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado y tiene el rol de 'admin', muestra el componente solicitado
  return element;
};

export default PrivateRoute;
