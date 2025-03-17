import React, { useEffect } from 'react'
import usePlatforms from '../Hooks/usePlatforms'
import useGameStore from '../store'

function PlatformSelector() {

    const { data, error, isLoading } = usePlatforms()
    const { platformSelected, setPlatformSelected } = useGameStore((state) => ({
        platformSelected: state.platformSelected,
        setPlatformSelected: state.setPlatformSelected,
    })); const handleChange = (event) => {
        const selectedPlatform = data?.results.find(platform => platform.id == event.target.value)
        console.log(selectedPlatform)
        setPlatformSelected(selectedPlatform.id)

    }
    if (isLoading) {
        return <div>
            <div className="flex items-center justify-center h-12 mb-4 bg-gray-300 rounded dark:bg-[#9b9b9b41]">

                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-[#9b9b9b41] w-40 "></div>
                {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-[#9b9b9b41] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-[#9b9b9b41] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-[#9b9b9b41]"></div> */}

                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    return (
        <div className=''>
            <select name="" id="" onChange={handleChange} className='border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-[#202020] dark:placeholder-gray-400 dark:text-white'>
                <option value="">All Platforms</option>
                {data?.results.map((platform, index) => (

                    <option value={platform.id} key={index} selected={platformSelected == platform.id} className=''>
                        {platform.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default PlatformSelector