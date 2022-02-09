import React, { useEffect, useState } from "react";

export default function CleanUp() {
  const [width, setWidtch] = useState(window.screen.width);

  const actualWidth = () => {
    setWidtch(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <>
      <div>Actual size of screen is</div>
      <h1>{width}</h1>
    </>
  );
}
