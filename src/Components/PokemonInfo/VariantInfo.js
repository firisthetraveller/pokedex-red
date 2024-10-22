import useFormat from "../../Hooks/useFormat";
import { usePokemonIds } from "../../Hooks/usePokemonData";

const VariantInfo = ({ data, name }) => {
    console.log(name);
    const displayedData = data.filter(d => d.pokemon.name !== name);
    console.log(displayedData)
    const { getImageFromName } = usePokemonIds();
    const { capitalizeAllString } = useFormat();

    return (
        <>
            {
                displayedData.length > 0
                    ? displayedData.map((d, i) => <div key={i} className="m-2 flex flex-col items-center">
                        <img src={getImageFromName(d.pokemon.name)}  alt={`Sprite for ${capitalizeAllString(d.pokemon.name)}`}/>
                        <p>{capitalizeAllString(d.pokemon.name)}</p>
                    </div>)
                    : <p>No other variants</p>
            }
        </>
    );
}

export default VariantInfo;