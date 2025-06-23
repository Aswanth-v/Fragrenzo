import React from "react";
import AuthLayout from "./components/ui/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Routes, Route } from "react-router-dom"; 


const App = () => {
  return (
    <div>
     
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
           
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} /> 
          </Route>
        </Routes>
      
    </div>
  );
};

export default App;
