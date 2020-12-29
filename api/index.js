const express = require('express');
const bodyParser = require('body-parser');

const cartController = require('./controllers/cart');
const productController = require('./controllers/product');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API endpoints
app.get('/api/products', productController.products);
app.post('/api/checkout', cartController.checkout);

module.exports = app;