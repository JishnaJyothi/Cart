const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  userName: {
    required: true,
    type: String,
    unique: true,
  },
  email: {
    required: false,
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model('UserData', userDataSchema);
