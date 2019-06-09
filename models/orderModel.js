/**
 * Module Dependencies.
 */
var mongoose = require('mongoose');
var mongoUri = 'mongodb+srv://bpuser:bpuser@book-purple-cluster-ukidg.mongodb.net/catalog?retryWrites=true';
mongoose.connect(mongoUri, {useNewUrlParser: true});
var OrdersDb = mongoose.connection;
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
    order_id: {
        type: bigint,
        unique: true,
        required: 'order cannot be blank',
        validate: [validateOrderLength, 'order must be of length 9 or less']
    }
});

mongoose.model('order', OrderSchema);