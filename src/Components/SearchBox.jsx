import React, { useRef } from 'react'
import { IoIosSearch } from "react-icons/io";

function SearchBox({ onsearch }) {
    const ref = useRef(null); //
    return (
        <div className='my-3'>
            <form 
                className='rounded-full p-2 max-w-md md:min-w-2xl md:flex md: bg-[#FFFFFF29] justify-between items-center'
                onSubmit={(e) => {
                    e.preventDefault();
                    if (ref.current && ref.current.value.trim() !== "") {
                        console.log(ref.current.value);
                        
                        onsearch(ref.current.value);
                    }
                }}
            >
                <input type="text" className='outline-none text-amber-50' placeholder='Search Games' ref={ref} />
                <button type="submit">
                    <IoIosSearch className='text-2xl hidden md:block' />
                </button>
            </form>
        </div>
    );
}

export default SearchBox;
