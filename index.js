require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});
const app = express();

app.use(express.json());
app.use('/api', routes);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(expressValidator()); //this line to be addded

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
