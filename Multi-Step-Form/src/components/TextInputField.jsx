import React from 'react'

function TextInputField({label, placeholder, value}) {
  return (
    <div className='flex flex-col h-[60px] w-full gap-1'>
      <span className='text-neutral-300 font-semibold text-[14px]'>{label}</span>
      <input type="text" value={value} placeholder={placeholder} className='h-10 w-full border border-r-0 border-l-0 border-t-0 outline-0 pl-1.5 border-b-neutral-500 text-neutral-100 focus:border-b-2 focus:border-b-[#068562]'/>
    </div>
  )
}

export default TextInputField