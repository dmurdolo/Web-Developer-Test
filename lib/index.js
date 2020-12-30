const express = require('express');

const data = require('../data/products/index.json');

const app = express();

app.get('/api/products', (req, res) => {
    // Add some quantities to simulate the complete process of having added items to the cart
    data && data.items.forEach(function (el) {
        el.quantity = 1;
    });

    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    return res.status(200).json({ ok: true, message: 'Got products', products: data && data.items.filter(el => el.stockLevel > 0) });
});

app.post('/api/checkout', (req, res) => { 
    const orderNum = Math.random().toString(36).substring(7);
    return res.status(200).json({ ok: true, message: 'Checkout complete', orderId: orderNum });
});

module.exports = app;