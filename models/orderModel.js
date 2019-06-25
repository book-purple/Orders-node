/**
 * Module Dependencies.
 */
var mongoose = require('mongoose');
var mongoUri = 'mongodb+srv://bpuser:bpuser@book-purple-cluster-ukidg.mongodb.net/orders?retryWrites=true';
mongoose.connect(mongoUri, {useNewUrlParser: true});

/**
 * Orders Database connection
 */
var ordersDb = mongoose.connection;
ordersDb.on("error",console.error.bind(console, 'connection error:'));
ordersDb.once('open', function(){
    // Orders DB connected
});
var Schema = mongoose.Schema;

/**
 * Validation
 */
function validateOrderLength(v) {
    return v.length <= 9;
}

/**
 * Order Schema
 */
var OrderSchema = new Schema({

    // the property name
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    order_id: {
        type: String,
        unique: true,
        index: true,
        required: 'order cannot be blank',
        //validate: [validateOrderLength, 'order must be of length 9 or less']
    },
    user_id: {
        type: String,
        index: true
    },
    vendor_id: {
        type: String,
        index: true
    }
});

var order = mongoose.model('order', OrderSchema);
module.exports = order;