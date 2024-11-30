const AuthService = {
    // Método de inicio de sesión simulado
    login: async (username, password) => {
      // Simulación de llamada a la API
      if (username === 'admin' && password === 'admin123') {
        // Guardamos el usuario y el rol completo en el localStorage
        const user = { username, role: 'admin' };
        localStorage.setItem('authToken', JSON.stringify(user)); // Guardamos un token con el username y el rol
        return user;
      } else if (username === 'user' && password === 'user123') {
        const user = { username, role: 'user' };
        localStorage.setItem('authToken', JSON.stringify(user)); // Guardamos un token con el username y el rol
        return user;
      }
      return null; // Retorna null si las credenciales no son válidas
    },
  
    // Obtener el rol del usuario desde el localStorage
    getUserRole: () => {
      const user = localStorage.getItem('authToken');
      if (user) {
        return JSON.parse(user).role; // Extrae el rol del objeto guardado
      }
      return null; // Si no hay token, retorna null
    },
  
    // Verificar si el usuario está autenticado
    isAuthenticated: () => {
      const user = localStorage.getItem('authToken');
      return user !== null; // Retorna true si existe el token
    },
  
    // Obtener el usuario actual
    getCurrentUser: () => {
      const user = localStorage.getItem('authToken');
      if (user) {
        return JSON.parse(user); // Retorna el usuario completo si existe
      }
      return null; // Si no hay token, retorna null
    },
  
    // Cerrar sesión
    logout: () => {
      localStorage.removeItem('authToken'); // Eliminar el token
    }
  };
  
  export default AuthService;
  