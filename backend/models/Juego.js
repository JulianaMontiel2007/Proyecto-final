const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  imagen: { type: String }
});

module.exports = mongoose.model('Juego', juegoSchema);