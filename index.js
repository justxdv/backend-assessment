const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes');

app.use(express.json());
dotenv.config();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, useUnifiedTopology: true 
})
.then(console.log('Connected to MongoDB'))
.catch(err => console.log('error',err));  

// routes
app.use('/', router);


app.listen(process.env.PORT||"5000", () => {
    console.log(`Backend server is running on ${process.env.PORT}`);
});
