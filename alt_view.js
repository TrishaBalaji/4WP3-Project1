const express = require("express");
const app = express();

const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/mypage',function(req, res) {

    var TPL = 
    {title: "Grocery Item Tracker"
        , message:"This page shows user, product and store data!"
        , tables:["Users","Products","Stores"]
        , warning: false
        , error: true

    }

    res.render('mypage', TPL); //module not found error given when running server 
    //error resolved - had to install mustache-express and correct the typo in dirname (two underscores not one)
})

app.get(/^(.+)$/, function(req, res){
    console.log("static file request: " + req.params[0]);
    res.sendFile(__dirname + req.params[0]);
});

var server = app.listen(8081, function()
{
    console.log("server listening...");
})
