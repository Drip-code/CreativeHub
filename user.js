const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username:  { type: String, required: true, unique: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  avatar:    { type: String, default: null },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  balanceUSD: { type: Number, default: 0 }, // From gift conversions
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

avatar: { type: String, default: '' },