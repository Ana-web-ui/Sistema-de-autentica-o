import React, {useContext, useState} from 'react';
import { useAutenticador } from './Context';

const Register= () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const {register} = useAutenticador();

    const handleSubmit = (e) => {
        e.preventDefault();
        register(email, password);
      };
    
      return (
        <form onSubmit={handleSubmit}>
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