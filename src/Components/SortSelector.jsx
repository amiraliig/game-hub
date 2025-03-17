import React from "react";
import useGameStore from "../store";

function SortSelector() {
    const sortSelectorsArr = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average Rating" },

    ];
    const sortSelected = useGameStore(state => state.sortSelected)
    const setSortSelected = useGameStore(state => state.setSortSelected)

    return (
        <div>
            <select value={sortSelected} onChange={(e) => setSortSelected(e.target.value)} className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-[#202020] dark:placeholder-gray-400 dark:text-white">
                {sortSelectorsArr.map(item => (
                    <option value={item.value} key={item.label}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SortSelector;
