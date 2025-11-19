import React, { useState, useEffect } from 'react';
import FormularioJuego from './components/FormularioJuego';
import BibliotecaJuegos from './components/BibliotecaJuegos';
import axios from 'axios';
import './styles/theme.css';

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
    <div className="biblioteca-container">
      <h1 className="titulo">Mi Biblioteca de Juegos</h1>
      <p className="descripcion">Agrega tus juegos favoritos y explora la lista</p>
      <FormularioJuego onAgregarJuego={agregarJuego} />
      <div className="lista-juegos">
        {juegos.map((juego, index) => (
          <div key={index} className="tarjeta-juego">
            <img src={juego.imagen || 'https://via.placeholder.com/150'} alt={juego.titulo} className="imagen-juego" />
            <h3 className="titulo-juego">{juego.titulo}</h3>
            <p className="genero-juego">{juego.genero}</p>
            <button className="btn-detalles">Ver detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
//no hay cambios