import { useState } from "react";
import TodoList from "./TodoList";
import { createTodos, TabFilter } from "./utils-todo-list";

const todos = createTodos();

export default function TodoListChildDemo() {
  const [tab, setTab] = useState<TabFilter>("all");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("active")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
    </>
  );
}
