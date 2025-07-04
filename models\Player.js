const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;