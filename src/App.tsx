import { useState } from "react";
import AddTodo from "./components/core/redux/addTodo/AddTodo";
import Todos from "./components/core/redux/todos/Todos";

function App() {
  const [input, setInput] = useState<string>("");
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [todoId, setTodoId] = useState<string>("");

  return (
    <div className="max-w-[1100px] mx-auto my-20 bg-[#455d7a] border rounded-lg shadow-lg py-6 gap-2 ">
      <h1 className="text-gray-100 text-center text-lg font-semibold">
        Learning about Redux Toolkit
      </h1>
      <AddTodo
        input={input}
        setInput={setInput}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
        todoId={todoId}
      />
      <Todos
        input={input}
        setInput={setInput}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
        setTodoId={setTodoId}
      />
    </div>
  );
}

export default App;
