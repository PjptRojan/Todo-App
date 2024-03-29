import { createSlice, nanoid } from "@reduxjs/toolkit";
interface Todo {
  id: string;
  text: string;
}

const initialState = {
  todos: [{ id: "1", text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo : Todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      state.todos = state.todos.map(item => {       
        if(item.id === updatedTodo.id){
          return {...item, ...updatedTodo}
        }
        return item
      })
    }
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
