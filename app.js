const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRouter = require("./api/user/router");
const cityRouter = require("./api/city/router");
const routeRouter = require("./api/route/router");

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/city", cityRouter);
app.use("/api/route", routeRouter);

app.use(express.static(__dirname + '/public'));
  
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(4000);
console.log("Сервер на порту 4000 запущен");