import React, { useState, useEffect } from 'react';
import FormularioJuego from './components/FormularioJuego';
import BibliotecaJuegos from './components/BibliotecaJuegos';
import axios from 'axios';

function App() {
  const [juegos, setJuegos] = useState([]);

  // Cargar juegos desde el backend
  useEffect(() => {
    axios.get('http://localhost:5000/juegos')
      .then(res => setJuegos(res.data))
      .catch(err => console.error(err));
  }, []);

  const agregarJuego = (nuevoJuego) => {
    axios.post('http://localhost:5000/juegos', nuevoJuego)
      .then(res => setJuegos([...juegos, res.data]))
      .catch(err => console.error(err));
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