const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Modelo
const Juego = require('./models/Juego');

// Rutas
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Obtener todos los juegos
app.get('/juegos', async (req, res) => {
  try {
    const juegos = await Juego.find();
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo juego
app.post('/juegos', async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    await nuevoJuego.save();
    res.status(201).json(nuevoJuego);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un juego
app.put('/juegos/:id', async (req, res) => {
  try {
    const juegoActualizado = await Juego.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!juegoActualizado) {
      return res.status(404).json({ error: 'Juego no encontrado' });
    }
    res.json(juegoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un juego
app.delete('/juegos/:id', async (req, res) => {
  try {
    const juegoEliminado = await Juego.findByIdAndDelete(req.params.id);
    if (!juegoEliminado) {
      return res.status(404).json({ error: 'Juego no encontrado' });
    }
    res.json({ mensaje: 'Juego eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
