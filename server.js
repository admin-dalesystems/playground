const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials/')
hbs.registerHelper('getCurrentYeaer', ()=>{
   return  new Date().getFullYear();
});

app.set('view engine', 'hbs');
app.use( express.static(__dirname + '/public'));


app.get("/", (req, res)=>{
    res.render('home', {
        pageTitle: 'Home Page'
    });
});

app.get('/projects', (req, res)=>{
    res.render('projects', {
        pageTitle: 'Projects'
    });
});

app.listen(port, ()=>{
    console.log("Server is listening for request on port " + port);
});