const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema for Blog
const BlogSchema = new Schema({
    DateCreated: {
        type: Date,
        required: true
    },
    DateEditied: {
        type: Date,
        required: true,
        default: Date.now
    },
    Author: {
        type: String,
        required: true
    },
    Content: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    }
});

module.exports = Blog = mongoose.model("blog", BlogSchema);