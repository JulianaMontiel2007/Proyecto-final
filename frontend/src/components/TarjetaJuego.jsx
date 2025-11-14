import React from 'react';
import '../styles/theme.css';

function TarjetaJuego({ titulo, genero, imagen }) {
  return (
    <div className="tarjeta-juego">
      <img src={imagen} alt={titulo} className="imagen-juego" />
      <h2 className="titulo-juego">{titulo}</h2>
      <p className="genero-juego">{genero}</p>
      <button className="btn-detalles">Ver detalles</button>
    </div>
  );
}

export default TarjetaJuego;