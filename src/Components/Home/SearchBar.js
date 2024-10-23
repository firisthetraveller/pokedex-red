import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const SearchBar = ({ className }) => {
    const [value, setValue] = useState("");
    const { width } = useWindowDimensions();

    return (
        <div className={`${className} py-2 px-4 rounded-full border-solid border-2 bg-gray-200`}>
            <input className="bg-gray-200 focus:outline-none"
                value={value}
                size={width < 640 ? 10 : 20}
                onChange={e => setValue(e.target.value)}
                onBlur={() => setValue("")}
                placeholder={width < 640 ? "Search..." : "Which Pokémon causes you trouble?"} />
            {/** If input is empty: show icon */}
            {value === "" && <FontAwesomeIcon icon={faMagnifyingGlass} />}
        </div>
    );
}

export default SearchBar;