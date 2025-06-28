import React, { useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/ui/Form";
import { RegisterformControlls } from "../config/RegisterformControlls";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { userRegisterAction } from "../redux/Authslice.js";
import { useToast } from "../hooks/use-toast"
import { ToastAction } from "../components/ui/toast"


const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [data, setData] = useState(initialState);
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const { toast } = useToast()
  const onSubmit = (event) => {
    event.preventDefault();
   dispatch(userRegisterAction(data)).then((data) => {
  if (data?.payload?.success) {
  toast({ title: data?.payload?.message });
  navigate('/auth/login');
} else {
  console.log("Toast failure fired"); // Debug
  toast({
    title: data?.payload?.message || "Something went wrong",
    variant: "destructive",
      action: <ToastAction altText="Try again">Try again</ToastAction>
  });
}
});

  };
  
 return (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full space-y-6 
                transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
        <p className="text-gray-600 mt-2">
          Already have an account?{" "}
          <Link
            className="font-medium text-chart-2 hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <Form
        formdata={RegisterformControlls}
        buttonText="Create Account"
        data={data}
        setData={setData}
        onSubmit={onSubmit}
      />
    </div>
  </div>
);

};

export default Register;
