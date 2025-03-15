import React, { useState, useEffect } from 'react'
import useGames from '../Hooks/useGames'
import GameCard from './GameCard'
import PlatformSelector from './PlatformSelector'
import SortSelector from './SortSelector'
import GameCardSkeleton from './GameCardSkeleton'


function Games({ selectedGenres, searchvalue }) {
    const [platformSelected, setPlatformSelected] = useState(null)
    const [sortSelected, setSortSelected] = useState("")
    const { data, err, isloading } = useGames(selectedGenres, platformSelected, sortSelected, searchvalue)



    if (true) {
        return <GameCardSkeleton />
    }

    return (
        <div className="dark:text-white lg:col-span-5 col-span-6 p-5 justify-center">
            <div className='flex gap-5 justify-center md:justify-normal'>
                <PlatformSelector value={platformSelected} onchangePlatform={(item) => setPlatformSelected(item)} />
                <SortSelector value={sortSelected} onChangeSelector={(item) => setSortSelected(item)} /></div>
            <h2 className="font-bold text-3xl my-2">Trending Games</h2>
            <div className="grid md:grid md:grid-cols-2 sm:grid  sm:grid-cols-1  lg:grid-cols-3 bg-opacity-30 gap-3">
                {data.map(
                    (item, index) =>
                        index < 9 && (
                            <div
                                key={item.id}
                                className=""
                                onClick={() => {
                                    navigate(`/gamepage/${item.id}`);
                                }}
                            >
                                <GameCard game={item} />{" "}
                            </div>
                        )
                )}
            </div>
        </div>
    )
}

export default Games