const { Router } = require("express");
const EventosValidator = require("../Validators/EventsValidator");
const EventosController = require("../Controllers/EventsController");

const EventosRotas = Router();
EventosRotas.post("/", EventosValidator.create, EventosController.create);
EventosRotas.get("/", EventosController.read);
EventosRotas.put("/:id", EventosValidator.update, EventosController.update);
EventosRotas.delete("/:id", EventosValidator.destroy, EventosController.delete);

module.exports = EventosRotas;
