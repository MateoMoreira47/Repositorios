import React from 'react';
import '../css/Navbar.css';

// Componente funcional Navbar que recibe la función setSection como prop
// para cambiar la sección visible en la aplicación al hacer clic en los botones
function Navbar({ setSection }) {
  return (
    // Barra de navegación principal con estilo CSS personalizado
    <nav className="navbar">
      <ul>
        {/* Lista de botones que al hacer clic llaman a setSection para cambiar la vista */}
        <li><button onClick={() => setSection('inicio')}>Inicio</button></li>
        <li><button onClick={() => setSection('sobremi')}>Sobre mí</button></li>
        <li><button onClick={() => setSection('portafolio')}>Portafolio</button></li>
        <li><button onClick={() => setSection('habilidades')}>Habilidades</button></li>
        <li><button onClick={() => setSection('contacto')}>Contacto</button></li>
      </ul>
    </nav>
  );
}

export default Navbar; // Exporta el componente para uso en otros archivos
