import React, { useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTodoActions,
  RemoveTodoAction,
  successTodoActions,
} from "../action/todoActions";
import { log_out } from "../action/auth.action";

const Home = () => {
  const [todo, setTodo] = useState("");
  const complete = false;

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoActions(todo, complete));
    setTodo("");
  };

  const removeHandler = (todo) => {
    dispatch(RemoveTodoAction(todo));
  };

  const successHandler = (todo) => {
    if (window.confirm("Great! You finished this Job.")) {
      todo.complete = true;
      dispatch(successTodoActions(todo));
    }
  };

  const logOut = () =>{
    dispatch(log_out());
  }

  const { name, photoURL } = useSelector((state) => state.auth?.user);

  return (
    <div className="App">
      <header className="App-header">

        <div className="details">
          <div onClick={logOut}>
            <img src={photoURL} alt="" />
          </div>
          <div>
            <p>{name}</p>
          </div>
        </div>

        <h2>Todo List App</h2>

        <form onSubmit={handleSubmit}>
          <input
            value={todo}
            placeholder="Enter a Todo"
            type="text"
            onChange={(e) => setTodo(e.target.value)}
          />

          <button type="submit" className="add">
            Go
          </button>
        </form>

        <ul className="allTodos">
          {todos &&
            todos.map((todo) => (
              <li
                key={todo.id}
                complete
                className={!todo.complete ? "do notdone" : "do done"}
              >
                <span className="todoText">{todo.todo}</span>
                {!todo.complete ? (
                  <button
                    className="work did"
                    onClick={() => successHandler(todo)}
                  >
                    Done
                  </button>
                ) : (
                  <button
                    className="work remove"
                    onClick={() => removeHandler(todo)}
                  >
                    Delete
                  </button>
                )}
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
};

export default Home;
