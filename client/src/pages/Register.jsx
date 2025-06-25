import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';


const Register = () => {
  console.log("register");
  
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
       <h1 className="text-muted-foreground font-bold text-3xl tracking-tight">sign-up</h1>
     <p>
  Already have an account?{" "}
  <Link
    className="font-medium text-primary hover:underline transition-transform cursor-pointer"
    to="/auth/login"
  >
    Login
  </Link>
</p>

      </div>
    </div>
  )
}

export default Register