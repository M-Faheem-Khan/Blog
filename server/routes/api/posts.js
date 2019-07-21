const express = require("express"); // server
const router = express.Router(); // routes
const uuidv5 = require("uuid/v5"); // for urls

// Schema Models
const Post = require("../../models/posts"); // Posts Schema model

// Test endpoint to ensure that endpoint is working
router.get("/status", (request, response) => {
    response.status(200).json({Response: "OK"})
});

// Gets all documents in database
router.get("/all", (request, response) => {
    Post.find({}).sort({DateCreated: 1}).then((docs) => {
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
    Post.find({"url": request.params.url}).then((doc) => {
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

// Saves Post to database
router.post("/create", (request, response) => {
    console.log(request.body)
    let data = {
        title: request.body.title,
        image: request.body.image,
        content: request.body.image,
        url: uuidv5(request.body.title, uuidv5.URL)
    }

    console.log(data)

    const newPost = new Post(data);
    newPost.save().then(() => {
        response.status(200).json({
            "success": true,
        });
    }).catch((error) => {
        response.status(404).json({
            "success": false,
            "error": error
        });
    })
})

module.exports = router;