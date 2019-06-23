var orderModel = require('../models/orderModel');
const orderController = require("../controllers/orderController");

/**
 * Function to create and save order.
 * @param {Request} req 
 * @param {Response} res 
 */
function createOrder(req, res) {
    console.log('create order service called...');
    res.json("Create order service called");
    var order = new orderModel({
        order_id: 9001,
        created_at: new Date()
    });
    console.log(JSON.stringify(order))
    order.save(function(err, result) {
        if (err) {
            console.log("Some error occured", err);
        }
        if (result) {
            console.log(result);
        }
    });
    //res.json(order);
}

module.exports.createOrder = createOrder;