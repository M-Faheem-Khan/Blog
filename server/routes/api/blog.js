const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

// Schema Models
const Profile = require("../../models/profile"); // Profile Schema model
const Blog = require("../../models/blog"); // Blog Schema model

// Test endpoint to ensure that endpoint is working
router.get("/blog/status", (request, response) => {
    response.status(200).json({Response: "OK"})
});

// Gets all documents in database
router.get("/blog/all", (request, response) => {
    Blog.find({}).sort({DateCreated: -1}).then((docs) => {
        response.status(200).json({
            status: 200,
            Response: "OK",
            data: docs,
        });
    }).catch((error) => {
        response.status(404).json({
            status: 404,
            Response: "No Documents in Database",
            traceback: error
        });
    });
});

// creates user profile 
router.post("/blog/create", (request, response) => {
    let data = {
        "DateCreated": new Date(),
        "Author": request.body.username,
        "Content": request.body.content,
        "Title": request.body.content  
    };

    // saving profile to db
    const newBlog = new Blog(data)
    newBlog.save().then(() => {
        response.status(200).json({
            "success": true,
        });
    }).catch((error) => {
        response.status(200).json({
            "success": false,
            "response": error
        });
    });
});

// updating user profile given their id, password
router.put("/blog/update/:id", (request, response) => {
    Blog.findOneAndUpdate({
        "_id": request.params.id,
        "password": bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10))
    }, {$set: request.body}, {upsert: false}).then((item) => {
        response.status(200).json({success: true});
    }).catch((error) => {
        response.status(404).json({success: false, traceback: error});
    });
});


// Deletes user profile given their user id, password
router.delete("/blog/delete/:id", (request, response) => {
    Blog.findOneAndDelete({
        "_id": request.params.id, 
        password: bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10))
    }).then(() => {
        response.status(200).json({success: true});
    }).catch((error) => {
        response.status(404).json({success: false, traceback: error});
    });
});

module.exports = router;