const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);
const tjdb = require('tjdb');

const createSocket = require('./createSocket.js');
const gameSocket = require('./gameSocket.js');

let db = new tjdb("../databases/activeGames.tjdb");

app.use(express.static(__dirname + "/Views"));

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/Views/index.html");
});

app.get("/create", (req, res) => {
    res.status(200).sendFile(__dirname + "/Views/create.html");

    createSocket(io, db);
});

gameSocket(io, db);

http.listen(PORT);