import React from 'react'
import ColorMode from './ColorMode'
import SearchBox from './SearchBox';
import logo from '../../public/vericalMyLogo.png'

const Navbar = ({ onsearch }) => {
    return (
        <div className='flex-col flex justify-around md:flex md:flex-row p-1 items-center'>
            {/* بخش سرچ */}
            <SearchBox onsearch={onsearch} />
            {/* لینک درباره من */}
           <div className='flex align-center gap-2 content-center items-center md:gap-7'>
           <a href="https://github.com/amiraliig" className='text-white text-lg border p-2 rounded-xl hover:bg-[#3c3c3c] h-12'>ABOUT ME</a>
            {/* لوگو */}
            <img src={logo} alt="logo" className='size-32 md:block  ' />
           </div>
        </div>
    )
}

export default Navbar;
