const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: "string",
    required: true,
  },
  complete: {
    type: "boolean",
    default: false,
  },
  timestamp: {
    type: "string",
    default: Date.now(),
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
