// Importa React para poder usar JSX y definir componentes
import React from 'react';

// Importa el componente 'motion' desde la librería framer-motion para aplicar animaciones
import { motion } from 'framer-motion';

// Importa el archivo de estilos CSS específico para esta sección
import '../css/About.css';

// Componente funcional About que representa la sección "Sobre mí"
function About() {
  return (
    // Sección animada que aparece con una transición de opacidad al entrar en pantalla
    <motion.section
      className="about"         // Clase CSS para estilos personalizados
      id="sobremi"              // ID para navegación o anclaje
      initial={{ opacity: 0 }}  // Estado inicial invisible
      whileInView={{ opacity: 1 }}  // Se vuelve visible al aparecer en el viewport
      transition={{ duration: 1 }}  // Duración de la animación (1 segundo)
    >
      {/* Título de la sección */}
      <h2>Sobre mí</h2>

      {/* Párrafo con descripción del perfil profesional, experiencia y habilidades */}
      <p>
        Soy un desarrollador web con experiencia en la creación de aplicaciones modernas utilizando React, Node.js y otras tecnologías del ecosistema JavaScript. Mi enfoque se centra en construir soluciones eficientes, escalables y con un diseño responsive que garantice una excelente experiencia de usuario en cualquier dispositivo.

        Mi pasión por la tecnología comenzó desde joven, cuando creaba pequeños scripts para automatizar tareas en casa. Con el tiempo, esa curiosidad se convirtió en vocación. Me formé de manera autodidacta y académica, y he trabajado tanto en proyectos personales como colaborativos, lo que me ha permitido desarrollar habilidades en trabajo en equipo, metodologías ágiles, control de versiones con Git y consumo de APIs RESTful.

        He participado en el desarrollo de plataformas de e-commerce, dashboards administrativos, portales educativos y aplicaciones en tiempo real usando WebSockets. También tengo experiencia integrando bases de datos como PostgreSQL y MongoDB, además de trabajar con herramientas de despliegue como Docker y servicios en la nube.
      </p>
    </motion.section>
  );
}

// Exporta el componente About para que pueda ser usado en otros archivos (como App.js)
export default About;
