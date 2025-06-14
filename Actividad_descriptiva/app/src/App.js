// Importa React y el hook useState desde la librería de React
import React, { useState } from 'react';

// Importa los estilos CSS para la aplicación
import './css/App.css';

// Importa los distintos componentes que componen la aplicación
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Componente principal de la aplicación
function App() {
  // Hook de estado para controlar qué sección se está visualizando
  const [section, setSection] = useState('inicio');

  // Función que renderiza dinámicamente el componente correspondiente según la sección actual
  const renderSection = () => {
    switch (section) {
      case 'inicio':
        return <Home />;            // Muestra la sección de inicio
      case 'sobremi':
        return <About />;           // Muestra la sección "Sobre mí"
      case 'portafolio':
        return <Portfolio />;       // Muestra la sección de portafolio
      case 'habilidades':
        return <Skills />;          // Muestra la sección de habilidades
      case 'contacto':
        return <Contact />;         // Muestra la sección de contacto
      default:
        return <Home />;            // Por defecto muestra la sección de inicio
    }
  };

  // Renderizado del componente App
  return (
    <div className="App">
      {/* Navbar recibe la función setSection para cambiar la sección al hacer clic en un enlace */}
      <Navbar setSection={setSection} />
      
      {/* Renderiza dinámicamente la sección seleccionada */}
      {renderSection()}
    </div>
  );
}

// Exporta el componente App como exportación por defecto
export default App;
