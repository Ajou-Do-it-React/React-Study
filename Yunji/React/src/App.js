import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoInsert from './Component/TodoInsert';
import TodoItemList from './Component/TodoItemList';

function App() {
  
  const [todos, setTodos] = useState([]); // todo 관리
  const [selected, setSelected] = useState('Todo'); // select 관리

  const nextId = useRef(0);

  /* 처음 마운트 될 때 */
  useEffect(()=>{
    const saved = localStorage.getItem("todos");
    if(saved){
      setTodos(JSON.parse(saved));
    }
  }, [])

  /* todos 변경 시 */
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  /* add 버튼 클릭 시 새로운 todo 생성 */
  const handleSubmit = (text)=>{
    const todo = {
      id: nextId.current,
      text,
      category: 'Todo',
    }
    setTodos(todos.concat(todo)); // concat 안하면 에러
    // saveToDos();
    nextId.current++;
  }

  const onRemove = (id) => {
    setTodos(todos.filter((todo)=>todo.id !== id));
    // saveToDos();
  }

  const onDoing = (id) => {
    setTodos(todos.map((todo)=>{
      if(todo.id === id) todo.category='Doing'; return todo;
    }))
    // saveToDos();
  }

  const onDone = (id) => {
    setTodos(todos.map((todo)=>{
      if(todo.id === id) todo.category='Done'; return todo;
    }))    
    // saveToDos();
  }

  return (
    <div>
      <TodoInsert onSubmit={handleSubmit} setSelected={setSelected}/>
      <TodoItemList todos={todos} selected={selected} onRemove={onRemove} onDoing={onDoing} onDone={onDone} />
    </div>
  );
}

export default App;
