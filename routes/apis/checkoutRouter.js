var express = require('express');
var app = express();
const orderService = require('../../services/orderService');
var errorUtil = require('../../utils/errorUtils');
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
    // call order service to create order
    orderService.createOrder(orderRequest, (error, orderResponse) => {
        if (error) {
            var errorObject = errorUtil(orderResponse);
            return res.json(errorObject);
        }
        // no use of variables of orderResponse here currently...
        return res.json(orderResponse);
    });
});

/**
 * API to initiate order
 */
app.post('/init/checkout', function (req, res) {
    let initCheckoutRequest = req.body;
    orderService.initCheckout(initCheckoutRequest, (error, initCheckoutRequest) => {
        if (error) {
            var errorObject = errorUtil(initCheckoutRequest);
            return res.json(errorObject);
        }
        return res.json(initCheckoutRequest);
    });
});

module.exports = app;