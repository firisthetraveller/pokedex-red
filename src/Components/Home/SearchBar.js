import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({className}) => {
    const [value, setValue] = useState("");

    return (
        <div className={`${className} py-2 px-4 rounded-full border-solid border-2 bg-gray-200`}>
            <input className="bg-gray-200 focus:outline-none"
                value={value}
                onChange={e => setValue(e.target.value)}
                onBlur={() => setValue("")}
                placeholder="Which Pokémon causes you trouble?"/>
            {/** If input is empty: show icon */}
            {value === "" && <FontAwesomeIcon icon={faMagnifyingGlass}/>}
        </div>
    );
}
 
export default SearchBar;