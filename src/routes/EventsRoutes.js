const { Router } = require("express");
const EventsValidator = require("../Validators/EventsValidator");
const EventsController = require("../Controllers/EventsController");

const EventsRoutes = Router();
EventsRoutes.post("/", EventsValidator.create, EventsController.create);
EventsRoutes.get("/", EventsController.read);
EventsRoutes.put("/:id", EventsValidator.update, EventsController.update);
EventsRoutes.delete("/:id", EventsValidator.destroy, EventsController.delete);

module.exports = EventsRoutes;
