import DisplayItems from "./DisplayItems.js";
import MakeTodo from "./MakeTodo.js";
import { category } from "./TodoAtom.js";

export function setLocal(todo) {
  localStorage.setItem("todo", JSON.stringify(todo));
}
// JSON.stringfy()

export function getLocal() {
  return localStorage.getItem("todo"); //key >JSON.parse
}

function InitLocal(todoState) {
  const todoList = document.querySelector("#todo-list");

  if (getLocal() !== null) {
    todoState.setTodo(JSON.parse(getLocal())); // todoState > 데이터를 저장 코드에 있는 todo
    todoState.getTodo().forEach((val) => {
      todoList.appendChild(MakeTodo(val, todoState));
    });//
    DisplayItems(category.TO_DO, todoState); // view > 바뀜 
  }
}

export default InitLocal;
