import { useState } from "react";

const Counter = () => {
    const[time, setTime] = useState(0)
  const count = () => {
    setTime(time + 1)
  };
  return (
    <div>
      <p>
        <p>{time}</p>
        <button onClick={count}>counter</button>
      </p>
    </div>
  );
};
export default Counter;
