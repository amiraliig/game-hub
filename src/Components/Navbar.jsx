import React from 'react'
import ColorMode from './ColorMode'
import SearchBox from './SearchBox';
import logo from '../../public/vericalMyLogo.png'

const Navbar = () => {
    return (
        <div className='flex-col flex justify-around md:flex md:flex-row p-1 items-center'>
            {/* بخش سرچ */}
            <SearchBox  />
            {/* لینک درباره من */}
           <div className='flex align-center gap-2 content-center items-center md:gap-7'>
           <a href="https://github.com/amiraliig" className='text-white text-lg p-2 rounded-xl align-middle bg-[#FFFFFF29]'>ABOUT ME</a>
            {/* لوگو */}
            <img src={logo} alt="logo" className='size-32 md:block  ' />
           </div>
        </div>
    )
}

export default Navbar;
