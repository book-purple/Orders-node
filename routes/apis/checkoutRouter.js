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
app.post('/new/order', function (req, res) {
    let orderRequest = req.body;
    orderService.createOrder(orderRequest, function orderResponse(error, orderResponse){
        if (error) {
            return res.json(orderResponse);
        }
        // no use of variables of orderResponse here currently...
        return res.json(orderResponse);
    });
});

module.exports = app;