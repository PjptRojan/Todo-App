import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center items-center gap-6 py-6"
    >
      <input
        type="text"
        placeholder="Enter your todos..."
        className="px-3 py-2 border border-black rounded-md w-[350px] bg-gray-800"
        value={input}
        onChange={handleInputChange}
      />
      <button className="bg-[#e3e3e3] px-2 text-sm rounded-md hover:bg-white transition duration-300 font-semibold h-[40px]">
        Add todo
      </button>
    </form>
  );
}

export default AddTodo;
