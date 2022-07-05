const express = require('express');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

// Settings 
const { config } = require('./config/config');

// initialization
const app = express();
const server = require('http').Server(app);
const connect = require('./db');

connect(config.dbUrl);

// Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer(storage).single('image'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/api/books', require('./routes/books'));


// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
server.listen(3000, function () {
    console.log('La aplicación está escuchando en '+ config.host +':' + config.port);
}) ;