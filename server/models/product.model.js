const { Timestamp } = require("bson")
const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "title is required"],
        minlength:[2, "Title must be at least 2 characters long"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min:[1, "Price must be a number larger than 1"],
    },
    description: {
        type: String,
        required:[true, "Description is required"],
        minlength:[2, "Description must have more than 2 characters"],
    }


}, {Timestamp: true})

module.exports = mongoose.model('Product', ProductSchema);