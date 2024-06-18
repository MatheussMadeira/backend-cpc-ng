const mongoose = require("mongoose");
const { string } = require("zod");

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  name: {
    type: string,
    unique: true,
  },
  description: string,
  img_URL: string,
  type: string,
});

const EventsModel = mongoose.Model("eventos", EventsSchema);

module.exports = EventsModel;
