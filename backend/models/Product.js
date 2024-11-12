const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true 
    },
    price: {
        type: Number,
        required: true // Fixed typo here
    }
});

// Export the model, not just the schema
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
