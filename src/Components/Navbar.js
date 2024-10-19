import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed h-16">
            <Link to="/home">
                Pokédex
            </Link>
        </div>
    );
}

export default Navbar;