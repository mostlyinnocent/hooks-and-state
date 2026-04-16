import React from 'react'

function CreateAccountButton({createAccount}) {
  return (
    <button type='button' onClick={createAccount} className='h-[40px] w-[450px] rounded bg-(--button-bg) cursor-pointer hover:shadow-[0px_20px_20px_rgba(0,0,0,0.4)] transition-[colors,scale] hover:bg-(--button-hover) hover:scale-110 active:translate-y-0.5'>
      <span className='text-(--button-text)'>Create Account</span>
    </button>
  )
}

export default CreateAccountButton