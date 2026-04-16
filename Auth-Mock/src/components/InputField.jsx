import React from 'react'

function InputField({label, placeholder, field, handleFormData, value}) {
  return (
    <div className='flex flex-col gap-2'>
      <span className='font-semibold'>{label}</span>
      <input value={value} onChange={(e) => handleFormData(field, e.target.value)} className='h-[40px] w-[450px] bg-(--input) pl-3 rounded-[4px] shadow-[0px_0px_2px_rgba(0,0,0,0.4)] outline-0 focus:outline-2 outline-(--input-focus)' type="text" required placeholder={placeholder} />
    </div>
  )
}

export default InputField