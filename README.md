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
3. Unit tests for testing API endpoints.
4. Proper URL routing.
5. Functionality to store product image in database.
6. Functionality to fetch product image from database.

## Tech Stack

- MongoDB.
- ExpressJS.
- Jest.

## Local Deployment

Create a `uploads` folder inside `/ECommerce-Product-Catalog`. This folder will help to keep a track of uploaded product image. Make sure your MongoDB is installed and running in background.

Run server: `nodemon server.js`

After running server, redirect to `http://localhost:3000/product`

### Database Configuration

- Database name - `ProductDB`
- Collections - `products`

### Run Tests

To run tests use `npm test`.

## Project Demo Link

Video of working project: https://youtu.be/5HZrdHXCWrY
