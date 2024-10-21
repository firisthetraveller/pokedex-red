import React from "react";
import usePokemonIds from "../../Hooks/usePokemonIds";
import useFormat from "../../Hooks/useFormat";
import { Link } from "react-router-dom";

const EvolutionInfo = ({ data }) => {
    const { getImageFromName } = usePokemonIds();
    const { capitalizeAllString } = useFormat();

    return (
        <>
            {data.evolution_details && data.evolution_details.map((d, i) =>
                <div key={i} className="text-center">
                    <p>{`=>`}</p>
                    <div className="flex flex-col items-center">
                        {d.min_level && <span>(Level {data.evolution_details[0].min_level})</span>}
                        {d.min_happiness && <span>(Happy)</span>}
                        {d.item && <>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${d.item.name}.png`} alt={`Sprite for ${capitalizeAllString(d.item.name)}`}/>
                            <p>{capitalizeAllString(d.item.name)}</p>
                        </>}
                    </div>
                </div>
            )}
            <div>
                <Link to={`/pokemon/${data.species.name}`}>
                    <img src={getImageFromName(data.species.name)} alt={`Sprite of ${data.species.name}`} />
                    {capitalizeAllString(data.species.name)}
                </Link>
            </div>
            {data.evolves_to && data.evolves_to.map((info, i) =>
                <React.Fragment key={i}>
                    <EvolutionInfo data={info} />
                </React.Fragment>
            )}
        </>
    );
}

export default EvolutionInfo;