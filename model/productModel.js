const mongoose = require('mongoose');

const productDataSchema = new mongoose.Schema({
  productName: {
    required: true,
    type: String,
    unique: true,
  },
  price: {
    required: true,
    type: Number,
  },
  description: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('ProductData', productDataSchema);
