import { Link } from "react-router-dom";

import useFormat from "../Hooks/useFormat";
import usePokemonIds from "../Hooks/usePokemonIds";

const PokemonCard = ({ id, name }) => {
    const { capitalize } = useFormat();
    const { getImageFromName } = usePokemonIds();

    return (
        <div className="p-5">
            <Link to={`/pokemon/${name}`}>
                <img src={getImageFromName(name)} alt={`Sprite of ${name}`}/>
                #{id} {capitalize(name)}
            </Link>
        </div>
    );
}

export default PokemonCard;