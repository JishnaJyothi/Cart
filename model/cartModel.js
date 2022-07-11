const mongoose = require('mongoose');
const product = {
  productId: String,
  quantity: Number,
};
const cartDataSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  products: {
    required: true,
    type: [product],
  },
  date: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('CartData', cartDataSchema);
