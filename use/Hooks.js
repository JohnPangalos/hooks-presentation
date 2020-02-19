import React, { useState, useEffect } from "react";

export const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated!");
  }, [count]);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h3>Hooks</h3>
      <div>Count: {count}</div>
      <button onClick={onClick}>Add One</button>
    </>
  );
};
