const express = require("express");
const routes = require("./routes/Index");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use("*", (req, res) => {
  res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada` });
});

module.exports = app;
