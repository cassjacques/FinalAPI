const mongoose = require('mongoose');

const fitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    fitName: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    birthday: {
        type: Date,
    },
}, {timestamps: true});

const Fit = mongoose.model('Fit', fitSchema);

module.exports = Fit;