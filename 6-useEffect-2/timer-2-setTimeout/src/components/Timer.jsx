import React, { useState, useEffect } from "react";

export const Timer = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>{count}</h1>;
};
