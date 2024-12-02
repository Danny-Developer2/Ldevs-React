import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Carousel from './components/Home/Home';
import Ciberseguridad from './components/Ciberseguridad/Ciberseguridad';
import Proyectos from './components/Proyectos/Proyectos';
import ContactoForm from './components/ContactoForms/ContactoForms';
import AboutMe from './components/Sobremi/Sobremi';
import Dashboard from './components/Dashboard/Dashboard';
import LoginAdmin from './components/Login-admin/Login-admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'; // Importamos PrivateRoute
import NotFoundPage from './components/Not-Found/404';
import ServerErrorPage from './components/Server-Error/Server-error';
import ErrorComponent from './components/Test-Errors/Test-Errors';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/home" element={<Carousel />} />
        {/* Usamos PrivateRoute para proteger la ruta /admin */}
        <Route 
          path="/admin" 
          element={<PrivateRoute element={<Dashboard />} />} 
        />
        <Route path="/test-error" element={<PrivateRoute element={<ErrorComponent />} />} />
        <Route path="/ciberseguridad" element={<Ciberseguridad />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<ContactoForm />} />
        <Route path="/sobre-mi" element={<AboutMe />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/500" element={<ServerErrorPage />} />
        
        {/* Ruta comodín para redirigir a 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
