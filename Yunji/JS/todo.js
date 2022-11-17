const todoForm=document.getElementById("todo-form");
const todoText=document.getElementById("text");
const todoList=document.getElementById("todo-list");
const doingList=document.getElementById("doing-list");
const doneList=document.getElementById("done-list");
const category = document.querySelector("select");
const button = document.querySelector("button");

let  toDos = [];
let categorys='TO-DO';

const saved = localStorage.getItem("todos");

if(saved){
  const parsed = JSON.parse(saved);
  toDos = parsed;
  parsed.forEach((toDo)=> paintTodos(toDo, toDo.classList))
}

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function doneTodo(event){
  const li = event.target.parentElement

  const newTodoObj = {
    innerText: li.childNodes[0].innerText, 
    id: li.id,
    classList: 'Done',
  }

  li.remove();
  const idx = toDos.findIndex((toDo) => toDo.id === parseInt(li.id));
  toDos[idx].classList = 'Done'

  paintTodos(newTodoObj, 'Done');
  saveToDos();

}

function doingTodo(event){
  const li = event.target.parentElement

  const newTodoObj = {
    innerText: li.childNodes[0].innerText,
    id: li.id,
    classList: 'Doing',
  }

  li.remove();

  const idx = toDos.findIndex((toDo) => toDo.id === parseInt(li.id));
  toDos[idx].classList = 'Doing'

  paintTodos(newTodoObj, 'Doing');
  saveToDos();
}

function paintTodos(newTodo, category){

  console.log(`newTodo.innerText : ${newTodo.innerText}`);

  
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add(newTodo.classList);
  const span = document.createElement('span');
  span.innerText = newTodo.innerText;
  console.log(`span.innterText: ${span.innerText}`);
  const btn_done = document.createElement("button");
  const btn_doing = document.createElement("button");
  const btn_delete = document.createElement("button");

  btn_done.innerText = 'done';
  btn_done.addEventListener("click", doneTodo);

  btn_doing.innerText = 'doing';
  btn_doing.addEventListener("click", doingTodo);

  btn_delete.innerText = '❌';
  btn_delete.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(btn_done);
  li.appendChild(btn_doing);
  li.appendChild(btn_delete);

  if(categorys==`TO-DO` && newTodo.classList == 'TO-DO'){
    todoList.appendChild(li);
    console.log("in todo");
  }
  else if(categorys == 'Doing' && newTodo.classList == 'Doing'){
    todoList.appendChild(li);
    console.log("in DOING");
  }
  else if(categorys == 'Done' && newTodo.classList == 'Done'){
    todoList.appendChild(li);
    console.log("in Done");
  }

}

function removeAll(){
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  while (doingList.firstChild) {
    doingList.removeChild(doingList.firstChild);
  }
  while (doneList.firstChild) {
    doneList.removeChild(doneList.firstChild);
  }
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo = todoText.value;
  const newTodoObj = {
    innerText: newTodo,
    id: Date.now(),
    classList: 'TO-DO',
  }
  toDos.push(newTodoObj);
  todoText.value = '';
  paintTodos(newTodoObj, newTodoObj.classList);
  saveToDos();
}

function handleChangeSelect(event){
  console.log(`select 변경: ${event.target.value}`);
  categorys = event.target.value;
  removeAll();
  toDos.forEach((toDo)=> paintTodos(toDo, categorys));
}

todoForm.addEventListener("submit", handleTodoSubmit);
category.addEventListener("change", handleChangeSelect);