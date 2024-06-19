const { Router } = require("express");
const EventosRotas = require("./EventsRoutes");
const rotas = Router();

rotas.use("/eventos", EventosRotas);

module.exports = rotas;
