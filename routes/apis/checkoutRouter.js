var express = require('express');
var app = express();
const orderService = require('../../services/orderService');
/**
 * Dummy router.
 */
app.get('/checkout', function(res, res){
    return res.json({
        'hello':'world'
    });
});

/**
 * API to create new order.
 */
app.post('/new/order', function(req, res){
    orderService.createOrder(req, res);
});

module.exports = app;