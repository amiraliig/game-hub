import React from 'react'
import useGame from '../Hooks/useGame'
import { useParams } from 'react-router-dom'

const GameDetailsPage = () => {
    const { slug } = useParams()
    const{data,isLoading,error}= useGame(slug)
  return (
    <div className='h-screen text-amber-50'>
       <h1> {data?.name}</h1>
       <p>
        {data?.description_raw}
       </p>
    </div>
  )
}

export default GameDetailsPage