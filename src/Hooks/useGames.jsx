// import useData from "./useData";
// const useGames = (selectedGenre,selectedPlatform,sortSelected,searchvalue) => useData("/games", { params: { genres: selectedGenre?.id,platforms:selectedPlatform?.id,ordering: sortSelected,search:searchvalue} }, [selectedGenre?.id,selectedPlatform?.id,sortSelected,searchvalue]);
// export default useGames;
import axiosApi from "../services/api"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import APIClient from "../services/api"
const apiClient = new APIClient("/games")
const useGames = (selectedGenre, selectedPlatform, sortSelected, searchvalue) => {
    const fetchdata = ({ pageParam = 1 }) => apiClient.getAll({
        params: {
            genres: selectedGenre?.id
            , parent_platforms: selectedPlatform?.id
            , ordering: sortSelected
            , search: searchvalue
            , page: pageParam
        },

    });
    return useInfiniteQuery({
        queryKey: ["/games", selectedGenre?.id, selectedPlatform?.id, sortSelected, searchvalue],
        queryFn: fetchdata,
        staleTime: 24 * 60 * 60 * 1000,// 24 h
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.next) {
                return pages.length + 1
            }
            return undefined
        }
    })
}
export default useGames