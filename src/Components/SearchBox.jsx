import React, { useRef } from 'react'
import { IoIosSearch } from "react-icons/io";
import useGameStore from '../store';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
    const ref = useRef(null); //
    const setSearchValue = useGameStore((state) => state.setSearchValue);
    const navigate = useNavigate()
    return (
        <div className='my-3'>
            <form
                className='rounded-full p-2 max-w-xl md:min-w-2xl md:flex md: bg-[#FFFFFF29] justify-between items-center'
                onSubmit={(e) => {
                    e.preventDefault();
                    setSearchValue(ref.current.value);
                    navigate("/")
                }}
            >
                <input type="text" className='outline-none text-amber-50' placeholder='Search Games' ref={ref} />
                <button type="submit">
                    <IoIosSearch className='text-2xl hidden md:block text-white' />
                </button>
            </form>
        </div>
    );
}

export default SearchBox;
