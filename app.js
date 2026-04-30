const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');

const app = express();

// DB CONNECT
mongoose.connect('mongodb://127.0.0.1:27017/labExam');

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// VIEW ENGINE
app.set('view engine', 'ejs');

// ROUTES
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(courseRoutes);
app.use(userRoutes);

// SERVER
app.listen(3000, () => {
    console.log('Server running on port 3000');
});