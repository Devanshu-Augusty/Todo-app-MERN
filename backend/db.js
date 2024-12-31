const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Augus7:dev4830R@cluster0.uexew6m.mongodb.net/todo_app"
);

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = { Todo };