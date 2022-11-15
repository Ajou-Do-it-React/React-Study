import React from "react";
import "./style.css";
import Todoform from "./component/Todoform.js";
import TodoProvider from "./component/Context.js";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <TodoProvider>
      <RecoilRoot>
        <Todoform />
      </RecoilRoot>
    </TodoProvider>
  );
}

export default App;
