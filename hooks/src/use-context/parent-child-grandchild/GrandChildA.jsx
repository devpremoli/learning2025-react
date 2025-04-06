import { useContext } from "react";
import { MyContext } from "./context";

export default function GrandChildA() {
  const context = useContext(MyContext);
  return (
    <>
      <p>{context.firstName}</p>
    </>
  );
}
