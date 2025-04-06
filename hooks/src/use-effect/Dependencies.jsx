import { useEffect, useState } from "react";

function Dependencies() {
  const [count, setCount] = useState(0);
  const [notCount, setNotCount] = useState(0);
  const [cleanupCount, setCleanupCount] = useState(0);

  // only run after the initial render
  useEffect(() => console.log("MyComponent mounted "), []);

  // after every renders
  useEffect(() => console.log("MyComponent rendered"));

  // runs after the initial render and after re-renders with changed dependencies
  useEffect(() => {
    console.log(`Count rendered: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`CleanupCount rendered: ${cleanupCount}`);
    // on unmount
    return () => console.log(`CleanupCount unmounted: ${cleanupCount}`);
  }, [cleanupCount]);

  return (
    <>
      <h1>CountUseEffect</h1>
      <button
        onClick={() => {
          setCount((c) => c + 10);
        }}
      >
        Count: {count}
      </button>
      <button
        onClick={() => {
          setNotCount((c) => c + 10);
        }}
      >
        Not Count: {notCount}
      </button>
      <button
        onClick={() => {
          setCleanupCount((c) => c + 10);
        }}
      >
        Cleanup Count: {cleanupCount}
      </button>
      <br />
    </>
  );
}
export default Dependencies;
