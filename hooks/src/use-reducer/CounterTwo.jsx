import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementFirst":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrementFirst":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "resetFirst":
      return { ...state, firstCounter: initialState.firstCounter };
    case "incrementSecond":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementSecond":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "resetSecond":
      return { ...state, secondCounter: initialState.secondCounter };

    default:
      return state;
  }
};

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>CounterTwo</h2>
      <h3>firstCounter - {count.firstCounter}</h3>
      <div>
        <button onClick={() => dispatch({ type: "incrementFirst", value: 1 })}>
          Increment First
        </button>
        <button onClick={() => dispatch({ type: "decrementFirst", value: 1 })}>
          Decrement First
        </button>
        <button onClick={() => dispatch({ type: "resetFirst", value: 0 })}>
          Reset First
        </button>
        <button onClick={() => dispatch({ type: "incrementFirst", value: 5 })}>
          Increment First 5
        </button>
        <button onClick={() => dispatch({ type: "decrementFirst", value: 5 })}>
          Decrement First 5
        </button>
      </div>

      <h3>secondCounter - {count.secondCounter}</h3>
      <div>
        <button onClick={() => dispatch({ type: "incrementSecond", value: 1 })}>
          Increment Second
        </button>
        <button onClick={() => dispatch({ type: "decrementSecond", value: 1 })}>
          Decrement Second
        </button>
        <button onClick={() => dispatch({ type: "resetSecond", value: 0 })}>
          Reset Second
        </button>
        <button onClick={() => dispatch({ type: "incrementSecond", value: 5 })}>
          Increment 5
        </button>
        <button onClick={() => dispatch({ type: "decrementSecond", value: 5 })}>
          Decrement 5
        </button>
      </div>
    </>
  );
}
export default CounterTwo;
