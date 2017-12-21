const express = require("express");
const handler = require("./httpHandler")
const trackerController = require("./trackerController");
const bodyParser = require("body-parser");

const port = 8081;
const server = express();

server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use("/tracker", trackerController.router);


server.listen(port);

console.log(`http://localhost:${port}`);