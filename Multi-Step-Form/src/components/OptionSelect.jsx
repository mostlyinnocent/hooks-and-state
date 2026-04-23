import React from 'react'

function OptionSelect({label, value, placeholder}) {
  return (
    <div className='flex flex-col h-[80px] w-full gap-2'>
      <span className='text-neutral-200 font-semibold'>{label}</span>
        <select type="text" value={value} className='h-10 w-full border border-r-0 border-l-0 border-t-0 outline-0 pl-1.5 border-b-neutral-500 text-neutral-400 focus:border-b-neutral-200'>
          <option value=" ">{placeholder}</option>
          <option value="">Male</option>
          <option value="">Female</option>
          <option value="">Others</option>
        </select>
    </div>
  )
}

export default OptionSelect