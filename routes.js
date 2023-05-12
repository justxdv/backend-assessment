const express = require('express');
const { createUser } = require('./controllers/userController');
const { createProduct } = require('./controllers/productController');
const { createOrder, getOrders } = require('./controllers/orderController');

const router = express.Router();

router.post('/user', createUser);
router.post('/product', createProduct);
router.post('/order', createOrder);
router.get('/orders', getOrders);

module.exports = router;