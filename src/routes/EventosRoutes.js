const { Router } = require("express");
const EventosValidator = require("../Validators/eventosValidator");
const EventosController = require("../Controllers/eventosController");
const verifyJwt = require("../Middlewares/verifyJwt");

const EventosRotas = Router();

EventosRotas.post("/", EventosValidator.create, EventosController.create);
EventosRotas.get("/", verifyJwt, EventosController.read);
EventosRotas.put(
  "/:id",
  verifyJwt,
  EventosValidator.update,
  EventosController.update
);
EventosRotas.delete(
  "/:id",
  verifyJwt,
  EventosValidator.destroy,
  EventosController.delete
);

module.exports = EventosRotas;
