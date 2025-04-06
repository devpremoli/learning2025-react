import { useState, memo } from "react";

const Greeting = ({ name }) => {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  const [greeting, setGreeting] = useState("Hello");
  return (
    <>
      <h3>
        {greeting}
        {name && ", "}
        {name}!
      </h3>
      <GreetingSelector value={greeting} onChange={setGreeting} />
    </>
  );
};
export default memo(Greeting);

function GreetingSelector({ value, onChange }) {
  return (
    <>
      <label>
        <input
          type="radio"
          checked={value === "Hello"}
          onChange={(e) => onChange("Hello")}
        />
        Regular greeting
      </label>
      <label>
        <input
          type="radio"
          checked={value === "Hello and welcome"}
          onChange={(e) => onChange("Hello and welcome")}
        />
        Enthusiastic greeting
      </label>
    </>
  );
}
