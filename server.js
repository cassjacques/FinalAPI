const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000
const routes = require('./routes');

app.get('/', (req, res) => {
    res.send('<h1>Final Project</h1>')
});

app.use('/api/v1/fits', routes.fits);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));