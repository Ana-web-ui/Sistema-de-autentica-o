import React from "react";
import Register from "../context/Register";
import Login from "../context/Login";
const PageAutenticator= ()=>{
    return(

        <div className="container" id="container">
            <div className="form-container sign-up">
                <Register/>
            </div>
            <div className="form-container sign-in">
                <Login/>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bem vindo de volta!</h1>
                        <p>Insirar seus dados pessoas para acessar o nosso site</p>
                        <button className="hidden" id="login">Sing In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Olá, amigo!</h1>
                        <p>Registre seus dados pessoas para acessar o nosso site</p>
                        <button className="hidden" id="register">Sing Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageAutenticator;