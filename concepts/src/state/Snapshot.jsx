import { useState } from "react";

function Snapshot() {
  const [a, setA] = useState(0);
  const [number, setNumber] = useState(0);

  function handleClick() {
    // React does not change the state variable upon setting it. Instead, it schedules a re-render with the updated state.
    setA(1);
    console.log("a in event handler: ", a); // 0
  }

  return (
    <>
      <h2>a State</h2>
      {console.log("Rendered a: ", a)}
      <p>a: {a}</p>
      <button onClick={handleClick}>A</button>

      <h2>number state</h2>
      <p>number: {number}</p>

      <button
        /*
          React waits until all code in the event handlers has run before it re-renders the component with updated state. 
          This means all the setState calls in this event handler are batched together, using the same "snapshot" of state.
          */
        onClick={() => {
          // 1
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);

          // 3
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);

          // 1
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber(number + 1);

          // 42
          setNumber(number + 1);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        Queueing
      </button>
    </>
  );
}
export default Snapshot;
