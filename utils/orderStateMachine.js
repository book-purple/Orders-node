// order state: 1
// NEW_ORDER
var orderState;
var orderStateName;
var orderStateId;

const NEW_ORDER = 'new_order';
const SENT_TO_VENDOR = 'sent_to_vendor';
const PENDING_WITH_VENDOR = 'pending_with_venodr';
const ACCEPTED_BY_VENDOR = 'accepted_by_vendor';
const EXPIRED_FROM_VENDOR = 'expired_from_vendor';
const SENT_TO_USER = 'send_to_user';
const ORDER_VERIFIED = 'order_verified';
const ORDER_COMPLETED = 'order_completed';
const ORDER_DECLINED = 'order_declied';
const PENDING_WITH_USER = 'pending_with_user';
const EXPIRED_FROM_USER = 'expired_from_user';

// new order
// state name: NEW_ORDER

var execNextState = function (event) {
    switch (event) {
        case NEW_ORDER:
            return createInitOrderState();
    }
}

function createInitOrderState() {
    var orderStateName = NEW_ORDER;
    var orderStateId = 99;
    return getOrderState(orderStateName, orderStateId);
}

function getOrderState(orderStateName, orderStateId) {
    return orderState = {
        'orderStateName': orderStateName,
        'orderStateId': orderStateId,
        'isFinalState': false
    }
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