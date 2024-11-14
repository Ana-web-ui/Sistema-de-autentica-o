import React, { useEffect, useState } from "react";
import ButtonBad from "../Components/buttonBad";
import { useAutenticador } from "../context/Context";

const PaginaPrivada = () => {
  const { logout, loading, getUsuario } = useAutenticador();
  const [ttoken, setToken] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("user"));
    if (dados) {
      setToken(dados.token);
      const usuario = getUsuario(ttoken);
      const { token, refreshToken, userEmail } = usuario;
      setEmail(userEmail);
    }
  }, []);

  if (loading) return null;
  return (
    <div className="container-sucesso">
      <h1>Parabéns! Você está dentro!</h1>
      <p>{email}</p>
      <ButtonBad action={logout}>Log out</ButtonBad>
    </div>
  );
};

export default PaginaPrivada;
