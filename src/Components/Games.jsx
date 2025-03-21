import React, { useState, useEffect } from 'react'
import useGames from '../Hooks/useGames'
import GameCard from './GameCard'
import PlatformSelector from './PlatformSelector'
import SortSelector from './SortSelector'
import GameCardSkeleton from './GameCardSkeleton'
import { Link } from 'react-router-dom'

function Games() {

    const [sortSelected, setSortSelected] = useState("")
    const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames()



    return (

        <div className="dark:text-white lg:col-span-5 col-span-6 p-5 justify-center">
            <div className='flex gap-5 justify-center md:justify-normal'>
                <PlatformSelector />
                <SortSelector value={sortSelected} onChangeSelector={(item) => setSortSelected(item)} /></div>
            <div className='my-8'>
                {isLoading ? <GameCardSkeleton /> : <div className="grid md:grid md:grid-cols-2 sm:grid  sm:grid-cols-1  lg:grid-cols-3 bg-opacity-30 gap-4">
                    {data?.pages.map((page, index) => <React.Fragment key={index}>
                        {page.results.length == 0 && <div>not found</div>}
                        {page.results.map(
                            (item, index) =>
                                index < 9 && (
                                    <div key={item.id} >
                                        <Link to={`/games/${item.slug}`}>  <GameCard game={item} /></Link>

                                    </div>
                                )
                        )}
                    </React.Fragment>)}

                </div>}
            </div>
            {hasNextPage && <button className='bg-[#252525] p-2.5 rounded font-bold' onClick={() => {
                fetchNextPage()
            }}>{isFetchingNextPage ? "Loading..." : "Load more "}</button>}
        </div>



    )
}

export default Games