import { useState, useRef, useEffect } from "react";

export const UseRef = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  });

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h4>
        My name is {name} and it used to be {prevName.current}
      </h4>
    </>
  );
};
