import { useState, useEffect } from 'react'
import axiosApi from '../services/api'

const useData = (endPoint, requestConfig, deps) => {
    const [isloading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [err, setErr] = useState(null)


    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        axiosApi.get(endPoint, { signal: controller.signal, ...requestConfig })
            .then(response => {
            
                setData(response.data.results)
                setLoading(false)
            })
            .catch(error => {
                setErr(error)
               
                console.log(error)
            })
        return () => controller.abort()
    }, deps ? [...deps] : [])

    return { data, err, isloading }
}

export default useData