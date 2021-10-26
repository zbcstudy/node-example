let mysql = require('mysql');

const host = '10.0.0.131';
const port = 3306;
const username = 'root';
const password = 'sneakerhead';
const db = 'test';
let connection = mysql.createConnection({
    host: host,
    port: port,
    username: username,
    password: password,
    database: db
});

connection.connect();

connection.query("select * from user", function (err, result) {
    if (err) {
        console.log("error-" + err);
    }
    console.log(result)
});

connection.end();

