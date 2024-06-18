const express = require("express");
const rotas = require("./routes/Index");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(rotas);
app.use("*", (req, res) => {
  res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada` });
});

module.exports = app;
