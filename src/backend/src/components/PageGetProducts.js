require('dotenv').config();
const GetUrlArgs = require("./GetUrlArgs.js");
const Authentication = require("./Authentication.js");

function PageGetProducts(req, res) {
    let UrlArgs = GetUrlArgs(req.params.GETargs);

    let sql = `SELECT * FROM \`${process.env.MySQL_DATABASE}\`.\`products\`;`;

    Authentication(UrlArgs, res, function(res, connnection) {    
        connnection.query(sql, function (error, results, fields) {
            connnection.end();
            if (error) {
                connnection.end();
                console.log(error);
                return error;
            }
            res.send(results);
        });
    });
}

module.exports = PageGetProducts;
