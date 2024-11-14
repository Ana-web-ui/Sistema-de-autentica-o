import React from "react";
import { useAutenticador } from "./Context";
import { Navigate} from 'react-router-dom';

const RotaPrivada = ({children})=>{
    const {online, loading} = useAutenticador();

    if (loading) return null; 
    
    return online? children : <Navigate to = '/login'/>
}

export default RotaPrivada