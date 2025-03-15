
import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api"
import axiosApi from "../services/api"
const apiClient = new APIClient("/platforms/lists/parents")
const usePlatforms = () => {
    const fetchdata = () => apiClient.getAll()
    return useQuery({
        queryKey: ["/platforms/lists"],
        queryFn: fetchdata,
        staleTime: 24 * 60 * 60 * 1000,// 24 h
    })
}
export default usePlatforms  