const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,    
    },
    isbn: {
        type: String,
        required: true,
    },
    imagePath: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('Book', BookSchema)

module.exports = model;