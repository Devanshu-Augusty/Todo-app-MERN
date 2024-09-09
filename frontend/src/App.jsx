import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const intitialTodo = {
    name: "",
    description: "",
    completed: false,
  };

  const [todo, setTodo] = useState(intitialTodo);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await fetch("http://localhost:3000/todo");
    const data = await response.json();
    const allTodos = data.todos.map((todo) => {
      return {
        id: todo._id,
        name: todo.name,
        description: todo.description,
        completed: todo.completed,
      };
    });
    setTodos(allTodos);
  };

  const handleAddTodo = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tells the server you're sending JSON
      },
      body: JSON.stringify(todo),
    };
    const postResponse = await fetch("http://localhost:3000/todo", options);
    const postData = await postResponse.json();
    getTodos();
    setTodo(intitialTodo);
  };

  const handleCompleted = async (completed, todoId) => {
    if (completed) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tells the server you're sending JSON
        },
      };
      const response = await fetch(
        `http://localhost:3000/completed/${todoId}`,
        options
      );
      const data = await response.json();
      const allTodos = data.updateTodos.map((todo) => {
        return {
          id: todo._id,
          name: todo.name,
          description: todo.description,
          completed: todo.completed,
        };
      });
      setTodos(allTodos);
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div>
          <AddTodo
            todo={todo}
            setTodo={setTodo}
            handleAddTodo={handleAddTodo}
          />
          <div className="m-2 flex flex-col justify-center items-start w-full">
            {todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.name}
                  description={todo.description}
                  completed={todo.completed}
                  handleCompleted={handleCompleted}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
