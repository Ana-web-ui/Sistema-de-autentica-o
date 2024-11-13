// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

const Context = createContext();
export const useAutenticador = () => useContext(Context);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    if (online) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      if (!online) {
        const resposta = await fetch("http://localhost:4000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (resposta.status === 200 || resposta.status === 201) {
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("user", JSON.stringify({ email: email }));
          setUser({ email: email });
          setOnline(true);
        }
      }
    } catch (error) {
      if (online) {
        console.log("Usuário já está logado!");
      }
    }
  };

  const register = async (email, password) => {
    try {
      const resultado = await fetch("http://localhost:4000/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      login(email, password); // Realiza login automaticamente após cadastro
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
    <AuthContext.Provider value={{ user, loading, login, register, logout, online }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
