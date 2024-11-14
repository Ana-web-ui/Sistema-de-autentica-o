// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

const Context = createContext();
export const useAutenticador = () => useContext(Context);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const usuarioArmazenado =localStorage.getItem('user')
    const tokenArmazenado =localStorage.getItem('token')
    if (usuarioArmazenado && tokenArmazenado) {
      setUser(usuarioArmazenado);
      setOnline(true);

      console.log(online);
      
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      
        const resposta = await fetch("http://localhost:4000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (resposta.status === 200 || resposta.status === 201) {
          const dados = await resposta.json()
          const {token, refreshToken, email:userEmail}= dados
          setUser(dados);
          setOnline(true);
          console.log(online);
          
          localStorage.setItem("token", dados.token);
          localStorage.setItem("refreshToken", dados.refreshToken);
          localStorage.setItem("user", JSON.stringify(dados));

          console.log("tá dentro");
          
          
        }
    } catch (error) {
       console.log(error);
      
    }
  };

  const register = async (email, password) => {
    try {
      const resposta = await fetch("http://localhost:4000/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (resposta.status === 200 || resposta.status === 201){
        console.log("Sucesso!");
        
      }
      // login(email, password); // Realiza login automaticamente após cadastro
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setOnline(false);
  };

  return (
    <Context.Provider value={{ user, loading, login, register, logout, online }}>
      {children}
    </Context.Provider>
  );
};


