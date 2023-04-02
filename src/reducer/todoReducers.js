const todoReducers = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: action.payload,
      };
    case "REMOVE_TODO":
      return {
        todos: action.payload,
      };
    case "SUCCESS_TODO":
      return{
        todos:action.payload,
      }

    default:
      return state;
  }
};

export default todoReducers;
