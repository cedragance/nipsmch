var properties = require("../../../properties.json");
const fs = require('fs');

var express = require("express")
var router = express.Router()

/*
const sqlConfig = {
    host: properties.xmysql.host,
    ssl: {
        ca: fs.readFileSync('../certs/cleardb-ca.pem'),
        cert: fs.readFileSync('../certs/be3cf727dead0a-cert.pem'),
        key: fs.readFileSync('../certs/be3cf727dead0a-key.pem')
    },
    user: properties.xmysql.user,
    password: properties.xmysql.password,
    database: properties.xmysql.database,
    port: properties.xmysql.port,
    connectionLimit: 10,
    queueLimit: 30,
    acquireTimeout: 1000000,
    debug: false,
    timeout: 100000,
    connectTimeout: 1000000
};

let mysqlPool = mysql.createPool(sqlConfig);
*/
router.get('/:sp_name', (req, res, next) => {
var storedProcedureName = req.params.sp_name;

/*
    var parameter_positions = '';
    var parameters = [];
    var firstProperty = true;
    var object = req.query;
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (!firstProperty) {
                parameter_positions += ',';
            } else {
                firstProperty = false;
            }
            parameter_positions += ' ?';
            parameters.push(object[property]);
        }
    }

    let sql =
        'CALL ' + storedProcedureName +
        '(' +
            parameter_positions +
        ')';

    mysqlPool.query(sql, parameters, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });
*/
res.send({storedProcedureName});
})

module.exports = router;
