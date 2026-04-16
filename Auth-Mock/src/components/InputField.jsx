import React from 'react'

function InputField({label, field, placeholder, value, updateFormData}) {
  return (
    <div className='flex flex-col gap-2'>
      <span className='font-semibold'>{label}</span>
      <input value={value} onChange={(e) => updateFormData(field, e.target.value)} className='h-[40px] w-[450px] bg-(--input) pl-3 rounded-[4px] shadow-[0px_0px_2px_rgba(0,0,0,0.4)] outline-0 focus:outline-2 outline-(--input-focus)' type="text" placeholder={placeholder} />
    </div>
  )
}

export default InputField