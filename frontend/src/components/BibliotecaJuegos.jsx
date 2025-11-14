import React, { useEffect, useState } from 'react';
import TarjetaJuego from './TarjetaJuego';
import axios from 'axios';
import '../styles/theme.css';

function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState([]);

  // Llamada a la API RAWG
  useEffect(() => {
    axios
      .get('https://api.rawg.io/api/games?key=ba339e99f4eb46759601eeb5f28365ee&page_size=1000')
      .then(response => {
        const datos = response.data.results.map(juego => ({
          titulo: juego.name,
          genero: juego.genres.length > 0 ? juego.genres[0].name : 'Desconocido',
          imagen: juego.background_image
        }));
        setJuegos(datos);
      })
      .catch(error => console.error('Error al obtener juegos:', error));
  }, []);

  return (
    <div className="biblioteca-container">
      <h1 className="titulo">Mi Biblioteca de Juegos</h1>

      {/* Renderizar tarjetas dinámicamente */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {juegos.map((juego, index) => (
          <TarjetaJuego
            key={index}
            titulo={juego.titulo}
            genero={juego.genero}
            imagen={juego.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default BibliotecaJuegos;