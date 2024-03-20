import AddTodo from "./components/core/redux/addTodo/AddTodo";
import Todos from "./components/core/redux/todos/Todos";

function App() {
  return (
    <div className="max-w-[1100px] mx-auto my-20 bg-[#455d7a] border rounded-lg shadow-lg py-6 gap-2 ">
      <h1 className="text-gray-100 text-center text-lg font-semibold">
        Learning about Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
