import React from 'react';
import { motion } from 'framer-motion'; // Para animaciones suaves en los proyectos
import '../css/Portfolio.css'; // Estilos específicos para esta sección
import GitHub from '../assents/proyecto1.png'; // Imagen del primer proyecto
import GitLab from '../assents/proyecto2.png';  // Imagen del segundo proyecto

// Array de objetos que define los proyectos a mostrar en el portafolio
const projects = [
  {
    title: 'GitHub',
    description: 'Link directo a GitHub',
    image: GitHub,
    link: 'https://github.com/MateoMoreira47',
  },
  {
    title: 'Proyecto 2',
    description: 'Link directo a GitLab',
    image: GitLab,
    link: 'https://gitlab.com/MateoMoreira47',
  },
];

// Componente funcional que muestra la sección de portafolio con proyectos
function Portfolio() {
  return (
    // Sección principal del portafolio con título y lista de proyectos
    <section className="portfolio" id="portafolio">
      <h2>Portafolio</h2>
      <div className="projects">
        {/* Mapeo sobre el array projects para generar tarjetas con info de cada proyecto */}
        {projects.map((proj, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }} // Efecto zoom al pasar el cursor
          >
            {/* Imagen del proyecto */}
            <img src={proj.image} alt={proj.title} />
            {/* Título y descripción */}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {/* Enlace externo que abre el proyecto en nueva pestaña */}
            <a href={proj.link} target="_blank" rel="noopener noreferrer">Ir...</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio; // Exporta el componente para usar en otras partes de la app
