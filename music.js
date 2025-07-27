const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  title:     { type: String, required: true },
  artist:    { type: String, required: true },
  filename:  { type: String, required: true },  // Path to audio file
  genre:     { type: String },
  uploadedBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional for user-added music
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Music', musicSchema);