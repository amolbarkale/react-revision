import { useState, useRef, createRef, useEffect } from "react";

export const Couter = () => {
  const [counter, setCounter] = useState(0);

  const prev = useRef("");

  useEffect(() => {
    prev.current = counter;
  }, [counter]);

  const handeClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>{prev.current}</h1>
      <h1>{counter}</h1>
      <button onClick={handeClick}>Increase</button>
    </>
  );
};
