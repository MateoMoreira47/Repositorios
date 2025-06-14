import React from 'react';
// Importa íconos de React, Node.js y CSS3 desde react-icons para mostrar visualmente las habilidades
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import '../css/Skills.css'; // Estilos específicos para la sección de habilidades

// Componente funcional Skills que muestra las principales tecnologías y habilidades
function Skills() {
  return (
    // Sección de habilidades con título y una cuadrícula que contiene cada habilidad con su ícono
    <section className="skills" id="habilidades">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {/* Cada div representa una habilidad con su respectivo icono y nombre */}
        <div className="skill"><FaReact /> React</div>
        <div className="skill"><FaNodeJs /> Node.js</div>
        <div className="skill"><FaCss3Alt /> CSS3</div>
      </div>
    </section>
  );
}

export default Skills; // Exporta el componente para que pueda usarse en otras partes de la aplicación
