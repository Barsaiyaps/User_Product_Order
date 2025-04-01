const mongoose = require("mongoose");   

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending",
    }
});


// Virtual field to get product details dynamically
orderSchema.virtual("productDetails", {
ref: "Product",
localField: "products",      // Array of product IDs in Order
foreignField: "_id",
})

const orderModel = mongoose.model("Order", orderSchema); 

module.exports = { orderModel };