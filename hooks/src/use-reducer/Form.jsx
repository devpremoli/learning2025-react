import { useReducer } from "react";

const initialState = { name: "Taylor", age: 42 };

/*
- It is pure function that takes the state and action as argument, and returns the next state.
- State and action can be of any types.
*/
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        ...state,
        name: action.nextName,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export default function Form() {
  /*
    returns an array with exactly two values:
    - The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
    - The dispatch function that lets you update the state to a different value and trigger a re-render.
    */
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    /*
    
    */
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
}
