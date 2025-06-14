// Importa React para poder utilizar JSX
import React from 'react';

// Importa los estilos específicos de esta sección
import '../css/Contact.css';

// Componente funcional que representa la sección de contacto del portafolio
function Contact() {
  return (
    // Sección de contacto con título y un formulario visual (sin funcionalidad de envío)
    <section className="contact" id="contacto">

      {/* Título de la sección */}
      <h2>Contacto</h2>

      {/* Formulario de contacto con campos de nombre, email y mensaje */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Tu mensaje"
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

// Exporta el componente para que pueda ser utilizado en otros archivos como App.js
export default Contact;
