const express = require('express');
const bodyParser = require('body-parser');

const data = require('../data/products/index.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/products', (req, res) => {
    // Add some quantities to simulate the complete process of having added items to the cart
    data && data.items.forEach(function (el) {
        el.quantity = 1;
    });

    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    return res.status(200).json({ ok: true, message: 'Got products', products: data && data.items.filter(el => el.stockLevel > 0) });
});

module.exports = app;