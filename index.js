const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require(`path`);
const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, `public`)));

app.get(`/`, (req, res) => {
  res.sendFile(`./public/index.html`);
});

// As soon as the connection estabalishes, execute the cb function
io.on("connection", (socket) => {
  socket.on(`message`, (message) => {
    console.log(socket);
    io.emit(`user-message`, message);
  });
});

httpServer.listen(PORT, () => {
  `Server up and running at http://127.0.0.1:${PORT}`;
});
