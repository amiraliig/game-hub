import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer'

const App = () => {
  
  const [searchValue,setSearchValue] = useState(null)
  return (
    <div className='bg-[#151515] ]'>
      <Navbar onsearch={(value)=> setSearchValue(value)}/>
      <Main searchvalue={searchValue}/>
      <Footer />

    </div>
  )
}

export default App