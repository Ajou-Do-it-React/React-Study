import { setLocal } from "./InitLocal.js"; // 
import MakeTodo from "./MakeTodo.js"; // 
import { category } from "./TodoAtom.js";
import DisplayItems from "./DisplayItems.js";

function onSumbit(event, todoState) {
  const todoInput = document.querySelector("#input");
  const todoList = document.querySelector("#todo-list");
  event.preventDefault();
  const value = todoInput.value;
  const toDoobj = {
    text: value,
    id: Date.now(),
    category: category.TO_DO,
  };//
  todoState.add(toDoobj);
  todoList.appendChild(MakeTodo(toDoobj, todoState));
  todoInput.value = "";
  setLocal(todoState.getTodo());
}

function onChange(event, todoState) {
  const value = event.target.value;
  DisplayItems(value, todoState);
}

function AddEvents(todoState) {
  const form = document.querySelector(".todoForm");
  const selector = document.querySelector("select");
  form.addEventListener("submit", (event) => onSumbit(event, todoState));
  selector.addEventListener("change", (event) => onChange(event, todoState));
}

export default AddEvents;

