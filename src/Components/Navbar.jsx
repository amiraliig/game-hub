import React from 'react'
import ColorMode from './ColorMode'
import SearchBox from './SearchBox';
import logo from '../../public/Logo-game.png'

const Navbar = ({ onsearch }) => {
    return (
        <div className='flex-col flex justify-around md:flex md:flex-row p-1 items-center'>
            {/* بخش سرچ */}
            <SearchBox onsearch={onsearch} />
            {/* لینک درباره من */}
            <a href="" className='text-white text-lg border p-2 rounded-xl hover:bg-[#3c3c3c]'>ABOUT ME</a>
            {/* لوگو */}
            <img src={logo} alt="logo" className='size-24 md:block hidden ' />
        </div>
    )
}

export default Navbar;
