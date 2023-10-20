import { useState } from "react";
import ReactDOM from "react-dom/client";

 const FavoriteColor =() => {
  const [color, setColor] = useState({});

  return (
    
    <>
       
      <h1 style={{color:`${color}`}}>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}
export default FavoriteColor