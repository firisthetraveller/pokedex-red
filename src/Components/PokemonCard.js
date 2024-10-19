import { Link } from "react-router-dom";

const PokemonCard = ({name}) => {
    return (
        <Link to={`/pokemon/${name}`}>
            <div className="p-5">
                {name}
            </div>
        </Link>
    );
}
 
export default PokemonCard;