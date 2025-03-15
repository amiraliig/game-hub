// import useData from "./useData";
// const usePlatforms = () => useData("/platforms/lists/parents");
// export default usePlatforms
import { useQuery } from "@tanstack/react-query"
import axiosApi from "../services/api"
const usePlatforms = () => {
    const fetchdata = () => axiosApi.get("/platforms/lists/parents").then(response => {

        return response.data.results
    })
    return useQuery({
        queryKey: ["/platforms/lists"],
        queryFn: fetchdata,
        staleTime: 24 * 60 * 60 * 1000,// 24 h
    })
}
export default usePlatforms 