function DisplayItems(selected, todoState) {
    
  const todoList = document.querySelector("#todo-list");
  const items = todoList.children; 
  const itemArray = [...items]; // 배열로 반환해서 쓰시는게 안전합니다.
  console.log(itemArray);

  itemArray.forEach((val, idx) => {
    const btnArray = [...val.children];

    if (todoState.getTodo()[idx].category === selected) {
      val.classList.remove("hidden");
    } else {
      val.classList.add("hidden");
    }

    btnArray.forEach((btn) => {
      if (btn.innerText === selected) {
        btn.classList.add("hidden");
      } else {
        btn.classList.remove("hidden");
      }
    });
  });
}

export default DisplayItems;
