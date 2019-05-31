var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mybdd",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});
//exporter cette fonction dans route.js
exports.adduser = function (login, pass){
    var values = [login, pass];
        
    var sql = "INSERT INTO `user` (`email`, `password`) VALUES (?)";
    con.query(sql, [values], function (err, result) {
        console.log(err);
        if (err) throw err;
        console.log("1 record inserted");
    });
}


exports.getuser = function (){
    con.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
}