var mongodb = require("mongodb");
var express = require("express");
var app = express();
var videos = require('./route/videos')

app.use(videos)


app.listen('3000' , function(){
    console.log('server running in http://localhost:3000')
})