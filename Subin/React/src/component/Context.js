import React from "react";
import { useState, createContext } from "react";

export const TodoContext = createContext({
  todolist: [],
  setTodolist: () => {},
});

const TodoProvider = ({ children }) => {
  const [todolist, setTodolist] = useState([]);

  return (
    <TodoContext.Provider
      value={{
        todolist,
        setTodolist,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
