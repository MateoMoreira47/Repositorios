// Importa React para poder usar JSX
import React from 'react';

// Importa ReactDOM para renderizar componentes en el DOM
import ReactDOM from 'react-dom/client';

// Importa los estilos globales CSS
import './index.css';

// Importa el componente principal de la aplicación
import App from './App';

// Importa la función reportWebVitals para medir el rendimiento de la app
import reportWebVitals from './reportWebVitals';

// Crea la raíz del árbol de componentes React a partir del elemento con id 'root' en index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro de <React.StrictMode>, que activa verificaciones y advertencias adicionales
root.render(
  <React.StrictMode>
    <App /> {/* Muestra el componente principal de la aplicación */}
  </React.StrictMode>
);

// Llama a reportWebVitals para iniciar la medición del rendimiento de la aplicación.
// Puedes pasar una función como `console.log` o enviar los resultados a un servicio externo.
// Más info: https://bit.ly/CRA-vitals
reportWebVitals();
