const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
    },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;