import { useContext } from "react";
import { MyContext } from "./context";

export default function GrandChildB() {
  const context = useContext(MyContext);
  return (
    <>
      <p>{context.lastName}</p>
    </>
  );
}
