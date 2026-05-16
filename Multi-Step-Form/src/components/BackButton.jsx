import React from 'react'

function BackButton({onClick}) {
  return (
    <button onClick={onClick} className='bg-neutral-100/10 border border-neutral-100/20 h-10 w-30 rounded-3xl text-neutral-300 transition-all cursor-pointer active:translate-y-[1px]'>
      <span>Back</span>
    </button>
  )
}

export default BackButton