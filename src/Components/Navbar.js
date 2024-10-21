import { Link } from "react-router-dom";
import PokemonLogo from "./Icons/PokemonLogo";
import Heading from "./Base/Heading";

const Navbar = () => {
    return (
        <div className="fixed h-16 lg:px-12 pt-4 pl-4">
            <Link to="/home" className="flex items-center">
                <PokemonLogo/><Heading level={1} className="ml-2">Pokédex</Heading>
            </Link>
        </div>
    );
}

export default Navbar;