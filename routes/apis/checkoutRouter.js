var express = require('express');
var app = express();
const orderService = require('../../services/orderService');
/**
 * Dummy router.
 */
app.get('/checkout', function (res, res) {
    return res.json({
        'hello': 'world'
    });
});

/**
 * API to create new order.
 */
app.post('/init/order', function (req, res) {
    let orderRequest = getOrderRequest(req);
    let order_id = orderService.createOrder(orderRequest);
    if (null == order_id) {
        return res.json({
            'error': 'initiate order failed'
        });
    }
    return res.json({
        'order_id': order_id
    });
});

function getOrderRequest(req) {
    return {
        'vendor_id': req.vendor_id,
        'user_id': req.user_id
    };
}

module.exports = app;