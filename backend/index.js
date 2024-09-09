const express = require("express");
const app = express();
const cors = require("cors");
const { todoType, todoIDtype } = require("./type");
const { Todo } = require("./db");

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  try {
    const todoPayload = req.body;
    console.log(todoPayload);
    const response = todoType.safeParse(todoPayload);
    if (response.success) {
      // add to backend
      await Todo.create({
        name: todoPayload.name,
        description: todoPayload.description,
        completed: todoPayload.completed,
      });
      res.json({ message: "todo added successfully" });
    } else {
      console.log(response);
      res.status(404).json({ message: "error" + " " + response.error });
    }
  } catch (error) {
    res.status(501).json({ message: "Internal server error" + " " + error });
  }
});

app.get("/todo", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ todos });
  } catch (error) {
    res.status(501).json({ message: "Internal server error" + " " + error });
  }
});

app.post("/completed/:todoID", async (req, res) => {
  try {
    const todoID = req.params.todoID;
    const response = todoIDtype.safeParse(todoID);
    if (response.success) {
      await Todo.updateOne(
        {
          _id: todoID,
        },
        {
          $set: { completed: true },
        }
      );
      const updateTodos = await Todo.find({});
      res.json({ updateTodos });
    }
  } catch (error) {
    res.status(501).json({ message: "Internal server error" + " " + error });
  }
});

app.listen(3000, () => {
  console.log("listening of port 3000");
});
