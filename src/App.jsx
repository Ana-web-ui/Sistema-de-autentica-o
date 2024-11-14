import React from "react";
import RotaPrivada from "./context/rotaPrivada"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./context/Login"
import {AuthProvider} from "./context/Context";
import Register from "./context/Register"
import PaginaPrivada from "./pages/paginaPrivada"
import PageAutenticator from "./pages/pageAutenticator";
import "./App.css"
function App() {


return(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={
          
          <RotaPrivada>
             <PaginaPrivada/>
          </RotaPrivada>

          } />

          <Route path="/login" element={<PageAutenticator/>}/>
          <Route path="/register" element={<Register/>}/>

      </Routes>
    </Router>
  </AuthProvider>
)
  
}

export default App;