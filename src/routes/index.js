const { Router } = require("express");
const EventsRoutes = require("./EventsRoutes");
const rotas = Router();

rotas.use("/events", EventsRoutes);

module.exports = rotas;
