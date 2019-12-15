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
        name: String,
        data: Buffer,
        contentType: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Product', ProductSchema);
