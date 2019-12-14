const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    brand: {
        type: String
    },
    img: {
        data: Buffer,
        contentType: String
    } 
});

mongoose.model('Product', ProductSchema);
