import React from 'react';
import { motion } from 'framer-motion'; // Librería para animaciones
import '../css/Home.css';
import fotoPerfil from '../assents/foto-perfil.jpg'; // Imagen de perfil

// Componente que representa la sección de inicio del portafolio
function Home() {
  return (
    // Sección animada que muestra un mensaje de bienvenida y una imagen de perfil
    <motion.section
      className="home"
      id="inicio"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Título de bienvenida y descripción */}
      <h1>¡Hola!, Soy Mateo Moreira Miranda</h1>
      <p>Esta es mi primer aplicacion desarrollada con react</p>

      {/* Imagen de perfil del desarrollador */}
      <img src={fotoPerfil} alt="Tu Foto" className="profile-img" />
    </motion.section>
  );
}

export default Home; // Exporta el componente para su uso en otros archivos
