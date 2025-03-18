import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api";
const apiClient = new APIClient("/games");
const useGame = (slug) => useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug)
})
export default useGame