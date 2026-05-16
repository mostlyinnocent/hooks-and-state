import React from 'react'

function NextButton({onClick, disabled}) {
  return (
    <button onClick={onClick}  className='bg-linear-to-r from-[#013f4a]  to-[#068562] h-10 w-30 rounded-3xl text-neutral-300 cursor-pointer transition-all active:translate-y-[1px]'>
      <span>Next</span>
    </button>
  )
}

export default NextButton