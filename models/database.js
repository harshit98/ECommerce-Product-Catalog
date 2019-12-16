const mongoose = require('mongoose');

const connection = 'mongodb://localhost:27017/ProductDB';

const connection = 'mongodb+srv://admin:admin@cluster0-xdbzm.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connection, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB connection successfully connected.');
    }
    else {
        console.log('Error in DB connection : ' + err);
    }
});

require('./product.model');
