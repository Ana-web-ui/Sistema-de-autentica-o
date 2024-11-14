import React, {useContext, useState} from 'react';
import { useAutenticador } from './Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';


const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} =useAutenticador();
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        login(email, password);
        navigate('/')
    };

    return (
      
      <form onSubmit={handleSubmit}>
        <h1>Sing In</h1>
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
        <span>ou use seu email e senha</span>
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
        <a href="#">Esqueceu a sua senha?</a>
        <button type="submit">Login</button>
      </form>
    
      );
};

export default Login;