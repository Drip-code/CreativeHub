const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  user:     { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  filename: { type: String, required: true },
  caption:  { type: String, required: true },
  music:    { type: String, default: null },
  likes:    [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', videoSchema);