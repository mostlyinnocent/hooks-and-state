import React from 'react'
import TextInputField from './TextInputField'
import OptionSelect from './OptionSelect'

function PersonalInfoWindow() {
  return (
    <div className='h-full w-full flex flex-col items-start justify-center pr-2 gap-4'>
      <span className='text-3xl font-semibold text-neutral-200 mb-10'>Personal Info</span>
      <div className='w-full flex gap-10'>
        <TextInputField label={"First Name"} placeholder={"Jhon"}></TextInputField>
        <TextInputField label={"Last Name"} placeholder={"Doe"}></TextInputField>
      </div>
      <TextInputField label={"Email"} placeholder={"jhondoe@example.com"}></TextInputField>
      <TextInputField label={"Phone Number"} placeholder={"Enter valid phone number with country code"}></TextInputField>
      <TextInputField label={"Date of Birth"} placeholder={"DD/MM/YYYY"}></TextInputField>
      <OptionSelect label={"Gender"} placeholder={"Select your gender"}></OptionSelect>
    </div>
  )
}

export default PersonalInfoWindow