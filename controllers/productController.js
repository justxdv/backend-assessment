const Product = require("../models/Product");

// creating a new product
exports.createProduct = async (req, res) => {
    const { title, price } = req.body;
    const newProduct = new Product({
        title,
        price,
    });
    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    res.json(savedProduct);
};