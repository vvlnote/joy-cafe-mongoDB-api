const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const ingredientRoutes = express.Router();

require('dotenv').config();

const PORT = 4000;

let Ingredient = require('./models/ingredient.model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/cafedb',  { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {console.log('MongoDB database connection established successfully')});

app.listen(PORT, () => {console.log("Server is running on Port: " + PORT);});