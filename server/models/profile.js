const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema for Profile
const ProfileSchema = new Schema({
    DateCreated: {
        type: Date,
        required: true
    },
    DateEditied: {
        type: Date,
        required: true,
        default: Date.now
    },
    firstName: {
        type: String,
        required: true
    },
    lasttName: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    posts: {
        type: [Object],
        required: false
    }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);