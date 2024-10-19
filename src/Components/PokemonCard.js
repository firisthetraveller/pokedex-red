import { Link } from "react-router-dom";

import useFormat from "../Hooks/useFormat";

const PokemonCard = ({ name }) => {
    const { capitalize } = useFormat();

    return (
        <Link to={`/pokemon/${name}`}>
            <div className="p-5">
                {capitalize(name)}
            </div>
        </Link>
    );
}

export default PokemonCard;