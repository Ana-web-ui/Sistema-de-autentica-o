// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

const Context = createContext();
export const useAutenticador = () => useContext(Context);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
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
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify({ email: email }));
        setUser({ email: email });
      }
    } catch (error) {
      console.error("Login error", error);
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
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
