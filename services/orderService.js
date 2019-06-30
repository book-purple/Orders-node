var orderModel = require('../models/orderModel');
const orderController = require("../controllers/orderController");
const commonUtils = require("../utils/commonUtils");

/**
 * Function to create and save order.
 * @param {Request} req 
 * @param {Response} res 
 */
function createOrder(orderRequest, orderResponse) {
    console.log('create order service called...');
    var orderId = commonUtils.getOrderId();
    var order = new orderModel({
        order_id: orderId,
        created_at: new Date(),
        user_id: orderRequest.user_id,
        vendor_id: orderRequest.vendor_id
    });
    orderController.saveOrder(order, function callback(err, orderId) {
        var error = undefined;
        var createOrderResponse;
        if (err) {
            error = true;
            createOrderResponse = {
                'errorMessage': 'could not create a new order',
                'error': err
            }
        }
        createOrderResponse = {
            'orderId': orderId
        }
        return orderResponse(error, createOrderResponse);
    });
}

module.exports.createOrder = createOrder;