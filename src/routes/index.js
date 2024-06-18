const { Router } = require("express");
const EventosRotas = require("./EventosRoutes");
const rotas = Router();

rotas.use("/eventos", EventosRotas);

module.exports = rotas;
