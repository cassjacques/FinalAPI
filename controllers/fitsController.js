const db = require('../models');

const index =  (req, res) => {
    res.send('<h1>fit index />')
};

const show =  (req, res) => {
    res.send('<h1>fit show />')
};

const create =  (req, res) => {
    res.send('<h1>fit create />')
};

const update =  (req, res) => {
    res.send('<h1>fit update />')
};

const destroy =  (req, res) => {
    res.send('<h1>fit destroy />')
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};