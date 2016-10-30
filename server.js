var mongodb = require("mongodb");
var express = require("express");
var app = express();


//RESTFull get to main page
app.get('/', function(request, response){
    
})

//RESTFull get to list all videos
app.get('/videos', function(request, response){
    
})

//RESTFull get one video by id
app.get('/videos/:_id', function(request, response){
    
})

app.listen('3000' , function(){
    console.log('server running in http://localhost:3000')
})