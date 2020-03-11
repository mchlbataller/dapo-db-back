var express = require("express");
var router = express.Router();
var mysql = require("mysql");


router.get("/", function(req, res, next) {
    var con = mysql.createConnection({
        host: "202.91.163.23",
        user: "dapo-db",
        password: "12opad34!!",
        database: "dapo"
    });

    con.connect(function(err){
        if (err) throw err;
        con.query("select * from view_user_access_details", function(err, result, fields) {
            if (err) throw err;
            res.send(JSON.stringify(result));
        });
    })
});

module.exports = router;
