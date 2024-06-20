const { Router } = require("express");
const EventsValidator = require("../Validators/EventsValidator");
const EventsController = require("../Controllers/EventsController");

const EventsRoutes = Router();
EventsRoutes.route("/")
  .post(EventsValidator.create, EventsController.create)
  .get(EventsController.read);

EventsRoutes.route("/:id")
  .put(EventsValidator.update, EventsController.update)
  .delete(EventsValidator.destroy, EventsController.delete);

module.exports = EventsRoutes;
