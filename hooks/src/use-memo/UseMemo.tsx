import TodoListChildDemo from "./todo-list-child/TodoListChildDemo";
import TodoListDemo from "./todo-list/TodoListDemo";
import TodoDemo from "./TodoDemo";

export default function UseMemo() {
  return (
    <>
      <TodoDemo />
      <hr />
      <TodoListDemo />
      <hr />
      <TodoListChildDemo />
    </>
  );
}
