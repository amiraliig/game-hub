import React, { useState } from 'react'

const ExpendableText = ({ children }) => {
    const [expended, setExpended] = useState(false)
    const limit = 400
    if (!children) {
        return
    }
    if (children.length < limit) {
        return children
    }
    const shortText = expended ? children : children.substring(0, limit)
    return (

        <div >
            <p className='text-lg my-3'>{shortText} <button className='cursor-pointer bg-yellow-400 px-3 rounded-lg text-black' onClick={() => {
                setExpended(!expended)
            }}>{expended ? "less" : "more"}</button> </p>

        </div>
    )
}

export default ExpendableText