import React from 'react'

function StepBox({icon, text}) {
  return (
      
    <div className='h-35 w-35 bg-neutral-300/5 border border-neutral-200/30 rounded-[4px] flex flex-col items-start justify-center p-2 gap-1 cursor-pointer hover:scale-105 transition-transform'>
      <div className='h-8 w-8 flex items-center justify-center'>
        <img src={icon} alt="" className='h-full w-full object-cover'/>
      </div>
      <span className='text-[16px] font-semibold'>{text}</span>
    </div>
  )
}

export default StepBox