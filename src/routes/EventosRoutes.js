const { Router } = require("express");
const EventosValidator = require("../Validators/EventosValidator");
const EventosController = require("../Controllers/EventosController");
const verificarJwt = require("../Middlewares/verificarJwt");

const EventosRotas = Router();

EventosRotas.post("/", EventosValidator.create, EventosController.create);
EventosRotas.get("/", verificarJwt, EventosController.read);
EventosRotas.put(
  "/:id",
  verificarJwt,
  EventosValidator.update,
  EventosController.update
);
EventosRotas.delete(
  "/:id",
  verificarJwt,
  EventosValidator.destroy,
  EventosController.delete
);

module.exports = EventosRotas;
