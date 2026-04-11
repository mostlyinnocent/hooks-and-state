import React from 'react'

function CityItem({city}) {
  return (
    <span className='text-[#2a2b2d] h-8 w-[500px] flex items-center justify-center cursor-pointer hover:bg-[#dedede]'>{city}</span>
  )
}

export default CityItem