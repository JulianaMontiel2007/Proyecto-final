import React, { useState } from 'react';
import FormularioJuego from './components/FormularioJuego';
import BibliotecaJuegos from './components/BibliotecaJuegos';

function App() {
  const [juegos, setJuegos] = useState([]);

  const agregarJuego = (nuevoJuego) => {
    setJuegos([...juegos, nuevoJuego]);
  };

  return (
    <div>
      <h1>Mi Biblioteca de Juegos</h1>
      <FormularioJuego onAgregarJuego={agregarJuego} />
      <BibliotecaJuegos juegos={juegos} />
    </div>
  );
}

export default App;