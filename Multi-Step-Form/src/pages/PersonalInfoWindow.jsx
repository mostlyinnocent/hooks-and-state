import React, { useState } from 'react'
import TextInputField from '../components/TextInputField'
import OptionSelect from '../components/OptionSelect'

function PersonalInfoWindow() {

  const [selected, setSelected] = useState('');

  const GenderOptions = [
    {value: "Select your gender", label:"Select your gender"},
    {value: "Male", label:"Male"},
    {value: "Female", label:"Female"},
    {value: "Others", label:"Others"}
  ];


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
      <OptionSelect label={"Gender"} value={selected} options={GenderOptions}></OptionSelect>
    </div>
  )
}

export default PersonalInfoWindow