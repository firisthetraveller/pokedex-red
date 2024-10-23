import { Link } from "react-router-dom";
import useFormat from "../../Hooks/useFormat";
import { usePokemonIds } from "../../Hooks/usePokemonData";

const VariantInfo = ({ data, name }) => {
    const displayedData = data.filter(d => d.pokemon.name !== name);
    const { getImageFromName } = usePokemonIds();
    const { capitalizeAllString } = useFormat();

    return (
        <>
            {
                displayedData.length > 0
                    ? displayedData.map((d, i) => <div key={i} className="m-2">
                        <Link to={`/pokemon/${d.pokemon.name}`} className="flex flex-col items-center">
                            <img src={getImageFromName(d.pokemon.name)} alt={`Sprite for ${capitalizeAllString(d.pokemon.name)}`} />
                            <p className="font-normal">{capitalizeAllString(d.pokemon.name)}</p>
                        </Link>
                    </div>)
                    : <p>No other variants</p>
            }
        </>
    );
}

export default VariantInfo;