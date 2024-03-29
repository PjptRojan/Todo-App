import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

interface InputProps {
  input: string;
  setInput: (value: string) => void;
  buttonClicked: boolean;
  setButtonClicked: (value: boolean) => void;
  todoId: string;
}

function AddTodo(props: InputProps) {
  const { input, setInput, buttonClicked, setButtonClicked, todoId } = props;
  const dispatch = useDispatch();
  console.log("buttonClicked", buttonClicked);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
    console.log("innnnnnnnnn");
  };

  const handleUpdateClick = () => {
    const payload = {
      id: todoId,
      text: input,
    };
    dispatch(updateTodo(payload));
    setButtonClicked(!buttonClicked);
    setInput("");
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-center items-center gap-6 py-6"
      >
        <input
          type="text"
          placeholder="Enter your todos..."
          className="px-3 py-2 border border-black rounded-md w-[350px] bg-gray-800 text-white"
          value={input}
          onChange={handleInputChange}
        />
        {!buttonClicked ? (
          <button
            type="submit"
            className="bg-[#e3e3e3] px-2 text-sm rounded-md hover:bg-white transition duration-300 font-semibold h-[40px]"
          >
            Add todo
          </button>
        ) : (
          <div
            className="bg-[#e3e3e3] px-2 text-sm rounded-md hover:bg-white transition duration-300 font-semibold h-[40px] flex items-center"
            onClick={() => handleUpdateClick()}
          >
            <p>Update</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default AddTodo;
