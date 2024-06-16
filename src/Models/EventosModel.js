const mongoose = require("mongoose");
const { string } = require("zod");

const Schema = mongoose.Schema;

const EventosSchema = new Schema({
  name: {
    type: string,
    unique: true,
  },
  description: string,
  img_URL: string,
  type: string,
});

const EventosModel = mongoose.Model("eventos", EventosSchema);

module.exports = EventosModel;
