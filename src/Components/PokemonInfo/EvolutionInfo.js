import React from "react";
import usePokemonIds from "../../Hooks/usePokemonIds";
import useFormat from "../../Hooks/useFormat";

const EvolutionInfo = ({ data }) => {
    const { getImageFromName } = usePokemonIds();
    const { capitalizeAllString } = useFormat();

    console.log(getImageFromName(data.species.name));

    console.log(data);

    return (
        <>
            <div>
                <img src={getImageFromName(data.species.name)} />
                {capitalizeAllString(data.species.name)}
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