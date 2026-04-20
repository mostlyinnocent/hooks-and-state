import React from 'react'

function InputField({label, placeholder, field, handleFormData, value}) {
  return (
    <div className='flex flex-col gap-2 w-[550px]'>
      <span className='font-semibold'>{label}</span>
      <div className='w-[520px] h-[50px] animate-roate-border rounded-[8px] flex items-center justify-center p-[2px] focus-within:bg-conic/[from_var(--border-angle)] from-amber-100 via-orange-500 to-amber-100 from-80% via-90% to-100%'>
        <input value={value} onChange={(e) => handleFormData(field, e.target.value)} className='h-full w-full bg-(--input) pl-3 rounded-lg outline-0 border-2 border-amber-100' type="text" required placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default InputField