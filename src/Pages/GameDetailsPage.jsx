import React, { useEffect } from 'react'
import useGame from '../Hooks/useGame'
import { useParams } from 'react-router-dom'
import ExpendableText from '../Components/ExpendableText'
import ScoreOfGame from '../Components/ScorOfGame'
import GameAttributes from '../Components/GameAttributes'
import GameTrailers from '../Components/GameTrailers'
import GameMedia from '../Components/GameMedia'

const GameDetailsPage = () => {
  const { slug } = useParams()
  const { data, isLoading, error } = useGame(slug)
  useEffect(() => {
    console.log(data)
  })
  return (
    <div className=''>

      <div
        className="relative w-full text-amber-50 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${data?.background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>


        <div className="relative p-4 z-10 grid lg:grid-cols-2 justify-center">
          <div className='my-12'>
            <h1 className="text-2xl md:text-5xl font-bold text-center">{data?.name}</h1>
            <ExpendableText className="text-lg md:text-xl p-2">{data?.description_raw}</ExpendableText>
            <GameAttributes data={data} />
          </div>
          <GameMedia gameId={data?.id} />
        </div>

      </div>
    </div>
  )
}

export default GameDetailsPage