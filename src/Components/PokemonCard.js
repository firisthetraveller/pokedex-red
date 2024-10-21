import { Link } from "react-router-dom";

import useFormat from "../Hooks/useFormat";
import usePokemonIds from "../Hooks/usePokemonIds";

const PokemonCard = ({ id, name }) => {
    const { capitalize } = useFormat();
    const { getImageFromName } = usePokemonIds();

    return (
        <div className="p-5 flex-1">
            <Link to={`/pokemon/${name}`}>
                <img src={getImageFromName(name)} alt={`Sprite of ${name}`}/>
                <span className="font-normal">#{id} {capitalize(name)}</span>
            </Link>
        </div>
    );
}

export default PokemonCard;