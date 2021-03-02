const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/finalusers';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('unseUnifiedTopology', true);

mongoose.connect(connectionString)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log())
