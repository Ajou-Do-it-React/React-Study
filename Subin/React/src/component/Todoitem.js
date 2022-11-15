import React from "react";
import { TodoContext } from "./Context.js";
import { useContext } from "react";
import { toDoState, Categories, categoryState } from "./atom.js";
import { useRecoilValue, useRecoilState } from "recoil";

function Todoitem({ id, text }) {
  const [todo, setTodolist] = useRecoilState(toDoState);
  const categoryAll = useRecoilValue(categoryState);

  const deleteItem = (event) => {
    const id = event.target.id;
    setTodolist((current) =>
      current.filter((todo) => todo.id !== parseInt(id))
    );
  };

  const onClick = (event) => {
    console.log(event.target.id);
    const targetIndex = todo.findIndex(
      (todo) => todo.id === parseInt(event.target.id)
    );
    const newTodo = {
      text: text,
      id: id,
      category: event.target.name,
    };
    const prev = todo.slice(0, targetIndex);
    const next = todo.slice(targetIndex + 1);

    setTodolist([...prev, newTodo, ...next]);
  };

  console.log(todo);

  return (
    <div className="todo">
      <li id={id}>{text}</li>
      {categoryAll !== Categories.TO_DO && (
        <button id={id} name={Categories.TO_DO} onClick={onClick}>
          {Categories.TO_DO}
        </button>
      )}
      {categoryAll !== Categories.DOING && (
        <button id={id} name={Categories.DOING} onClick={onClick}>
          {Categories.DOING}
        </button>
      )}
      {categoryAll !== Categories.DONE && (
        <button id={id} name={Categories.DONE} onClick={onClick}>
          {Categories.DONE}
        </button>
      )}
      <button id={id} onClick={deleteItem}>
        ❌
      </button>
    </div>
  );
}

export default Todoitem;
