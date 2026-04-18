import React from 'react'
import LogoutButton from './LogoutButton'
import { useAuthContext } from '../contexts/AuthContext'


function WelcomeWindow({setToast}) {

  const {logOut} = useAuthContext();


  function showToast(message){

    setToast(message)

    setTimeout(()=>{
      setToast(null);
    },3000);

  }

  function handlelogOut(){
    logOut();
    showToast("You have been logged out.")
  }

  return (
    <div className='h-[100%] w-[70%] bg-gradient-to-t from-orange-400 to-yellow-100 flex flex-col items-start  rounded-xl pt-10 pl-5 gap-2 relative'>
      <span className='font-extrabold text-4xl font-sans mt-30'>Welcome,</span>
      <span className='font-bold text-2xl mb-10'>to TenSpark</span>
      <span>Your work enivironment is ready</span>
      <p>Everything you need. Nothing you don't.</p>
      <div className='flex items-center justify-center text-3xl absolute bottom-5 font-bold text-white cursor-pointer gap-0.5'>
        <span className='transition-transform hover:translate-y-[-2px]'>T</span>
        <span className='transition-transform hover:translate-y-[-2px]'>e</span>
        <span className='transition-transform hover:translate-y-[-2px]'>n</span>
        <span className='transition-transform hover:translate-y-[-2px]'>S</span>
        <span className='transition-transform hover:translate-y-[-2px]'>p</span>
        <span className='transition-transform hover:translate-y-[-2px]'>a</span>
        <span className='transition-transform hover:translate-y-[-2px]'>r</span>
        <span className='transition-transform hover:translate-y-[-2px]'>k</span>
        <div className="h-[30px] w-[30px] flex bg-white mask-[url('/stars.png')] mask-no-repeat mask-contain"></div>
      </div>
      <LogoutButton handlelogOut={handlelogOut}></LogoutButton>
    </div>
  )
}

export default WelcomeWindow