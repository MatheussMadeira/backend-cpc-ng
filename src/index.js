const startDB = require("./Config/mongodb");
const express = require("express");
const app = express();

require("dotenv").config({ path: "../.env" });
startDB();
app.listen(process.env.LOCALHOST_PORT, () => console.log("Servidor rodando"));
