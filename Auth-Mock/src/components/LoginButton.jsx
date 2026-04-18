import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'

function LoginButton({handleLogin}) {


  return (
    <button onClick={handleLogin} type='button' className='h-[40px] w-[520px] rounded bg-linear-to-r from-orange-600 to-amber-300 cursor-pointer shadow-[2px_2px_2px_rgba(0,0,0,0.2)] hover:shadow-[0px_20px_20px_rgba(0,0,0,0.4)] transition-[colors,scale] hover:scale-110 active:translate-y-0.5'>
      <span className='text-(--button-text) font-bold'>LogIn</span>
    </button>
  )
}

export default LoginButton