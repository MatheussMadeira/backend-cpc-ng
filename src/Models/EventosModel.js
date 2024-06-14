const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventosSchema = new Schema({
  nome: {
    type: string,
    unique: true,
  },
  descricao: string,
  img_URL: string,
  Tipo: {
    type: string,
    unique: true,
  },
  id_evento: {
    type: Schema.Types.ObjectId,
    ref: "eventos",
    unique: true,
  },
});

const EventosModel = mongoose.Model("eventos", EventosSchema);

module.exports = EventosModel;
