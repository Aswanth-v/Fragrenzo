import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Form from "../components/ui/Form";
import { LoginformControlls } from "../config/RegisterformControlls";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../redux/Authslice";
import { useToast } from "../hooks/use-toast"
const initialState = {

  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(initialState);
  const dispatch=useDispatch()
  const { toast } = useToast()
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(data);
   dispatch(userLoginAction(data)).then((data)=>{
    if (data?.payload?.success) {
  toast({ title: data?.payload?.message })
    }else{
       toast({ title: data?.payload?.message, variant: "destructive", })
    }
   })
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
          formControls={LoginformControlls}
        buttonText="Create Account"
        formdata={data}
        setFormdata={setData}
        onSubmit={onSubmit}
      />
    </div>
  </div>
);

};




export default Login;
