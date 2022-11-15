import { setLocal } from "./InitLocal.js";
import { category } from "./TodoAtom.js";

function deleteToDo(event, todoState) {
  const li = event.target.parentElement;
  const filtered = todoState
    .getTodo()
    .filter((obj) => obj.id !== parseInt(li.id)); // id === String. 
  todoState.setTodo(filtered); // 데이터변경
  console.log(todoState.getTodo());
  li.remove(); // UI를변경.
  setLocal(filtered); // db의 데이터 변경
}

function makeCategory(event, todoState) {
  const todo = todoState.getTodo();
  event.preventDefault(); // form태그 button click, enter > form data action url 전송 막아주는거에요.
  const targetParent = event.target.parentElement; //li
  const targetId = targetParent.id;
  const targetIdx = todo.findIndex(
    (element) => element.id === parseInt(targetId)
  );
  todo[targetIdx].category = event.target.innerText; // doing.
  targetParent.classList.add("hidden");
  setLocal(todo);
}

function MakeTodo(toDoobj, todoState) {
  const { text, id } = toDoobj;

  const li = document.createElement("li"); // <li> </li>
  const span = document.createElement("span");
  const btn_todo = document.createElement("button");
  const btn_doing = document.createElement("button");
  const btn_done = document.createElement("button");
  const btn_del = document.createElement("button");
  span.innerText = text;
  btn_todo.innerText = category.TO_DO;
  btn_todo.classList.add("hidden");
  btn_doing.textContent = category.DOING;
  btn_done.textContent = category.DONE;
  btn_del.textContent = "❌";

  btn_todo.addEventListener("click", (event) => makeCategory(event, todoState)); //
  btn_doing.addEventListener("click", (event) =>
    makeCategory(event, todoState)
  );
  btn_done.addEventListener("click", (event) => makeCategory(event, todoState));
  btn_del.addEventListener("click", (event) => deleteToDo(event, todoState));

  
  li.appendChild(span);
  li.appendChild(btn_todo);
  li.appendChild(btn_doing);
  li.appendChild(btn_done);
  li.appendChild(btn_del); 
  // 1. 데이터받음 > htmlTemplate로 만든다음 템플릿리터럴로 변수를 넣음 >> 직관적이고 명료함. > 너무 rendering innerHTML

// 2. 이것처럼 element를 만드는 과정 > 배열 > 필요한 값들을 넣어주는것을 반복 > JS Fragment Tag const fragment = new DocumentFragment();
 // 이걸 container appendChild >> 써야됨. // 1번밖에 dom업데이트

  return li;
}

export default MakeTodo;
