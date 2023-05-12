const Order = require("../models/Order");

// creating a new order
exports.createOrder = async (req, res) => {
    const { user, products } = req.body;
    const newOrder = new Order({
        user,
        products,
    });
    const savedOrder = await newOrder.save();
    console.log(savedOrder);
    res.json(savedOrder);
};

// getting all orders of a user by email
exports.getOrders = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});

    if (!user) {
        res.status(404).json({message: "User not found"});
    }
    const orders = await Order.find({user: user._id});
    res.json(orders);
};