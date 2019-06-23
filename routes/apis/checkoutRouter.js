let router = require('express').Router();
const orderService = require('../../services/orderService');
/**
 * Dummy router.
 */
router.get('/checkout', function(res, res){
    return res.json({
        'hello':'world'
    });
});

/**
 * API to create new order.
 */
router.get('/new/order', function(req, res){
    orderService.createOrder(req, res);
});

module.exports = router;