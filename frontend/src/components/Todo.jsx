import React, { useState } from "react";

const Todo = ({ id, title, description, completed, handleCompleted }) => {
  return (
    <div
      className="flex flex-col justify-start items-start gap-1 divide-y-2
      p-2"
    >
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{description}</p>
      {completed ? (
        <p className="text-slate-600">Completed</p>
      ) : (
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => handleCompleted(e.target.checked, id)}
        />
      )}
    </div>
  );
};

export default Todo;
