import TodoItem from './TodoItem';
import React from 'react';

function TodoItemList({todos, onRemove, onDoing, onDone, selected}){
  return (
    <div>
      {todos.map((todo)=>{
        if(selected !== todo.category) return;
        return <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onDoing={onDoing} onDone={onDone}/> // return 안하면 안나온다
        // key={todo.id}는 왜 넣는걸까
      })}
      
    </div>
  )
}

export default TodoItemList;