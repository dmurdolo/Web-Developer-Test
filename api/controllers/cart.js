const cartController = {
    checkout (req, res) {
        const orderNum = Math.random().toString(36).substring(7);
        return res.status(200).json({ ok: true, message: 'Checkout complete', orderId: orderNum });
    }
};

module.exports = cartController;