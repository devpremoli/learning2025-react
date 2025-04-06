import { useRef } from "react";

export default function UncontrolledForm() {
  const nameInput = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Null check before accessing current
    if (nameInput.current) {
      alert("Name: " + nameInput.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={nameInput} // Use ref to access input value
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// https://www.freecodecamp.org/news/what-are-controlled-and-uncontrolled-components-in-react/
