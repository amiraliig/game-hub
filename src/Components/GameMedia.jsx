import React from 'react'
import GameTrailers from './GameTrailers'
import GameScreenshots from './GameScreenshots'
const GameMedia = ({ gameId }) => {
    return (
        <div className='my-8'>
            <GameTrailers gameId={gameId} />
            <GameScreenshots gameId={gameId} />
        </div>
    )
}

export default GameMedia