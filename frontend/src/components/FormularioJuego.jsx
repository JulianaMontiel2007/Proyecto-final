import React, { useState } from 'react';

function FormularioJuego({ onAgregarJuego }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [imagen, setImagen] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevoJuego = { titulo, genero, imagen };
    onAgregarJuego(nuevoJuego);
    setTitulo('');
    setGenero('');
    setImagen('');
  };

  return (
    <form className="formulario-juego" onSubmit={manejarSubmit}>
      <h2>Agregar Juego</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Género"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL de imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioJuego;