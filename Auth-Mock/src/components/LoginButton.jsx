import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'

function LoginButton({handleLogin}) {


  return (
    <div className='w-[520px] h-[50px] animate-roate-border rounded-[8px] flex items-center justify-center p-1 hover:bg-conic/[from_var(--border-angle)] from-[#a21caf] via-[#db2777] to-[#a21caf]'>
      <button type='button' onClick={handleLogin} className='h-full w-full rounded bg-linear-to-r from-orange-600 to-amber-300 cursor-pointer shadow-[2px_2px_2px_rgba(0,0,0,0.2)] transition-[colors,scale]  active:translate-y-0.5'>
        <span className='text-(--button-text) font-bold'>Create Account</span>
      </button>
    </div>
  )
}

export default LoginButton