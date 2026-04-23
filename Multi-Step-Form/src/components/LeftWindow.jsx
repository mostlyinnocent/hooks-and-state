import React from 'react'

function LeftWindow({children}) {
  return (
    <div className='text-amber-50 h-full w-[55%] bg-linear-to-t from-[#013f4a]  to-[#068562] rounded-[4px] relative flex flex-col items-center justify-end'>
      <div className='w-full h-50 flex items-center justify-between p-10 gap-5'>
        <h1 className="text-3xl font-bold text-neutral-200">Get started with us</h1>
        <div className='text-neutral-400 text-[14px]'>complete these easy steps to register your account</div>
      </div>
      {children}
    </div>
  )
}

export default LeftWindow
