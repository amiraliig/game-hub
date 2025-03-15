import React, { useEffect, useState } from 'react'
import Games from './Games'
import Genres from './Genres'
import Platforms from './Platforms'
const Main = ({ searchvalue }) => {
  const [selectedGenres, setSelectedGenres] = useState(null)



  return <div className='grid grid-cols-6'>

    <Genres onChangeGenres={(genre) => setSelectedGenres(genre)} />
      
    <Games searchvalue={searchvalue} selectedGenres={selectedGenres} onchangePlatform={(platform) => setPlatformSelected(platform)} />



  </div>
}

export default Main