import React from 'react'
import StepBox from './StepBox'
import accountIcon from '../icons/account.svg'
import locationIcon from '../icons/location.svg'
import preferenceIcon from '../icons/preferences.svg'

function ProgressSetp() {
  return (
    <div className='w-full h-40 flex items-center justify-center gap-4 mb-10'>
      <StepBox icon={accountIcon} text={"Set up account info"}></StepBox>
      <StepBox icon={locationIcon} text={"Set up address details"}></StepBox>
      <StepBox icon={preferenceIcon} text={"Add your preferences"}></StepBox>
    </div>
  )
}

export default ProgressSetp