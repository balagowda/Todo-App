export const AddTodoActions = (todo,complete) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i.todo === todo);

  if (!hasTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: [{ id: todo,complete, todo }, ...todos],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((t) => t.id !== todo.id),
  });
};

export const successTodoActions = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  todos.push(todos.splice(todos.indexOf(todo), 1)[0]);

  dispatch({
    type: "SUCCESS_TODO",
    payload:  [...todos],
  });
};
