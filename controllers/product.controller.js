const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

router.get('/', (req, res) => {
    res.render('product/addOrEdit', {
        viewTitle: 'Add Product'
    });
});

router.post('/', (req, res) => {
    // console.log(req.body);
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

router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render('product/addOrEdit', {
                viewTitle: 'Update Product',
                product: doc
            })
        }
    });
});

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

module.exports = router;
