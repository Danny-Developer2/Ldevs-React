// src/toastrConfig.js
import toastr from 'toastr';

// Configuración global de Toastr
toastr.options = {
  closeButton: true,
  progressBar: true,
  positionClass: 'toast-top-right', // Ubicación de la notificación
  timeOut: 5000, // Tiempo de duración en milisegundos
  extendedTimeOut: 1000, // Tiempo adicional cuando el usuario pasa el ratón sobre la notificación
};

export default toastr;
