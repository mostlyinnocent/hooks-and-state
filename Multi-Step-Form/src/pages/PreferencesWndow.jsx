import React from 'react'
import OptionSelect from '../components/OptionSelect';
import { useState } from 'react';


function PreferencesWndow() {

  const [selected, setSelected] = useState('');

  const languageOptions = [
    {value: " ", label:" "},
    {value: "English", label:"English"},
    {value: "हिंदी", label:"हिंदी"},
    {value: "日本語", label:"日本語"},
    {value:"español", label:"español"}
  ];


  return (
    <div className='h-full w-full flex flex-col items-start justify-center pr-2 gap-5'>

      <span className='text-3xl font-semibold text-neutral-200 mb-10'>Preferences</span>

      <OptionSelect label={"Language"} value={selected} options={languageOptions}></OptionSelect>

      <div className='flex flex-col gap-1'>
        <span className='font-semibold text-neutral-200 mb-2 text-[14px]'>Notification Preference</span>
        <div className='flex gap-2 w-ful items-center'>
          <input type="radio" id="option1" name="choice" value="1" className='appearance-none h-[13px] w-[13px] bg-neutral-300 rounded-full border border-gray-100 checked:bg-[#068562] cursor-pointer'/>
          <label for="option1" className='text-neutral-300'>SMS</label>
        </div>
        <div className='flex gap-2 w-ful items-center'>
          <input type="radio" id="option2" name="choice" value="2" className='appearance-none h-[13px] w-[13px] bg-neutral-300 rounded-full border border-gray-100 checked:bg-[#068562] cursor-pointer'/>
          <label for="option2" className='text-neutral-300'>Email</label>
        </div>
        <div className='flex gap-2 w-ful items-center'>
          <input type="radio" id="option3" name="choice" value="3" className='appearance-none h-[13px] w-[13px] bg-neutral-300 rounded-full border border-gray-100 checked:bg-[#068562] cursor-pointer'/>
          <label for="option3" className='text-neutral-300'>Both</label>
        </div>
        <div className='flex gap-2 w-ful items-center justify-start'>
          <input type="radio" id="option4" name="choice" value="4" className='appearance-none h-[13px] w-[13px] bg-neutral-300 rounded-full border border-gray-100 checked:bg-[#068562] cursor-pointer'/>
          <label for="option4" className='text-neutral-300'>None</label>
        </div>
      </div>

      <div className='w-full rounded-sm overflow-hidden flex flex-col gap-2'>
        <span className='text-[14px] text-neutral-200 font-semibold'>Interests</span>
        <div className='w-full h-50 bg-neutral-900 border-1 border-neutral-300/20 rounded-lg p-4 flex flex-wrap gap-2'>
          {['Sports', 'Music', 'Gaming', 'Travel', 'Cooking', 'Art', 'Finiance', 'Tech', 'Design'].map(tag => (
            <div 
              key={tag}
              className='flex h-[40px] items-center gap-2 px-3 py-2 bg-neutral-200 rounded-lg cursor-pointer'
            >
              <input type="checkbox" className='accent-neutral-800'/>
              <span className='text-sm text-neutral-800'>{tag}</span>
            </div>
          ))}
        </div>
      </div>



    </div>
  )
}

export default PreferencesWndow