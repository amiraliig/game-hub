import React from 'react'

function SelectorSkeleton() {
  return (
    <div className="flex gap-5 justify-center md:justify-normal">
    <div>
            <select  name="" id="" onChange={handleChange} className='border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-[#202020] dark:placeholder-gray-400 dark:text-white'>
                {data?.map((platform, index) => (
                    
                    <option value={platform.id} key={index}selected={value?.id == platform.id}>
                        {platform.name}
                    </option>
                ))}
            </select>
        </div>
    <div className="w-36">
        <div className="flex items-center justify-center h-12 mb-4 bg-gray-300 rounded dark:bg-[#9b9b9b41]">

            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-[#9b9b9b41] w-40 "></div>
            {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-[#9b9b9b41] mb-2.5"></div>
<div className="h-2 bg-gray-200 rounded-full dark:bg-[#9b9b9b41] mb-2.5"></div>
<div className="h-2 bg-gray-200 rounded-full dark:bg-[#9b9b9b41]"></div> */}

            <span className="sr-only">Loading...</span>

        </div>
    </div>
</div>
  )
}

export default SelectorSkeleton