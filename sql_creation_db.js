var mysql = require('mysql');
var express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mybdd", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});