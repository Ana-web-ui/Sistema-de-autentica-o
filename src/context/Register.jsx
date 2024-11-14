import React, { useContext, useState } from "react";
import { useAutenticador } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAutenticador();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    
      <form onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <span>ou use seu email para registrar</span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>

  );
};

export default Register;
