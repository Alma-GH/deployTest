
const express = require("express");
const WS = require("express-ws")
// const product = require("./api/product");

const PORT = process.env.PORT || 8080;
const app = express();
const wss = WS(app).getWss()

// app.use(express.json({ extended: false }));
//
// app.use("/api/product", product);

app.ws("/", (ws,req)=>{
  console.log("Подключение установлено")
  ws.on('message', function (message) {
    console.log("WS: "+message)
    broadcast(message)
  })
})


function broadcast(message) {
  wss.clients.forEach(client => {
    client.send(JSON.stringify(message))
  })
}


app.listen(PORT, () => console.log("Server started on port: "+PORT))