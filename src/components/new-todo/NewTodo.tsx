import { useContext, useRef } from "react";
import { TodoContext } from "../context/todo-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodoContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoText = todoInputRef.current!.value;

    if (todoText.trim().length === 0) return;

    ctx.onAddHandler(todoText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo">Add Todo</label>
      <input type="text" id="todo" ref={todoInputRef} />
      <button>Done</button>
    </form>
  );
};

export default NewTodo;
