import { useQuery } from "@tanstack/react-query";
import useData from "./useData";
import axios from "axios";
import axiosApi from "../services/api";
// const useGenres = () => useData("/genres");
// export default useGenres;
const useGenres = ()=>{
    const fetchdata = ()=> axiosApi.get("/genres").then(response=>response.data.results)
    return useQuery({
        queryKey: ["/genres"],
        queryFn: fetchdata,
        staleTime: 24 * 60 * 60 * 1000,// 24 h
    })
}
export default useGenres