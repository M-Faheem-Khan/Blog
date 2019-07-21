const express = require("express");
const router = express.Router();

// Schema Models
const Posts = require("../../models/posts"); // Posts Schema model

// Test endpoint to ensure that endpoint is working
router.get("/status", (request, response) => {
    response.status(200).json({Response: "OK"})
});

// Gets all documents in database
router.get("/all", (request, response) => {
    Posts.find({}).sort({DateCreated: 1}).then((docs) => {
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

// Gets the request post json from the database 
router.get("/:url", (request,response) => {
    Posts.find({"url": request.params.url}).then((doc) => {
        response.status(200).json({
            status: 200,
            Response: "OK",
            data: doc,
        });
    }).catch((error) => {
        response.status(404).json({
            status: 404,
            Response: "No Documents in Database",
            traceback: error
        });
    });
});

module.exports = router;