import React from 'react'
import useTrailers from '../Hooks/useTrailers'

const GameTrailers = ({ gameId }) => {
    const { data, error, isLoading } = useTrailers(gameId)
    console.log(data)
    if (isLoading) {
        return null
    }
    if (data.results.length == 0    ) {
        return null
    }
    return (
        <video src={data?.results[0].data[480]} controls poster={data?.results[0].preview}></video>

    )
}

export default GameTrailers