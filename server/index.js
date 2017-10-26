const express = require("express");
const handler = require("./httpHandler")
const trackerController = require("./trackerController");

const server = express();

server.use("/client", express.static("./jquery-mockup"))
server.use("/tracker", trackerController.router );
    

server.listen(3001);

console.log("http://localhost:3001");