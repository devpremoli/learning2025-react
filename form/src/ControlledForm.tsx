import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Name: " + name);
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Updates state on each change
      />
      <button type="submit">Submit</button>
    </form>
  );
}
