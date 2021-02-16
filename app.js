//Running the server using Express.js

const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log('App is running at port 3000.');
})


//Database
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'neeyati',
  database: 'demo',
  port: 3306
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var obj = {};
app.get('/', function(req, res) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected");
        var sql = "SELECT * FROM weather";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            } else {
                obj = {print: result};
                res.render('data', {obj: obj});
            }
        });
    });
});

/*
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SELECT * FROM weather', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
  });

  */