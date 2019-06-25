var orderModel = require('../models/orderModel');
const orderController = require("../controllers/orderController");
const commonUtils = require("../utils/commonUtils");
/**
 * Function to create and save order.
 * @param {Request} req 
 * @param {Response} res 
 */
function createOrder(orderRequest) {
    console.log('create order service called...');
    var orderId = commonUtils.getOrderId();
    var order = new orderModel({
        order_id: orderId,
        created_at: new Date(),
        user_id: orderRequest.user_id,
        vendor_id: orderRequest.vendor_id
    });
    order_id = orderController.saveOrder(order);
    return order_id;
}

module.exports.createOrder = createOrder;