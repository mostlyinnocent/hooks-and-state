import React, { useState } from 'react'
import InputField from './InputField'
import LoginButton from './LoginButton'
import AuthSwitchLink from './AuthSwitchLink'
import { useAuthContext } from '../contexts/AuthContext'


function LoginForm({setToast}) {

  const {login} = useAuthContext();

  const [formData, setFormData] = useState(
    {
      email:"",
      password: ""
    }
  )

  function handleFormData(field, value){
    setFormData(prev=>({
      ...prev,
      [field] : value,
    }))
  }

  function validateLogin(formData){

    if(!formData.email.trim()) return "Email required";
    if(!formData.password.trim()) return "Password required";

    return null;
  }

  function showToast(message){

    setToast(message)

    setTimeout(()=>{
      setToast(null);
    },3000);

  }

  function handleLogin(){
    const error = validateLogin(formData);

    if(error){
      showToast(error);
      return
    }

    const loginSuccess = login(formData);
    if(loginSuccess){
      showToast("You are logged in.");
    } else {
      showToast("Invalid email or password.");
    }
  }

  return (
    <div className='w-[70%] h-[100%] rounded-xl p-[20px] pt-[100px] flex flex-col items-start gap-4'>
      <span className='font-bold text-5xl mb-5'>Log In</span>
      <div className='flex flex-col mb-22 gap-4'>
      <InputField value={formData.email} field={"email"} label={"Email"} placeholder={"Enter valid email"} handleFormData={handleFormData}></InputField>
      <InputField value={formData.password} field={"password"} label={"Password"} placeholder={"Enter valid password"} handleFormData={handleFormData}></InputField>
      </div>
      <LoginButton handleLogin={handleLogin}></LoginButton>
      <AuthSwitchLink text={"Don't have and account yet?"} destination={"/signup"} linkText={"Sign Up"}></AuthSwitchLink>
    </div>
  )
}

export default LoginForm