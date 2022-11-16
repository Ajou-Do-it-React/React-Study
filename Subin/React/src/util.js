
export function getLocal(setterFn){
    const local = localStorage.getItem("todo");
    if (local !== null) {
      setterFn(JSON.parse(local));
    }
}

export function setLocal(todolist){
    localStorage.setItem("todo", JSON.stringify(todolist));
}
