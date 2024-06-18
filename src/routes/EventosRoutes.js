const { Router } = require("express");
const EventosValidator = require("../Validators/EventsValidator");
const EventosController = require("../Controllers/EventsController");
const verifyJwt = require("../Middlewares/verifyJwt");

const EventosRotas = Router();

EventosRotas.post("/", EventosController.create);
EventosRotas.get("/", EventosController.read);
EventosRotas.put("/:id", EventosController.update);
EventosRotas.delete("/:id", EventosController.delete);

module.exports = EventosRotas;
