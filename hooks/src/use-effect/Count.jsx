import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect: ", count);
  }, [count]);

  function handleClick() {
    setCount(count + 1);
    console.log("handleClick: ", count);
  }

  return (
    <>
      <p>count: {count}</p>
      <button onClick={handleClick}>Increase Count</button>
    </>
  );
}
