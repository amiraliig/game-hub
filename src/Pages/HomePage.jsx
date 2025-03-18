import React from 'react'
import Games from '../Components/Games'
import Genres from '../Components/Genres'
const HomePage = () => {
    return (
        <div>
            <div className='grid grid-cols-6'>
                <Genres />
                <Games />
            </div>
        </div>
    )
}

export default HomePage