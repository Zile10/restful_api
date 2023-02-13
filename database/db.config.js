const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "btyumtnslulnlrjld3wk-mysql.services.clever-cloud.com",
  user: "u1d60azab09ltqvt",
  password: "HGQ2enL2yy7JkhI6thRo",
  database: "btyumtnslulnlrjld3wk"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

connection.query('SELECT * FROM Products', function(err, res, fields) {
  if (err) throw err;
  // console.log('The Solution is: ', res[0].result);
  console.log(res);
})

connection.end();