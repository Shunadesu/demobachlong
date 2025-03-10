import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="w-full max-w-[1880px] px-8 flex flex-col items-center justify-center fixed top-0 z-50 bg-white shadow-md">
        <div className="max-w-[1440px] w-full">
            <Navbar />
        </div>
    </header>
  )
}

export default Header