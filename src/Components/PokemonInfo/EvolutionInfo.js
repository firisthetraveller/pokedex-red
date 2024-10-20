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