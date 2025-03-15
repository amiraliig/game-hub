import React from 'react'
import Platforms from './Platforms'
import getCroppedImage from '../services/imageUrl';

import ScorOfGame from './ScorOfGame';
import PlatformSelector from './PlatformSelector';
function GameCard({ game }) {


    return (
        <div className="dark:text-white bg-[#43434341] rounded-lg cursor-pointer hover:relative min-h-[335px] ">
        <img
          src={getCroppedImage(game.background_image, 600, 400)}
          className="rounded-lg h-52 object-cover w-full m-auto "
        />
        <div className=" ">
          <div className="p-4">
            <div className="flex justify-between my-2 bg">
            <Platforms platformsData={game.parent_platforms} />
            <ScorOfGame score={game.metacritic} />
            </div>
            <h2 className="font-bold text-xl my-1">{game.name} </h2>
            <div>
             
            </div>
          </div>
        </div>
      </div> 
    )
}

export default GameCard