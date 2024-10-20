import React from "react";
import usePokemonIds from "../../Hooks/usePokemonIds";
import useFormat from "../../Hooks/useFormat";
import { Link } from "react-router-dom";

const EvolutionInfo = ({ data }) => {
    const { getImageFromName } = usePokemonIds();
    const { capitalizeAllString } = useFormat();

    console.log(getImageFromName(data.species.name));

    console.log(data);

    return (
        <>
            <div>
                <Link to={`/pokemon/${data.species.name}`}>
                    <img src={getImageFromName(data.species.name)} />
                    {capitalizeAllString(data.species.name)}
                    {data.evolution_details && data.evolution_details.map((d, i) =>
                        <p>
                            {d.min_level && <span>Evolves at Level {data.evolution_details[0].min_level}</span>}
                            {d.min_happiness && <span>Evolves when happy</span>}
                        </p>
                    )}
                </Link>
            </div>
            {data.evolves_to && data.evolves_to.map((info, i) =>
                <React.Fragment key={i}>
                    <span>{`=>`}</span>
                    <EvolutionInfo data={info} />
                </React.Fragment>
            )}
        </>
    );
}

export default EvolutionInfo;