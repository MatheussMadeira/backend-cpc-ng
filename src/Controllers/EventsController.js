const EventsModel = require("../Models/EventsModel");
class EventsController {
  async create(req, res) {
    try {
      const Event = await EventsModel.create(req.body);
      return res.status(200).json(Event);
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }
  async read(req, res) {
    try {
      const Events = await EventsModel.find();
      return res.status(200).json(Events);
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const EventsFound = await EventsModel.findById(id);
      if (!EventsFound)
        return res
          .status(404)
          .json({ message: "Evento com id" + id + "não encontrado" });
      const Event = await EventsFound.set(req.body).save();
      return res.status(200).json(Event);
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const EventsFound = await EventsModel.findById(id);
      if (!EventsFound)
        return res
          .status(404)
          .json({ message: "Evento com id" + id + "não encontrado" });

      await EventsFound.deleteOne();
      res.status(200).json({ message: "Evento deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "ERRO", error: error.message });
    }
  }
}
module.exports = new EventsController();
