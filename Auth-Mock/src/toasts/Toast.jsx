import React from 'react'

function Toast({message}) {
  return (
    <div className='fixed top-5 h-[40px] w-[300px] right-[50px] flex items-center justify-center z-[9999] rounded bg-[rgba(255,255,255,0.2)] backdrop-blur-xl border border-[rgba(255,255,255,0.4)]  text-white'>{message}</div>
  )
}

export default Toast