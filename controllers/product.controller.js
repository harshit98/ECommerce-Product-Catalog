const express = require('express');
var router = express.Router();

const fs = require('fs');

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// For image storage, I'm using multer npm package which will store image in binary form.
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

var upload = multer({
    storage: storage
});

router.get('/', (req, res) => {
    res.render('product/addOrEdit', {
        viewTitle: 'Add Product'
    });
});

router.post('/', upload.single('myFile'), (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    if (req.body._id == '') {
        insertRecord(req, res);
    }
    else {
        updateRecord(req, res);
    }
});

function insertRecord(req, res) {
    var product = new Product();
    product.name = req.body.name;
    product.category = req.body.category;
    product.brand = req.body.brand;
    product.img.name = req.file.originalname;
    product.img.data = fs.readFileSync(req.file.path);
    product.img.contentType = 'image/jpg';

    product.save((err, doc) => {
        if (!err) {
            res.redirect('product/list');
        }
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Product.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect('product/list');
        }
        else {
            console.log('Error during record update : ' + err);
        }
    });
}

// Get List of Products.
router.get('/list', (req, res) => {
    Product.find((err, doc) => {
        if (!err) {
            res.render('product/list', {
                list: doc
            });
        }
        else {
            console.log('Error in retrieving product list : ' + err);
        }
    });
});

// Update Product.
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if (!err) {
            // console.log(doc.img);
            res.render('product/addOrEdit', {
                viewTitle: 'Update Product',
                product: doc
            });
        }
    });
});

// Delete Product.
router.get('/delete/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/product/list');
        }
        else {
            console.log('Error in entry delete : ' + err);
        }
    });
});

// Show Image.
router.get('/image/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if (!err) {
            // console.log(doc);
            var base64 = doc.img.data.toString('base64');

            //console.log(base64);
            res.render('product/image', {
                encodedImage: base64,
                contentType: doc.img.contentType
            });
        }
    });
});

module.exports = router;
