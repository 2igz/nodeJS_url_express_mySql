var express = require('express');
var app = express();
var database = require('./bdd');

var body = require('body-parser');
app.use(body.urlencoded({extended : true}));



app.get("/", function(req, res){
    database.getuser();    
    res.writeHead(200, {"Content-type" : "text/html"});
    res.write("<h1>Formulaire d'inscription</h1>");
    res.write("<h1>Choisissez 'login' et 'mot de passe':</h1>");

    res.write("<form method='FORM' action='/form'> ");
    res.write("<input type='text' name='login' />");
    res.write("<input type='password' name='pass' />");
    res.write("<input type='submit' value='Click me !' />");
    res.write("</form>");
    res.end();
});

app.get("/form", function(req, res){
    
    res.writeHead(200, {"Content-type" : "text/html"});
    console.log(req);
    var login = req.query.login;
    var pass = req.query.pass;
    
    res.write("<h1>Bienvenue " + login + "</h1>");
    res.end();
});





//creation url route de reception
app.post("/form", function(req, res){
    console.log("Yo je rentre");

    //type de text affiché
    res.writeHead(200, {"Content-type" : "text/html"});
    console.log(req.body);

    
    //????????????????????????,,,,,,
    var login = req.body.login;
    var pass = req.body.pass;

    //relier la bdd avec la fonction importer de bdd.js: login et pass
    database.adduser(login, pass);

    //message de bienvenue qui recupere le nom de l'utilisateur
    res.write("<h1>Bienvenue Monsieur: " + login + "</h1>");
    res.end();
});

//port d'écoute 
app.listen(3000);
console.log ("hey, ca marche !!!");