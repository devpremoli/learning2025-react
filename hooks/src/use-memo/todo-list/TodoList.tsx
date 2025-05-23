import { useMemo } from "react";
import { filterTodos, TodoListProps } from "./utils-todo-list";

export default function TodoList({ todos, theme, tab }: TodoListProps) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <>
      <div className={theme}>
        <p>
          <b>
            Note: <code>filterTodos</code> is artificially slowed down!
          </b>
        </p>
        <ul>
          {visibleTodos.map((todo) => (
            <li key={todo.id}>
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
