const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

// initialization
const app = express();

// settings
const port = process.env.PORT || 3001;

// Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer(storage).single('image'));
app.use(express.urlencoded({ extended: true}));
app.use(express.join());

// Start the server
app.listen(port, () => {
    console.log(`API listening on localhost:${port}`)
})