import React from 'react'
import gradient from '../images/gradient-bg.jpg'

function LoginWindow({children}) {
  return (
    <div className='bg-(--card) h-[600px] w-[1000px] flex items-center justify-center rounded-xl backdrop-blur-3xl'>
      <div className='flex h-[100%] w-[50%] p-[15px] relative'>
        <img className='h-full w-full object-cover rounded-xl' src={gradient} alt="" />
        <div className='absolute h-[570px] w-[470px] rounded-xl flex flex-col items-start justify-between pt-2 pl-2 pb-5'>
          <div className='h-[50px] w-full flex items-center gap-1'>
            <div className="h-[30px] w-[30px] flex bg-white mask-[url('/stars.png')] mask-no-repeat mask-contain"></div>
            <span className='font-mono font-extrabold text-white'>TenSpark OS</span>
          </div>
          <p className='text-white text-3xl font-semibold'>AI-powered workspace for builders, developers, and creators.</p>
        </div>
      </div>
        {children}
    </div>
  )
}

export default LoginWindow