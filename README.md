# ECommerce Product Catalog

CRUD based API to edit product catalog for an e-commerce company.

## Database Schema

Product Details - Name, Category, Brand, Image.

```
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
```

## Features

1. API supports CRUD database operations.
2. Filter based search in database.
3. Written tests for API.
4. Proper URL routing.
5. Functionality to store product image in database.
6. Functionality to fetch product image from database.

## Test Link

Deployment Link: 

## Tech Stack

- MongoDB.
- ExpressJS.

## Local Deployment

Create a `uploads` folder inside `/ECommerce-Product-Catalog`. This folder will help to keep a track of uploaded product image.

Run server: `nodemon server.js`

After running server, redirect to `http://localhost:3000/product`

## Project Demo Link

Video of working project: 
