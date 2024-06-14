const startDB = require("./Config/mongodb");
require("dotenv").config();
const express = require("express");

const App = express();

startDB();
App.listen(process.env.LOCALHOST_PORT, () => console.log("Servidor rodando"));

module.exports = App;
