const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

// Schema Models
const Profile = require("../../models/profile"); // Profile Schema model

// Test endpoint to ensure that endpoint is working
router.get("/profile/status", (request, response) => {
    response.status(200).json({Response: "OK"})
});

// Gets all documents in database
router.get("/profile/all", (request, response) => {
    Profile.find({}).sort({DateCreated: 1}).then((docs) => {
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
router.post("/profile/create", (request, response) => {
    let body = request.body;
    let data = {
        "DateCreated": new Date(),
        "DateEdited": new Date(),
        "firstName": body.firstName,
        "lastName": body.lastName,
        "username": body.username,
        "email": body.email,
        "password": bcrypt.hashSync(body.password, bcrypt.genSaltSync(10))
    };
    // saving profile to db
    const newProfile = new Profile(data)
    newProfile.save().then(() => {
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
router.put("/profile/update/:id", (request, response) => {
    Profile.findOneAndUpdate({
        "_id": request.params.id,
        "password": bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10))
    }, {$set: request.body}, {upsert: false}).then((item) => {
        response.status(200).json({success: true});
    }).catch((error) => {
        response.status(404).json({success: false, traceback: error});
    });
});


// Deletes user profile given their user id, password
router.delete("/profile/delete/:id", (request, response) => {
    Profile.findOneAndDelete({
        "_id": request.params.id, 
        password: bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10))
    }).then(() => {
        response.status(200).json({success: true});
    }).catch((error) => {
        response.status(404).json({success: false, traceback: error});
    });
});

module.exports = router;