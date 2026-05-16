import React from 'react'
import TextInputField from '../components/TextInputField'
import OptionSelect from '../components/OptionSelect'

function AddressInfoWindow() {

  const [selected, setSelected] = ('');

  const stateOptions = [
    {value:"Select state", label:"Select state"},
    {value:"Assam", label:"Assam"},
    {value:"Delhi", label:"Delhi"},
    {value:"Guwahati", label:"Guwahati"},
    {value:"Bihar", label:"Bihar"},
    {value:"Kashmir", label:"Kashmir"}
  ]

  const countryOptions = [
    {value:"Select country", label:"Select country"},
    {value:"India", label:"India"},
    {value:"USA", label:"USA"},
    {value:"Canada", label:"Canada"},
    {value:"Japan", label:"Japan"},
    {value:"China", label:"China"}
  ]



  return (
    <div className='h-full w-full flex flex-col items-start justify-center pr-2 gap-4'>
      <span className='text-3xl font-semibold text-neutral-200 mb-10'>Address Info</span>
      <TextInputField label={"Street Address"}></TextInputField>
      <TextInputField label={"City"}></TextInputField>
      <OptionSelect value={selected} options={stateOptions} label={"State/Province"}></OptionSelect>
      <TextInputField label={"ZIP/Postal Code"}></TextInputField>
      <OptionSelect value={selected} options={countryOptions} label={"Country"}></OptionSelect>
      

    </div>
  )
}

export default AddressInfoWindow