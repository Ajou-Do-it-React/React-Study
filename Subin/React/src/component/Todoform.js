import Todoitem from "./Todoitem";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { TodoContext } from "./Context.js";
import { toDoState, Categories, categoryState, toDoSelector } from "./atom";

function Todoform() {
  const [value, setValue] = useState("");
  const todofilter = useRecoilValue(toDoSelector);
  const [todolist, setTodolist] = useRecoilState(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todolist));
  }, [todolist]);

  const getLocal = () => {
    const local = localStorage.getItem("todo");
    if (local !== null) {
      setTodolist(JSON.parse(local));
    }
  };

  const onChange = (event) => {
    const cur = event.target.value;
    setValue(cur);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const item = {
      text: value,
      id: Date.now(),
      category: category,
    };
    setTodolist([...todolist, item]);
    setValue("");
  };

  const makeTodo = () =>
    todofilter.map((val) => (
      <Todoitem
        key={val.id}
        id={val.id}
        text={val.text}
        category={val.category}
      />
    ));

  const onInput = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <select onInput={onInput}>
        <option value={Categories.TO_DO}>{Categories.TO_DO}</option>
        <option value={Categories.DOING}>{Categories.DOING}</option>
        <option value={Categories.DONE}>{Categories.DONE}</option>
      </select>
      <form onSubmit={onSubmit}>
        <label htmlFor="inputbox">Todo List : </label>
        <input
          type="text"
          id="inputbox"
          maxLength="15"
          placeholder="Write to do here"
          value={value}
          required
          onChange={onChange}
        ></input>
        <button>ADD</button>
        <ul>{makeTodo()}</ul>
      </form>
    </div>
  );
}

export default Todoform;
