import React, { useEffect, useState } from "react";

const Timer = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return <h1>{count}</h1>;
};

export default Timer;
