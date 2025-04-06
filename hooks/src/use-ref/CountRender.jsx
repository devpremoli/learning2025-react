import { useState, useEffect, useRef } from "react";
export default function CountRender() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}
