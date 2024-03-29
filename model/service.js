const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: [
    {
      title: { type: String, required: true },
      items: [
        {
          sub_title: String,
          sub_items: [String],
        },
      ],
    },
  ],
});

const Card = mongoose.model("ServiceCard", cardSchema);

module.exports = Card;
