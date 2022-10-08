

const http = require("http")
const WebSocketServer = require("ws").WebSocketServer
const express = require("express");
// const product = require("./api/product");

const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

const wss = new WebSocketServer({ server });

// app.use(express.json({ extended: false }));
//
// app.use("/api/product", product);

wss.on('connection', function connection(ws) {
  console.log("WS: connection")
  ws.on('message', function (message) {
    console.log("WS: "+message)
    ws.send("HI")
  })

})

server.listen(PORT, () => console.log("Server started on port: "+PORT))