import { Link } from "react-router-dom";
import PokemonLogo from "./Icons/PokemonLogo";
import Heading from "./Base/Heading";

const Navbar = () => {
    return (
        <div className="fixed h-16">
            <Link to="/home" className="flex items-center">
                <PokemonLogo/><Heading level={1}>Pokédex</Heading>
            </Link>
        </div>
    );
}

export default Navbar;