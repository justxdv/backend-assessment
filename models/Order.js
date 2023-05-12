const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;