import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

const useCount = initialValue => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log("Count updated!");
  }, [count]);

  return [count, setCount];
};

export const CustomHook = () => {
  const match = useRouteMatch("/custom-hook");
  return (
    match && (
      <>
        <h3>Custom Hook</h3>
        <div style={{ display: "flex" }}>
          <div style= {{ paddingRight: "20px"}}>
            <Counter1 />
          </div>
          <Counter2 />
        </div>
      </>
    )
  );
};

const Counter1 = () => {
  const [count, setCount] = useCount(0);
  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={onClick}>Add One</button>
    </div>
  );
};

const Counter2 = () => {
  const [count, setCount] = useCount(100);
  const onClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={onClick}>Subtract One</button>
    </div>
  );
};
