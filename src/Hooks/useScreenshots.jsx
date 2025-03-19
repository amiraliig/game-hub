import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api"

const useScreenShots = (gameId) => {
    const apiClient = new APIClient(`/games/${gameId}/screenshots`)
    return useQuery({
        queryKey: ["screenShots", gameId],
        queryFn: apiClient.getAll

    })
}
export default useScreenShots