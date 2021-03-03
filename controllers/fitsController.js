const db = require('../models');

const index =  (req, res) => {
    db.Fit.find({}, (err, allFits) => {
        if (err) return console.log(err);
        res.json(allFits);
    });
};

const show =  (req, res) => {
    res.send('<h1>fit show</h1>')
};

const create =  (req, res) => {
    res.send('<h1>fit create</h1>')
};

const update =  (req, res) => {
    res.send('<h1>fit update</h1>')
};

const destroy =  (req, res) => {
    res.send('<h1>fit destroy</h1>')
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};