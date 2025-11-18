
import React, { useState } from 'react';
import FormularioJuego from './components/FormularioJuego';
import './styles/theme.css';

function App() {
  const [juegos, setJuegos] = useState([]);

  const agregarJuego = (nuevoJuego) => {
    setJuegos([...juegos, nuevoJuego]);
  };

  return (
    <div>
      <h1>Gestión de Juegos</h1>
      <FormularioJuego onAgregarJuego={agregarJuego} />
      <div className="lista-juegos">
        {juegos.map((juego, index) => (
          <div key={index} className="tarjeta-juego">
            <h3>{juego.titulo}</h3>
            <p>{juego.genero}</p>
            {juego.imagen && <img src={juego.imagen} alt={juego.titulo} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
