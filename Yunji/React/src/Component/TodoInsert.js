import React, { useState } from "react";

function TodoInsert({onSubmit, setSelected}){
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!content) return; // 창 비었을 때
    onSubmit(content);
    setContent(""); // input창 비우기
  }

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  }
  // useEffect(()=>{
  //   ref.current.focus();
  // }, []); // 두번째 인자로 빈배열이 오면 컴포넌트가 mount됐을때만 실행. 값이 있으면 해당 값이 변경될 때 실행

  return (
    <div>
      <select name="category" onChange={handleSelectChange}>
        <option value="Todo">TO-DO</option>
        <option value="Doing">DOING</option>
        <option value="Done">DONE</option>
      </select> 
      <form onSubmit={handleSubmit}>
        <input type='text' name='text' placeholder='input here' value={content} onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>add</button>
      </form>
    </div>
  )
}

export default TodoInsert;