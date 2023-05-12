const User = require("../models/User");

// creating a new user
exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({
        name,
        email,
        password,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.json(savedUser);
};
