const mongoose = require('mongoose');

const connection = 'mongodb://localhost:27017/ProductDB';

mongoose.connect(connection, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB connection successfully connected.');
    }
    else {
        console.log('Error in DB connection : ' + err);
    }
});

require('./product.model');
