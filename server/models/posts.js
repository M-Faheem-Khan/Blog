const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema for Posts
const PostSchema = new Schema({
    image: {
        type: String,
        required: true,
        // add default 
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    DateCreatd: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = Post = mongoose.model("post", PostSchema);