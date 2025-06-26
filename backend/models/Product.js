const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: [{ type: String }],
  category: { type: String },
  stock: { type: Number, default: 0 },
  ratings: { type: Number, default: 0 },
  reviews: [{ user: String, comment: String, rating: Number }],
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
