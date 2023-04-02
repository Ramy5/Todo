import React, { PropsWithChildren, useState } from "react";
import Todo from "../modal/todos-modal";

type todo = {
  items: Todo[];
  onAddHandler: (text: string) => void;
  onRemoveHandler: (id: string) => void;
};

export const TodoContext = React.createContext<todo>({
  items: [],
  onAddHandler: () => {},
  onRemoveHandler: () => {},
});

// another soluation ====> (props: { children: React.ReactNode }) for children does not exist
const TodoContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todosData, setTodosData] = useState<Todo[]>([]);

  const addTodoHandler = (todoValue: string) => {
    const newTodo = new Todo(todoValue);
    setTodosData((prev) => prev.concat(newTodo));
  };

  const removeTodoHandler = (id: string) => {
    setTodosData((prev) => prev.filter((li) => li.id !== id));
  };

  const todoValue: todo = {
    items: todosData,
    onAddHandler: addTodoHandler,
    onRemoveHandler: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={todoValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
