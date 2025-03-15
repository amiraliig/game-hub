import React, { useEffect } from 'react'
import useGenres from '../Hooks/useGenres'
import getCroppedImage from '../services/imageUrl';
import { GenresSkeleton} from './GeneresSkeleton';

function Genres({ onChangeGenres }) {
    const { data, err, isloading } = useGenres()

    if (isloading) {
        return <GenresSkeleton />
    }

    return (
        <div>
            <div>
            <div className="mx-4 hidden lg:block">
      <h2 className="text-3xl bold font-bold dark:text-white m-2">Genres</h2>
      <ul className="flex flex-col gap-2">
        {data.map((item, index) => (
         
            <li
              key={item.id}
              className={"gap-2 flex items-center cursor-pointer hover:bg-[#7171714f] rounded-lg transition duration-500 p-1 hover:scale-110 hover:font-bold "}
              onClick={() => {
                onChangeGenres(item)
              }}
            >
              <img
                key={item.id}
                src={getCroppedImage(item.image_background, 600, 400)}
                alt=""
                className="h-12 w-12  object-cover rounded-lg"
              />
              <span className="dark:text-white mx-2 text-lg">{item.name}</span>
            </li>
        
        ))}
      </ul>
    </div>
            </div>
          
        </div>
    )
}

export default Genres