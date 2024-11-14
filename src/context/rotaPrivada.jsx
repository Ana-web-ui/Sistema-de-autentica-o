import React from "react";
import { useAutenticador } from "./Context";
import { Navigate} from 'react-router-dom';

const RotaPrivada = ({children})=>{
    const {online} = useAutenticador();
    
    return online? children : <Navigate to = '/login'/>
}

export default RotaPrivada