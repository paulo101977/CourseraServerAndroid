
/*
This class implements routers to video RESTfull
*/

var express = require('express')
var router = express.Router();



//RESTFull get to main page
router.get('/', function(request, response){
    response.send("Test")
})

//RESTFull get to list all videos
router.get('/videos', function(request, response){
    
})

//RESTFull get one video by id
router.get('/videos/:_id', function(request, response){
    
})

module.exports = router;//export video router