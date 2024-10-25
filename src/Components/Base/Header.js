import { Link } from "react-router-dom";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

import PokemonLogo from "../Icons/PokemonLogo";
import Heading from "./Heading";
import SearchBar from "../Home/SearchBar";

const Header = () => {
    const { width } = useWindowDimensions();

    return (
        <div className="fixed pt-4 h-24 lg:px-12 bg-gradient-to-b from-white from-75% z-10 w-full">
            <div className="flex items-center">
            <Link to="/home" className="flex items-center">
                {width >= 640 && <PokemonLogo />}<Heading level={1} className="ml-6 sm:ml-2">Pokédex</Heading>
            </Link>
            <SearchBar className="mx-5"/>
            </div>
        </div>
    );
}

export default Header;