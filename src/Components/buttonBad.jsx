import React from "react";

const ButtonBad =({children, action})=>{
 return(
    <button onClick={action}>{children}</button>
 )
}