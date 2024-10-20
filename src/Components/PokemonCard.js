import { Link } from "react-router-dom";

import useFormat from "../Hooks/useFormat";

const PokemonCard = ({ id, name }) => {
    const { capitalize } = useFormat();

    return (
        <div className="p-5">
            <Link to={`/pokemon/${name}`}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                #{id} {capitalize(name)}
            </Link>
        </div>
    );
}

export default PokemonCard;