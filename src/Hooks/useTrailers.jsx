import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api";

const useTrailers = (gameId) => {
    const apiclient = new APIClient(`/games/${gameId}/movies`)
    return useQuery({
        queryKey: ['Trailer', gameId],
        queryFn: apiclient.getAll
    })
}
export default useTrailers  