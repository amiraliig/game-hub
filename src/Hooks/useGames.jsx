import useGameStore from "../store"
import axiosApi from "../services/api"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import APIClient from "../services/api"
const apiClient = new APIClient("/games")

const useGames = () => {
    const {searchValue,platformSelected,selectedGenres,sortSelected} =useGameStore()
    const fetchdata = ({ pageParam = 1 }) => apiClient.getAll({
        params: {
            genres: selectedGenres
            , parent_platforms: platformSelected
            , ordering: sortSelected
            , search: searchValue
            , page: pageParam
        },

    });
    return useInfiniteQuery({
        queryKey: ["/games", selectedGenres, platformSelected, sortSelected, searchValue],
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