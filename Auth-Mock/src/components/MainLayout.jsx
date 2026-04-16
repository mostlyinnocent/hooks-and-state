import React from 'react'
import backgroundGradient from "../images/main-bg.jpg"

function MainLayout({children}) {
  return (
    <div className='min-h-screen w-full flex items-center justify-center backdrop-blur-xl relative'>
      {children}
    </div>
  )
}

export default MainLayout