import React from 'react'
import useScreenShots from '../Hooks/useScreenshots'

const GameScreenshots = ({ gameId }) => {
    const { data, error, isLoading } = useScreenShots(gameId)
    if (isLoading) return null
    if (data.results == 0) return null
    if (error) throw error
    return (
        <div className='grid md:grid-cols-2 gap-3'>
            {data?.results.map((file, index) => <img key={index} src={file.image}  />)}
        </div>
    )
}

export default GameScreenshots