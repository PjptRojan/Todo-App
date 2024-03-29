export const updateTodo = (id:string, text:string) => ({
    type: 'todos/updateTodo',
    payload: { id, text}
  })