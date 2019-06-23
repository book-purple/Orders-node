var orderModel = require('../models/orderModel');
const orderController = require("../controllers/orderController");

/**
 * Function to create and save order.
 * @param {Request} req 
 * @param {Response} res 
 */
function createOrder(req, res) {
    console.log('create order service called...');
    var order = new orderModel({
        order_id: 9001,
        created_at: new Date()
    });
    console.log(JSON.stringify(order))
    order.save(function(err, result) {
        if (err) {
            res.json({
                'errorMessage': 'unable to save order',
                'error': err
            });
        }
        if (result) {
            res.json(order);
        }
    });
}

module.exports.createOrder = createOrder;