// src/components/ContactoForm.jsx
import React, { useState } from "react";
import { enviarCorreo } from "../../services/contactoService"; // Importa el servicio
import "./ContactoFroms.css"; // Mantén los estilos personalizados

const ContactoForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    emailAddress: "",
    numeroTelefono: "",
    subject: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validaciones del formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es obligatorio";
    if (!formData.emailAddress.trim() || !/\S+@\S+\.\S+/.test(formData.emailAddress))
      newErrors.emailAddress = "Correo inválido";
    if (!formData.numeroTelefono.trim() || !/^\d{10}$/.test(formData.numeroTelefono))
      newErrors.numeroTelefono = "Número de teléfono inválido";
    if (!formData.subject.trim()) newErrors.subject = "El asunto es obligatorio";
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Maneja cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await enviarCorreo(formData); // Llama al servicio
      alert("Correo enviado exitosamente!");
      setFormData({
        nombre: "",
        apellido: "",
        emailAddress: "",
        numeroTelefono: "",
        subject: "",
        mensaje: "",
      });
    } catch (error) {
      alert("Hubo un error al enviar el correo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="container col-md-12">
        <div className="image-container">
          <img
            className="Foto-formulario"
            src="https://landing-8ggtrytqo-danny-developer2s-projects.vercel.app/_next/image/?url=%2Fservices.png&w=828&q=75"
            alt="Foto-Formulario"
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <h3>Request a Demo</h3>
          <p className="blue-text">
            Just answer a few questions <br /> so that we can personalize the
            right experience for you.
          </p>
          <div className="card">
            <h5 className="text-center mb-4">Powering world-class companies</h5>
            <form onSubmit={handleSubmit}>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3" htmlFor="nombre">
                    Nombre <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    placeholder="Enter your first name"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  {errors.nombre && (
                    <small className="text-danger">{errors.nombre}</small>
                  )}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3" htmlFor="apellido">
                    Apellido <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    className="form-control"
                    placeholder="Enter your last name"
                    value={formData.apellido}
                    onChange={handleChange}
                  />
                  {errors.apellido && (
                    <small className="text-danger">{errors.apellido}</small>
                  )}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3" htmlFor="emailAddress">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                  {errors.emailAddress && (
                    <small className="text-danger">{errors.emailAddress}</small>
                  )}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3" htmlFor="numeroTelefono">
                    Número Teléfono <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    id="numeroTelefono"
                    name="numeroTelefono"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={formData.numeroTelefono}
                    onChange={handleChange}
                  />
                  {errors.numeroTelefono && (
                    <small className="text-danger">{errors.numeroTelefono}</small>
                  )}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3" htmlFor="subject">
                    Asunto <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Enter your job title"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <small className="text-danger">{errors.subject}</small>
                  )}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-12 flex-column d-flex">
                  <label className="form-control-label px-3" htmlFor="mensaje">
                    Mensaje <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="form-control"
                    rows="4"
                    placeholder="Enter your message"
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>
                  {errors.mensaje && (
                    <small className="text-danger">{errors.mensaje}</small>
                  )}
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="flex-column d-flex form-group col-sm-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Request a demo"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-block"
                    onClick={() =>
                      setFormData({
                        nombre: "",
                        apellido: "",
                        emailAddress: "",
                        numeroTelefono: "",
                        subject: "",
                        mensaje: "",
                      })
                    }
                  >
                    Reset Formulario
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoForm;
