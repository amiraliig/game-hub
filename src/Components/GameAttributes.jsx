import React from 'react'
import ScoreOfGame from './ScorOfGame'
import GameTrailers from './GameTrailers'
const GameAttributes = ({ data }) => {
    return (
        <section className=''>

            <div className=' text-gray-300 grid grid-cols-2 gap-x-11 gap-y-5'>

                <div className=''>
                    <h4 className='text-2xl font-bold '>Platforms</h4>
                    {data?.parent_platforms.map((pltaform, index) => <h5 className='text-xl' key={index}>{pltaform.platform.name}</h5>)}

                </div>
                <div className='text-2xl font-bold'>
                    <h4>MetaScore</h4>
                    <ScoreOfGame score={data?.metacritic} />
                </div>
                <div>
                    <h4 className='text-2xl font-bold '>Genres</h4>
                    {
                        data?.genres.map((genre, index) => <h5 key={index} className='text-xl'>{genre.name}</h5>)
                    }
                </div>
                <div>
                    <h4 className='text-2xl font-bold'>
                        Publisher
                    </h4>
                    {data?.publishers.map((publisher, index) => <h5 key={index}>{publisher.name}</h5>)}
                </div>
            </div>


        </section>
    )
}

export default GameAttributes