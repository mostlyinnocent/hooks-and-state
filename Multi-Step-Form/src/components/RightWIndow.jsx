import React from 'react'
import NextButton from './NextButton'
import BackButton from './BackButton'

function RightWIndow({children, isLast, isFirst, handleNext, handlePrev}) {
  return (
    <div className='h-full flex flex-1 flex-col items-start pb-4'>
      {children}
      <div className='w-full flex justify-center gap-20 mt-4'>
        <BackButton onClick={handlePrev} disabled={isFirst}></BackButton>
        <NextButton onClick={handleNext} disabled={isLast}></NextButton>
      </div>
    </div>
  )
}

export default RightWIndow