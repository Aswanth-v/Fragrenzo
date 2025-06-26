import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Form from "../components/ui/Form";
import { LoginformControlls } from "../config/RegisterformControlls";

const initialState = {

  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(initialState);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    alert(`Registering with data:\n${JSON.stringify(data, null, 2)}`);
  };
  
 return (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full space-y-6 
                transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">LogIn</h1>
        <p className="text-gray-600 mt-2">
          Create an account?{" "}
          <Link
            className="font-medium text-chart-2 hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <Form
        formdata={LoginformControlls}
        buttonText="Create Account"
        data={data}
        setData={setData}
        onSubmit={onSubmit}
      />
    </div>
  </div>
);

};




export default Login;
