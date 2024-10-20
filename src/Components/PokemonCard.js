import { Link } from "react-router-dom";

import useFormat from "../Hooks/useFormat";

const PokemonCard = ({ id, name }) => {
    const { capitalize } = useFormat();

    return (
        <Link to={`/pokemon/${name}`}>
            <div className="p-5">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                #{i+1}{capitalize(name)}
            </div>
        </Link>
    );
}

export default PokemonCard;