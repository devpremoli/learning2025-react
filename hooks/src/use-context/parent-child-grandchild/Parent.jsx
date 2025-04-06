import { useState } from "react";
import { MyContext } from "./context";
import Child from "./Child";

export default function Parent() {
  const [user] = useState({ firstName: "John", lastName: "Doe" });

  console.log(MyContext);

  return (
    <MyContext.Provider value={user}>
      <Child />
    </MyContext.Provider>
  );
}
