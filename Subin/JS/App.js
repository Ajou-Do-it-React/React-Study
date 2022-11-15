import InitLocal from "./component/InitLocal.js";
import { Todo } from "./component/TodoAtom.js";
import AddEvents from "./component/AddEvents.js";
import DisplayItems from "./component/DisplayItems.js";

function App() {
  
  const todoState = new Todo();

  AddEvents(todoState);
  InitLocal(todoState);
}

App();
