const AuthService = {
  // Datos simulados de usuarios
  users: [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' },
  ],

  // Verificar si el entorno es un navegador
  isBrowser: () => {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  },

  // Método para iniciar sesión
  login: (username, password) => {
    if (!AuthService.isBrowser()) {
      console.error('LocalStorage no está disponible.');
      return null;
    }

    // Buscar el usuario en los datos simulados
    const user = AuthService.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Guardar datos del usuario en localStorage
      localStorage.setItem('authToken', JSON.stringify({ username: user.username, role: user.role }));
      return user; // Retornar datos del usuario
    }

    console.warn('Credenciales inválidas.');
    return null; // Retornar null si las credenciales no son válidas
  },

  // Verificar si el usuario está autenticado
  isAuthenticated: () => {
    if (AuthService.isBrowser()) {
      const token = localStorage.getItem('authToken');
      return token !== null;
    }
    return false;
  },

  // Obtener el rol del usuario autenticado
  getUserRole: () => {
    if (AuthService.isBrowser()) {
      const token = localStorage.getItem('authToken');
      if (token) {
        const user = JSON.parse(token);
        return user.role;
      }
    }
    return null; // Si no estamos en el navegador o no hay token
  },

  // Cerrar sesión
  logout: () => {
    if (AuthService.isBrowser()) {
      localStorage.removeItem('authToken');
    }
  },

  // Obtener información completa del usuario autenticado
  getCurrentUser: () => {
    if (AuthService.isBrowser()) {
      const token = localStorage.getItem('authToken');
      return token ? JSON.parse(token) : null;
    }
    return null;
  },
};

export { AuthService };
