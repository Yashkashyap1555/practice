import { useState } from "react";
import Login from "../pages/login";

const Asus = (props) => {
    // console.log(props)
  const [data, setData] = useState("monu");
  console.log(data);
  

  return (
    <div>
      <p>{data} </p>
      
    </div>
  );
};
export default Asus;
