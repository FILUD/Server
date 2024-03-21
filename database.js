let mysql = require('mysql');

let dbCon = mysql.createConnection({
    host: 'fine-jobhub-01.cy2v6bumcfdz.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Tick1147---',
    database: 'findjob_db'
});
dbCon.connect();

module.exports = dbCon;
