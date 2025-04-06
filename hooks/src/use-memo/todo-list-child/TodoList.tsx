import { useMemo } from "react";
import { filterTodos, TodoListProps } from "./utils-todo-list";
import List from "./List";

export default function TodoList({ todos, theme, tab }: TodoListProps) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>List</code> is artificially slowed down!
        </b>
      </p>
      <List items={visibleTodos} />
    </div>
  );
}
