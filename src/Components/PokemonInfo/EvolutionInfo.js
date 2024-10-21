import React from "react";

import { Link } from "react-router-dom";

import usePokemonIds from "../../Hooks/usePokemonIds";
import useFormat from "../../Hooks/useFormat";

import TypeInfo from "./TypeInfo";

const EvolutionInfo = ({ data }) => {
    const { getImageFromName } = usePokemonIds();
    const { capitalizeAllString } = useFormat();

    return (
        <>
            {data.evolution_details && data.evolution_details.length > 0 &&
                <div className="text-center">
                    <p>{`=>`}</p>
                    {data.evolution_details.map((d, i) =>
                        <React.Fragment key={i}>
                            <div className="flex flex-col items-center">
                                {d.min_level && <span>(Level {data.evolution_details[0].min_level})</span>}
                                {d.min_happiness && 
                                    <span>(Happy{d.time_of_day ? ` at ${d.time_of_day}` : ""}{d.known_move_type ? <span> with a {<TypeInfo name={d.known_move_type.name}/>} move</span>: ""})</span>}
                                {d.item && <>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${d.item.name}.png`} alt={`Sprite for ${capitalizeAllString(d.item.name)}`} />
                                    <p>{capitalizeAllString(d.item.name)}</p>
                                </>}
                                {d.location && <>
                                    <span>Level up at {capitalizeAllString(d.location.name)}</span>
                                </>}
                            </div>
                        </React.Fragment>
                    )}
                </div>
            }
            <div className="text-center">
                <Link to={`/pokemon/${data.species.name}`}>
                    <img src={getImageFromName(data.species.name)} alt={`Sprite of ${data.species.name}`} />
                    <span className="font-normal">{capitalizeAllString(data.species.name)}</span>
                </Link>
            </div>
            {data.evolves_to && data.evolves_to.length === 1 && data.evolves_to.map((info, i) =>
                <React.Fragment key={i}>
                    <EvolutionInfo data={info} />
                </React.Fragment>
            )}
            {data.evolves_to && data.evolves_to.length > 1 &&
                <div>
                    {data.evolves_to.map((info, i) =>
                        <div className="flex flex-row items-center" key={i}>
                            <EvolutionInfo data={info} />
                        </div>
                    )}
                </div>
            }
        </>
    );
}

export default EvolutionInfo;