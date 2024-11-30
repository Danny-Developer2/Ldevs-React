import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/authAdminService'; // Importa tu servicio de autenticación
import "./Login-admin.css"

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await AuthService.login(username, password);
      if (user) {
        const role = AuthService.getUserRole();
        if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'user') {
          navigate('/home');
        } else {
          setErrorMessage('Unauthorized: Admins only');
          navigate('/unauthorized');
        }
      } else {
        setErrorMessage('Invalid credentials: Verifica el nombre de usuario o contraseña');
        setTimeout(() => setErrorMessage(''), 3000);
      }
    } catch (error) {
      setErrorMessage('Error de autenticación');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-admin-container">
  <div className="login-admin-wrapper">
    {/* Imagen a un lado */}
    <div className="login-admin-image">
      <img
        src="https://landing-8ggtrytqo-danny-developer2s-projects.vercel.app/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.f37cd02d.png&w=1920&q=75"
        alt="Sign In"
      />
    </div>
    {/* Formulario */}
    <div className="login-admin-form">
      <div className="login-admin-header">
        <h3>Sign In</h3>
        <div className="login-admin-social-icons">
          <span><i className="fab fa-facebook-square"></i></span>
          <span><i className="fab fa-google-plus-square"></i></span>
          <span><i className="fab fa-twitter-square"></i></span>
        </div>
      </div>
      <div className="login-admin-body">
        <form onSubmit={onSubmit}>
          <div className="login-admin-input-group">
            <label htmlFor="username">Username</label>
            <div className="login-admin-input-wrapper">
              <span><i className="fas fa-user"></i></span>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login-admin-input-group">
            <label htmlFor="password">Password</label>
            <div className="login-admin-input-wrapper">
              <span><i className="fas fa-key"></i></span>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            {errorMessage && (
              <div className="login-admin-error">
                {errorMessage}
              </div>
            )}
          </div>
          <div className="login-admin-checkbox">
            <input
              type="checkbox"
              id="rememberMe"
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className="login-admin-button-wrapper">
            <button
              type="submit"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
      <div className="login-admin-footer">
        <div>
          Don't have an account? <a href="/">Sign Up</a>
        </div>
        <div>
          <a href="/">Forgot your password?</a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default LoginAdmin;
