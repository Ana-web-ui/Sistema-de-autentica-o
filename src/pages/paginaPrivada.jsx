import React from "react";
import ButtonBad from "../Components/buttonBad";
import { useAutenticador } from "../context/Context";

const PaginaPrivada= ()=>{

    const {logout} = useAutenticador();
    return(
        <div className="container-sucesso">
        <h1>Parabéns! Você está dentro!</h1>
        <ButtonBad action={logout}>Log out</ButtonBad>
        </div>



    )
}

export default PaginaPrivada