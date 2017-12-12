const express = require("express");
const handler = require("./httpHandler")
const trackerController = require("./trackerController");

const server = express();

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use("/tracker", trackerController.router);


server.listen(3001);

console.log("http://localhost:3001");