import React from 'react'
import InputField from './InputField'
import LoginButton from './LoginButton'
import SignUpLink from './SignUpLink'

function LoginForm({formData}) {
  return (
    <div className='w-[70%] h-[100%] rounded-xl p-[20px] pt-[100px] flex flex-col items-start gap-4'>
      <span className='font-bold text-5xl mb-[50px]'>Log In</span>
      <InputField field={"name"} label={"Username"} placeholder={"Enter valid username"}></InputField>
      <InputField field={"password"} label={"Password"} placeholder={"Enter valid password"}></InputField>
      <LoginButton></LoginButton>
      <SignUpLink></SignUpLink>
    </div>
  )
}

export default LoginForm