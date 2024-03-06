import { useState } from "react";
import Namechanger from "../components/namechanger";

const Parentnamechanger = () => {
    const [home , sethome] = useState ("poiu")
    console.log(home)

    const Bag = () =>{
        sethome ("fhhd")
    }
  return (
    
      <div>
            <button onClick={Bag}>click on</button>

      {/* <Namechanger /> */}
      </div>
        
    
  );
};
export default Parentnamechanger;
