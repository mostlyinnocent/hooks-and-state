import React from 'react'
import { Link } from 'react-router-dom'

function AuthSwitchLink({text, destination, linkText}) {
  return (
    <div className='w-[400px] flex gap-1'>
      <span className='text-[14px]'>{text}</span><Link to={destination} className='text-orange-500 underline text-[14px]'>{linkText}</Link>
    </div>
  )
}

export default AuthSwitchLink