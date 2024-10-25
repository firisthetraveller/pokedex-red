import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { usePokemonIds } from "../../Hooks/usePokemonData";
import useFormat from "../../Hooks/useFormat";

const SearchBar = ({ className }) => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

    const suggestionsRef = useRef(null);
    const navigate = useNavigate();

    const { width } = useWindowDimensions();
    const { getNames, getId } = usePokemonIds();
    const { kebabCase, capitalizeAllString } = useFormat();

    /** @type {string[]} */
    const names = getNames();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
                clean();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) { // Enter key
            if (activeSuggestionIndex > -1) {
                navigate(`/pokemon/${suggestions[activeSuggestionIndex]}`);
                clean();
            }
        }
        else if (e.keyCode === 38) { // Up arrow key
            setActiveSuggestionIndex(a => ((a > 0) ? a - 1 : suggestions.length - 1));
        } else if (e.keyCode === 40) { // Down arrow key
            setActiveSuggestionIndex(a => ((a < suggestions.length - 1) ? a + 1 : 0));
        }
    }

    const handleTyping = (e) => {
        setValue(e.target.value);

        const actualValue = e.target.value.trim();

        if (actualValue.length > 2) {
            setSuggestions(names.filter(n => n.startsWith(kebabCase(actualValue))))
        } else {
            setSuggestions([]);
        }
        setActiveSuggestionIndex(-1);
    }

    const clean = () => {
        setValue("");
        setSuggestions([]);
        setActiveSuggestionIndex(-1);
    }

    return (
        <div className="relative">
            <div className={`${className} py-2 px-4 rounded-full border-solid border-2 bg-gray-200`}>
                <input className="bg-gray-200 focus:outline-none"
                    value={value}
                    size={width < 640 ? 10 : 20}
                    onChange={handleTyping}
                    onKeyDown={handleKeyDown}
                    onBlur={() => setValue("")}
                    placeholder={width < 640 ? "Search..." : "Which Pokémon causes you trouble?"} />
                {/** If input is empty: show icon */}
                {value === "" && <FontAwesomeIcon icon={faMagnifyingGlass} />}
            </div>

            {/** Autocomplete */}
            {suggestions &&
                <div className="absolute ml-10 shadow-md" ref={suggestionsRef}>
                    {suggestions.map((s, i) => <div key={i} className={`${i === activeSuggestionIndex ? 'bg-gray-200' : 'bg-white'} p-2 border border-gray-500`}>
                        <Link to={`/pokemon/${s}`} onClick={clean}>{getId(s) < 10000 ? `#${getId(s)}` : ""} <span className="font-normal">{capitalizeAllString(s)}</span></Link>
                    </div>)}
                </div>
            }
        </div>
    );
}

export default SearchBar;