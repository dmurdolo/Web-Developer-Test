const data = require('../../data/products/index.json');

const productController = {
    products(req, res) {
        // Add some quantities to simulate the complete process of having added items to the cart
        data && data.items.forEach(function (el) {
            el.quantity = 1;
        });

        return res.status(200).json({ ok: true, message: 'Got products', products: data && data.items.filter(el => el.stockLevel > 0) });
    }
};

module.exports = productController;