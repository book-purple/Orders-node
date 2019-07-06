var orderModel = require('../models/orderModel');
const orderController = require("../controllers/orderController");
const commonUtils = require('../utils/commonUtils');
const logger = require('../utils/logger');
const orderStateMachine = require('../utils/orderStateMachine');

/**
 * Function to create and save order.
 * @param {Request} req 
 * @param {Response} res 
 */
function createOrder(orderRequest, orderResponse) {
    logger.info('create order service called...');
    var orderId = commonUtils.getOrderId();
    var orderState = orderStateMachine.execNextState(orderStateMachine.NEW_ORDER);

    // create order model
    var order = new orderModel({
        order_id: orderId,
        created_at: new Date(),
        user_id: orderRequest.user_id,
        vendor_id: orderRequest.vendor_id,
        order_state: {
            order_state_name: orderState.orderStateName,
            order_state_id: orderState.orderStateId
        }
    });

    // save order
    orderController.saveOrder(order, (err, orderId) => {
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

/**
 * Function to initiate checkout 
 * @param {Request} initCheckoutRequest 
 * @param {Response} initCheckoutResponse 
 */
function initCheckout(initCheckoutRequest, initCheckoutResponse) {
    logger.infp('Init checkout service called...');
    var orderId = initCheckoutRequest.orderId;
    orderController.findByOrderId(orderId, (error, order) => {
        if (error) {
            error = true;
            initCheckoutRequest = {
                'errorMessage': 'unable to find order',
                'error': err
            }
        }
        var orderState = order.order_state;
        orderStateMachine.execNextState(,orderState);
    });
}

module.exports.createOrder = createOrder;
module.exports.initCheckout = initCheckout;