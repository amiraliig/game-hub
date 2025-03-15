import useData from "./useData";
const useGames = (selectedGenre,selectedPlatform,sortSelected,searchvalue) => useData("/games", { params: { genres: selectedGenre?.id,platforms:selectedPlatform?.id,ordering: sortSelected,search:searchvalue} }, [selectedGenre?.id,selectedPlatform?.id,sortSelected,searchvalue]);
export default useGames;