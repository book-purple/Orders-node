// order state: 1
// NEW_ORDER
var orderState;
var orderStateName;
var orderStateId;

const NEW_ORDER = 'new_order';
const NEW_ORDER_ID = 99;

const SENT_TO_VENDOR = 'sent_to_vendor';
const SENT_TO_VENDOR_ID = 3;

const PENDING_WITH_VENDOR = 'pending_with_venodr';
const PENDING_WITH_VENDOR_ID = 5;

const ACCEPTED_BY_VENDOR = 'accepted_by_vendor';
const ACCEPTED_BY_VENDOR_ID = 4;

const EXPIRED_FROM_VENDOR = 'expired_from_vendor';
const EXPIRED_FROM_VENDOR_ID = 10;

const SENT_TO_USER = 'send_to_user';
const SENT_TO_USER_ID = 6;

const ORDER_VERIFIED = 'order_verified';
const ORDER_VERIFIED_ID = 11;

const ORDER_COMPLETED = 'order_completed';
const ORDER_COMPLETED_ID = 7;

const ORDER_DECLINED = 'order_declied';
const ORDER_DECLINED_ID = 8;

const PENDING_WITH_USER = 'pending_with_user';
const PENDING_WITH_USER_ID = 9;

const EXPIRED_FROM_USER = 'expired_from_user';
const EXPIRED_FROM_USER_ID = 12;

// new order
// state name: NEW_ORDER

var execNextState = function (event, order) {
    switch (event) {
        case NEW_ORDER:
            return createInitOrderState();
        case SENT_TO_VENDOR:
            return moveOrderToSentToVendor(order);
    }
}

/**
 * Function to create fresh order
 */
function createInitOrderState() {
    var orderStateName = NEW_ORDER;
    var orderStateId = NEW_ORDER_ID;
    return getOrderState(orderStateName, orderStateId);
}

/**
 * Function to create and return order state
 * @param {Object} orderStateName 
 * @param {Object} orderStateId 
 */
function getOrderState(orderStateName, orderStateId) {
    return orderState = {
        'orderStateName': orderStateName,
        'orderStateId': orderStateId,
        'isFinalState': false
    }
}

/**
 * Function to move order to sent to vendor
 * @param {Object} order 
 */
function moveOrderToSentToVendor(order) {
    order.orderState = SENT_TO_VENDOR;
    order.orderStateId = SENT_TO_VENDOR_ID;
    return order;
}

/**
 * Function to move order to pending with vendor
 * @param {Object} order 
 */
function moveOrderToPendingWithVendor(order) {
    order.orderState = PENDING_WITH_VENDOR;
    order.orderStateId = PENDING_WITH_VENDOR_ID;
    return order;
}

/**
 * Function to move order to accepted by vendor
 * @param {Object} order 
 */
function moveOrderToAcceptedByVendor(order) {
    order.orderState = ACCEPTED_BY_VENDOR;
    order.orderStateId = ACCEPTED_BY_VENDOR_ID;
    return order;
}

/**
 * Function to move order to expired from vendor
 * @param {Object} order 
 */
function moveOrderToExpiredFromVendor(order) {
    order.orderState = EXPIRED_FROM_VENDOR;
    order.orderStateId = EXPIRED_FROM_VENDOR_ID;
    return order;
}

/**
 * Function to move order to sent to user
 * @param {Object} order 
 */
function moveOrderToSentToUser(order) {
    order.orderState = SENT_TO_USER;
    order.orderStateId = SENT_TO_USER_ID;
    return order;
}

/**
 * Function to move order to order verified
 * @param {Object} order 
 */
function moveOrderToOrderVerified(order) {
    order.orderState = ORDER_VERIFIED;
    order.orderStateId = ORDER_VERIFIED_ID;
    return order;
}

/**
 * Function to move order to order complete
 * @param {Object} order 
 */
function moveOrderToOrderComplete(order) {
    order.orderState = ORDER_COMPLETED;
    order.orderStateId = ORDER_COMPLETED_ID;
    return order;
}

/**
 * Function to move order to order decline
 * @param {Object} order 
 */
function moveOrderToOrderDecline(order) {
    order.orderState = ORDER_DECLINED;
    order.orderStateId = ORDER_DECLINED_ID;
    return order;
}

/**
 * Function to move order to pending with user
 * @param {Object} order 
 */
function moveOrderToPendingWithUser(order) {
    order.orderState = PENDING_WITH_USER;
    order.orderStateId = PENDING_WITH_USER_ID;
    return order;
}

/**
 * Function to move order to expired from vendor
 * @param {Object} order 
 */
function moveOrderToExpiredFromVendor(order) {
    order.orderState = EXPIRED_FROM_VENDOR;
    order.orderStateId = EXPIRED_FROM_VENDOR_ID;
    return order;
}

module.exports.execNextState = execNextState;

// export order state name
module.exports.NEW_ORDER = NEW_ORDER;
module.exports.SENT_TO_VENDOR = SENT_TO_VENDOR;
module.exports.PENDING_WITH_VENDOR = PENDING_WITH_VENDOR;
module.exports.ACCEPTED_BY_VENDOR = ACCEPTED_BY_VENDOR;
module.exports.EXPIRED_FROM_VENDOR = EXPIRED_FROM_VENDOR;
module.exports.SENT_TO_USER = SENT_TO_USER;
module.exports.ORDER_VERIFIED = ORDER_VERIFIED;
module.exports.ORDER_COMPLETED = ORDER_COMPLETED;
module.exports.ORDER_DECLINED = ORDER_DECLINED;
module.exports.PENDING_WITH_USER = PENDING_WITH_USER;
module.exports.EXPIRED_FROM_USER = EXPIRED_FROM_USER;