import React from 'react'
import InputField from './InputField'
import LoginButton from './LoginButton'
import AuthSwitchLink from './AuthSwitchLink'


function LoginForm() {
  return (
    <div className='w-[70%] h-[100%] rounded-xl p-[20px] pt-[100px] flex flex-col items-start gap-4'>
      <span className='font-bold text-5xl mb-5'>Log In</span>
      <div className='flex flex-col mb-22 gap-4'>
      <InputField field={"name"} label={"Username"} placeholder={"Enter valid username"}></InputField>
      <InputField field={"password"} label={"Password"} placeholder={"Enter valid password"}></InputField>
      </div>
      <LoginButton></LoginButton>
      <AuthSwitchLink text={"Don't have and account yet?"} destination={"/signup"} linkText={"Sign Up"}></AuthSwitchLink>
    </div>
  )
}

export default LoginForm