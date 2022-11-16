import Todoitem from "./Todoitem";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { TodoContext } from "./Context.js";
import { toDoState, Categories, categoryState, toDoSelector } from "./atom";
import { getLocal, setLocal } from "../util"

function Todoform() {
  const [value, setValue] = useState("");
  const todofilter = useRecoilValue(toDoSelector);
  const [todolist, setTodolist] = useRecoilState(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);

  useEffect(() => {
    getLocal(setTodolist);
  }, []);

  useEffect(() => {
    setLocal(todolist);
  }, [todolist]);

  const handleChange = (event) => {
    const cur = event.target.value;
    setValue(cur);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      text: value,
      id: Date.now(),
      category: category,
    };
    setTodolist([...todolist, item]);
    setValue("");
  };

  const handleInput = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <select onInput={handleInput}>
        <option value={Categories.TO_DO}>{Categories.TO_DO}</option>
        <option value={Categories.DOING}>{Categories.DOING}</option>
        <option value={Categories.DONE}>{Categories.DONE}</option>
      </select>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputbox">Todo List : </label>
        <input
          type="text"
          id="inputbox"
          maxLength="15"
          placeholder="Write to do here"
          value={value}
          required
          onChange={handleChange}
        ></input>
        <button>ADD</button>
        <ul>{
          todofilter.map((val) => (
            <Todoitem
              key={val.id}
              id={val.id}
              text={val.text}
              category={val.category} />))
              }</ul>
      </form>
    </div>
  );
}

export default Todoform;
