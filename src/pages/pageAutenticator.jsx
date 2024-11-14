import React, {useContext, useEffect, useState} from "react";
import Register from "../context/Register";
import Login from "../context/Login";
const PageAutenticator= ()=>{

    const [click, setBtnId] = useState(null);
    useEffect(()=>{
        const container = document.getElementById("container");
        const registerBtn = document.getElementById("register");
        const loginBtn = document.getElementById("login");
        registerBtn.addEventListener('click', ()=>{
            container.classList.add("active");
            
        })

        loginBtn.addEventListener('click', ()=>{
            container.classList.remove("active");
            
        })
        
        
    },[click]);
    const handleClick = (e)=>{
        setBtnId(e.target.id);
    };
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
                        <button className="hidden" id="login" onClick={handleClick}>Sing In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Olá, amigo!</h1>
                        <p>Registre seus dados pessoas para acessar o nosso site</p>
                        <button className="hidden" id="register" onClick={handleClick}>Sing Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageAutenticator;