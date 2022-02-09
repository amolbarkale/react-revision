import { useState, useMemo } from "react";

const slowFunc = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

export const Memoization = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunc(num);
  }, [num]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => setDark((dark) => !dark)}>Change theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
};
