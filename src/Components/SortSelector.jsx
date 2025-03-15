import React from "react";

function SortSelector({ onChangeSelector,value }) {
    const sortSelectorsArr = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average Rating" }, 

    ];

    return (
        <div>
            <select value={value} onChange={(e) => onChangeSelector(e.target.value)} className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-[#202020] dark:placeholder-gray-400 dark:text-white">
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
