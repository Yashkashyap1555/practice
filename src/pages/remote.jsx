import { useState } from "react";

// 1st functional component  is remote
const Remote = () => {
  const [data, setdata] = useState("coding");
  console.log(data);

  // 2nd function is Charger
  const Charger = () => {
    setdata("recoding");
  };

  return (
    <div>
        <h2>best coder {data}</h2>
      <button onClick={Charger}>"Click it"</button>
    </div>
  );
};

export default Remote;
