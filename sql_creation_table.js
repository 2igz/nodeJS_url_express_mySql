var mysql = require('mysql');
var express = require('express');
var app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mybdd"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = " CREATE TABLE user (email VARCHAR(255), password VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});