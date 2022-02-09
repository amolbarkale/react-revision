import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function UseRedu() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const incr = () => {
    dispatch({ type: "increment" });
  };
  const decr = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <>
      <div>
        <h3>{state.count}</h3>
        <button onClick={incr}>asf</button>
        <button onClick={decr}>gfads</button>
      </div>
    </>
  );
}
