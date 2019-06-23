var mongoose = require("mongoose");
var order = mongoose.model("order");

/**
 * Function to create an Order.
 * @param {} req
 * @param {*} res
 */
var createOrder = function(req, res) {};

/**
 * Function to read an Order.
 * @param {} req
 * @param {*} res
 */
var readOrder = function(req, res) {};

/**
 * Function to update an order.
 * @param {} req
 * @param {*} res
 */
var updateOrder = function(req, res) {};

/**
 * Function to delete an order.
 * @param {} req
 * @param {*} res
 */
var deleteOrder = function(req, res) {};

/**
 * Function to list all the orders.
 * @param {} req
 * @param {*} res
 */
var listOrder = function(req, res) {
    order.find().exec(function(err, orders) {
        if (err) {
            return res.status(400).send({
               message: 'Not able to fetch orders from order DB' 
            });
        } else {
            res.json(orders);
        }
    });
};

exports.create = createOrder;
exports.find = readOrder;
exports.update = updateOrder;
exports.delete = deleteOrder;
exports.list = listOrder;
