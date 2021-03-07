const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 4020
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Final Project</h1>')
});

app.use('/api/v1/fits', routes.fits);
app.use('/api/v1/soss', routes.soss);
app.use('/api/v1/users', routes.users);
app.use('/api/v1/auth', routes.auth);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));