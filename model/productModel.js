const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  productName: {
    required: true,
    type: String,
    unique: true,
  },
  quantity: {
    required: false,
    type: Number,
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

module.exports = mongoose.model('Data', dataSchema);
