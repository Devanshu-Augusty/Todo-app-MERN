const mongoose = require("mongoose");

mongoose.connect(
  "your-connection-string/database_name"
);

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = { Todo };