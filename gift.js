const mongoose = require('mongoose');
const giftSchema = new mongoose.Schema({
  sender:   { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount:   { type: Number, required: true }, // in coins
  valueUSD: { type: Number, default: 0 },     // optional USD value
  createdAt:{ type: Date, default: Date.now },
});

module.exports = mongoose.model('Gift', giftSchema);