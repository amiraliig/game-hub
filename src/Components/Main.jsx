import React, { useEffect, useState } from 'react'
import Games from './Games'
import Genres from './Genres'
import Platforms from './Platforms'
const Main = ({ searchvalue }) => {
  



  return <div className='grid grid-cols-6'>

    <Genres  />
      
    <Games />



  </div>
}

export default Main