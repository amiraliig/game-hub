import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='bg-[#151515] h-screen text-white'> 
            <Navbar />
            <h1>oops</h1>
            <h2>{isRouteErrorResponse(error) ? "This is page does not exist." : "An unexpected Error"}</h2>
        </div>
    )
}

export default ErrorPage