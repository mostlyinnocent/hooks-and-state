import React from 'react'
import NextButton from './NextButton'
import BackButton from './BackButton'

function RightWIndow({children, handlePrev, handleNext}) {
  return (
    <div className='h-full flex flex-1 flex-col items-start pb-4'>
      {children}
      <div className='w-full flex justify-center gap-20 mt-4'>
        <BackButton onClick={handlePrev}></BackButton>
        <NextButton onClick={handleNext}></NextButton>
      </div>
    </div>
  )
}

export default RightWIndow