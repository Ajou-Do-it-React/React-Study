import { atom, selector } from "recoil";

export const Categories = Object.freeze({
  TO_DO: "TO_DO",
  DOING: "DOING",
  DONE: "DONE",
});

export const toDoState = atom({
  key: "toDo",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
