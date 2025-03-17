import { create } from "zustand";
const useGameStore = create((set) => ({
    searchValue: "",
    selectedGenres: null,
    platformSelected: null,
    sortSelected: "",
    setSearchValue: (searchText) => set(() => ({ searchValue: searchText })),
    setSelectedGenres: (genres) => set(() => ({ selectedGenres: genres })),
    setPlatformSelected: (platform) => set(() => ({ platformSelected: platform })),
    setSortSelected: (sort) => set(() => ({ sortSelected: sort })),


}));
export default useGameStore;