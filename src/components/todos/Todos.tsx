import { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import TodoItem from "../todo-item/TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const ctx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={ctx.onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
