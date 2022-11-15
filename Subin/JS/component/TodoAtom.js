export const category = Object.freeze({
  TO_DO: "TO_DO",
  DOING: "DOING",
  DONE: "DONE",
}); //상수 동결

//상수 == 객체형태로 정의 >> 자동완성 + 실수안하려고 + 가독성
// enum 

export const Todo = (function () {
  let todo = []; // 은닉

  function NewTodo() {} //생성자함수

  NewTodo.prototype.setTodo = function (array) {
    todo = array;
  };
  NewTodo.prototype.getTodo = function () {
    return todo;
  };
  NewTodo.prototype.add = function (obj) {
    todo.push(obj);
  };

  return NewTodo;
})();
//클로저형태 > 객체 생성자 or class.

