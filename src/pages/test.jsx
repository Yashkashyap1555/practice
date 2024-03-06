import { useState } from "react";
const Test = () => {
  const [data, setdata] = useState("hello");
  console.log(data);
  const jkjk = () => {
    setdata("mdndnd,ndndn");
  };

  return (
    <>
      <div onClick={jkjk}>{data}</div>
    </>
  );
};

export default Test;
