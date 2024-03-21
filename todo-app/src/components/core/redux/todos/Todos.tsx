import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

interface Todo {
  id: string;
  text: string;
}

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);

  const handleEditClick = () => {};

  return (
    <div>
      <div className="text-center font-bold mb-4">My Todos</div>
      <ul className="flex flex-col items-center justify-center gap-2">
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center justify-between w-[560px]"
          >
            <p>{todo.text}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-[#f95959] p-2 rounded-sm hover:bg-[#d74b4b] transition duration-300 ease-in-out"
              >
                <RiDeleteBin6Line style={{ fontSize: "18px" }} />
              </button>
              <button
                onClick={handleEditClick}
                className="bg-[#44bd48] p-2 rounded-sm hover:bg-green-600 transition duration-300 ease-in-out"
              >
                <MdEdit style={{ fontSize: "18px", color: "#fff" }} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
