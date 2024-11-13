import React from "react";
import RotaPrivada from "../context/rotaPrivada"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../context/Login"
import Context from "../context/Context";
import Register from "../context/Register"
import PaginaPrivada from "../pages/paginaPrivada"
function App() {


return(
  <Context>
    <Router>
      <Routes>
        <Route path="/" element={
          
          <RotaPrivada>
             <PaginaPrivada/>
          </RotaPrivada>

          } />

          <Route path="/" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>

      </Routes>
    </Router>
  </Context>
)
  

}<Route path="/" element={<Home />} />}#//elementocaminhopaggina<></><Route 
            path="/about" 
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            } 
          />