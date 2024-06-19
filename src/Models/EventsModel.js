const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: String,
  img_URL: String,
  type: String,
});

const EventsModel = mongoose.model("Evento", EventsSchema); // Correção: usar 'Evento' no lugar de 'eventos'

module.exports = EventsModel;
