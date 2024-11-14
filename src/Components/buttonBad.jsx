import React from "react";

const ButtonBad =({children, action})=>{
 return(
    <button className="logout" onClick={action}>{children}</button>
 )
}

export default ButtonBad;