import React from 'react'
import searchIcon from '../icons/search.png'

function SearchBtn() {
  return (
    <button className='h-[50px] w-[50px] bg-white absolute top-0 right-0 rounded-[4px] flex items-center justify-center cursor-pointer'>
        <img src={searchIcon} alt="Click to search" className='h-[60%] w-[60%] object-contain opacity-[0.7]'/>
    </button>
  )
}

export default SearchBtn