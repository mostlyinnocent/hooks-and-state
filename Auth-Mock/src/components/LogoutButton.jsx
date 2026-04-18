import React from 'react'
import exitIcon from '../icons/exit.png'


function LogoutButton({handlelogOut}) {

  return (
    <button onClick={handlelogOut}  className='h-5 w-5 flex items-center justify-center absolute bottom-5 right-3 cursor-pointer transition-transform hover:scale-105 active:translate-y-1'>
      <img className='h-full w-full object-cover block' src={exitIcon} alt="" />
    </button>
  )
}

export default LogoutButton