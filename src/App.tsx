import TodoContextProvider from "./components/context/todo-context";
import NewTodo from "./components/new-todo/NewTodo";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
