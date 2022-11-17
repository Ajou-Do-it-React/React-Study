import React from 'react';

function TodoItem({todo, onRemove, onDoing, onDone}){

  const {id, text} = todo;

  return (
    <div>
      {text}
      <button onClick={()=>onDoing(id)}>doing</button>
      <button onClick={()=>onDone(id)}>done</button>
      <button onClick={()=>onRemove(id)}>delete</button>
    </div>
  )
}

export default TodoItem;