import React from "react";

const AddTodo = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <div
      className="flex flex-col justify-start gap-2 items-start
     bg-red-500 m-2 p-2 w-[300px] h-32 rounded-md"
    >
      <input
        type="text"
        name="name"
        className="p-1 border-blue-500 border
        rounded-md"
        placeholder="Enter Title"
        value={todo.name}
        onChange={(e) =>
          setTodo({
            ...todo,
            name: e.target.value,
          })
        }
      />
      <input
        type="text"
        name="description"
        className="p-1 border border-black
        rounded-md"
        placeholder="Enter Description"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <button
        onClick={handleAddTodo}
        className="bg-green-500 p-1 rounded-md text-sm"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
