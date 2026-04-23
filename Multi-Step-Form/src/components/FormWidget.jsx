import React from 'react'



function FormWidget({children}) {
  return (
      <div className='bg-neutral-950 h-170 w-250 rounded-lg flex items-center pt-4 gap-8 pb-4 pl-4 pr-4 border border-neutral-300/20'>
        {children}
      </div>
  )
}

export default FormWidget