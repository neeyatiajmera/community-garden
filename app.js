//Running the server using Express.js

const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log('App is running at port 3000.');
})


//Connect to mySql Database
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
  console.log('Successfully connected to the database!');
});

//Test for data extraction
/*
connection.query('SELECT * FROM weather', (err, rows) => {
  if (err) throw err;
  console.log('Data received from Db:');
  console.log(rows);
});
*/

//Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static("public"));

//Use res.render to load up an ejs file
app.get('/', function (req, res) {
  connection.query('SELECT * FROM weather', (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log('Success');
      //Send the first row object to index.ejs file
      res.render('index', {row: rows[0]});
    }
  });

});


/*




 

  */