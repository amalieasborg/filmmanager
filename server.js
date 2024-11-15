const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const filmRoutes = require('./routes/filmRoutes');
const path=require('path');


require('dotenv').config();
const app = express();

//hvis jeg skriver localhost forbindes der til IPv6
mongoose.connect('mongodb://127.0.0.1:27017/filmManager', { connectTimeoutMS: 10000 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', filmRoutes);

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

//app.listen(3000, () => console.log('Server running on http://localhost:3000'));
app.listen(4000, () => console.log('Server running on http://localhost:4000'));

