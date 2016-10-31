
/*
This class implements routers to video RESTfull
*/

var express = require('express')
var router = express.Router();

//TODO: Fixme


//RESTFull get to main page
router.get('/', function(request, response){
    response.send("Test")
})

//RESTFull get to list all videos
router.get('/videos', function(request, response){
    response.json({
        "data": [{
            "url": "https://www.youtube.com/watch?v=HmI44eoImsc"
        }, {
            "url": "https://www.youtube.com/watch?v=9kGbENjyhhA"
        }, {
            "url": "https://www.youtube.com/watch?v=uRX2-3dc3hc"
        }, {
            "url": "https://www.youtube.com/watch?v=N_FwNNC7Ts8"
        }]
    })
})

//RESTFull get one video by id
router.get('/videos/:_id', function(request, response){
    
})

module.exports = router;//export video router