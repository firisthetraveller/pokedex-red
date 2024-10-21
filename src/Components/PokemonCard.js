import { Link } from "react-router-dom";

import useFormat from "../Hooks/useFormat";
import { usePokemonIds } from "../Hooks/usePokemonData";

const PokemonCard = ({ id, name }) => {
    const { capitalizeAllString } = useFormat();
    const { getImageFromName } = usePokemonIds();

    return (
        <div className="m-5 w-24">
            <Link to={`/pokemon/${name}`} className="flex flex-col items-center">
                <img src={getImageFromName(name)} alt={`Sprite of ${name}`}/>
                <p className="font-normal text-gray-600">#{id}</p>
                <p className="font-semibold">{capitalizeAllString(name)}</p>
            </Link>
        </div>
    );
}

export default PokemonCard;