import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useFormat from "../Hooks/useFormat";
import useFetch from "../Hooks/useFetch";
import { usePokemonIds, usePokemonMoves } from "../Hooks/usePokemonData";
import useWindowDimensions from "../Hooks/useWindowDimensions";

import StatInfo from "../Components/PokemonInfo/StatInfo";
import TypeInfo from "../Components/PokemonInfo/TypeInfo";
import EvolutionLine from "../Components/PokemonInfo/EvolutionLine";
import SectionWrapper from "../Components/Base/SectionWrapper";
import Heading from "../Components/Base/Heading";
import AbilityInfo from "../Components/PokemonInfo/AbilityInfo";
import MoveTables from "../Components/PokemonInfo/MoveTables";
import BasicInfo from "../Components/PokemonInfo/BasicInfo";
import VariantInfo from "../Components/PokemonInfo/VariantInfo";
import PokedexFlavorText from "../Components/PokemonInfo/PokedexFlavorText";
import GameSelector from "../Components/PokemonInfo/GameSelector";


const PokemonPage = () => {
    const { name } = useParams();
    const { getOfficialArtworkFromName } = usePokemonIds();

    const { data, error: error_data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const { data: species, error: error_species } = useFetch(data ? data.species.url : "");
    const { capitalizeAllString } = useFormat();
    const { width } = useWindowDimensions();
    const { fetchMoves } = usePokemonMoves();
    const [fetching, setFetching] = useState(false);

    const [selectedVersion, setSelectedVersion] = useState("red-blue");

    useEffect(() => {
        if (data && !fetching) {
            fetchMoves(data.moves.map(m => m.move.name));
            setFetching(true);
        }
    }, [data, fetchMoves, fetching]);

    const PokemonImage = React.memo(() => (
        <>
            {data.sprites && <img src={getOfficialArtworkFromName(name)} alt={`Front of ${data.name}`} className="max-md:self-center max-w-64 max-h-64" />}
        </>
    ));

    const PokemonNameplate = () => (
        <div>
            <Heading level={2}>#{data.id} {capitalizeAllString(data.name)}</Heading>
            {species.genera && species.genera.filter(g => g.language.name === 'en').map((g, i) => <Heading level={3} key={i} className="text-gray-600">{g.genus}</Heading>)}
            <PokemonImage />
        </div>
    )

    const PokemonAbilities = () => (
        <>
            {data.abilities && <SectionWrapper name="Abilities" className="flex">
                {data.abilities.map((a, i) => <AbilityInfo key={i} name={a.ability.name} hidden={a.is_hidden} />)}
            </SectionWrapper>}
        </>
    )

    const PokemonSpecies = () => (
        <>
            {data.types && <SectionWrapper name="Species data" className="flex text-center justify-center">
                {data.types && <SectionWrapper name={`Type${data.types.length > 1 ? 's' : ''}`} className="text-center">
                    {data.types.map((t, i) => <TypeInfo key={i} name={t.type.name} />)}
                </SectionWrapper>}
                {data.height && <BasicInfo name="Height" value={`${data.height / 10} m`} className="text-center" />}
                {data.weight && <BasicInfo name="Weight" value={`${data.weight / 10} kg`} className="text-center" />}
                {width >= 768 && <PokemonAbilities />}
            </SectionWrapper>}
        </>
    )

    const PokemonData = () => (
        <>
            <PokemonSpecies />

            {
                species.evolution_chain && <SectionWrapper name="Evolution" className="mt-4">
                    <EvolutionLine url={species.evolution_chain.url} />
                </SectionWrapper>
            }
        </>
    )

    return (
        <div className="top-20 lg:mx-20 mx-8 mt-4 flex flex-col">
            {data && species &&
                <>
                    {width >= 768
                        ? <div className="flex">
                            <PokemonNameplate />
                            <div className="ml-4">
                                <PokemonData />
                            </div>
                        </div>
                        : <>
                            <PokemonNameplate />
                            <PokemonData />
                        </>
                    }

                    {species && <SectionWrapper name="Game selector">
                        <GameSelector species={species} version={selectedVersion} setSelectedVersion={setSelectedVersion} />
                    </SectionWrapper>}

                    {species.flavor_text_entries && <SectionWrapper name="Pokédex entries">
                        <PokedexFlavorText selectedVersion={selectedVersion} entries={species.flavor_text_entries.filter(e => e.language.name === "en")} />
                    </SectionWrapper>}

                    {data.stats && <SectionWrapper name="Base stats">
                        <StatInfo stats={data.stats} />
                    </SectionWrapper>}

                    {data.moves && <SectionWrapper name="Moves">
                        <MoveTables moves={data.moves} selectedVersion={selectedVersion} />
                    </SectionWrapper>}
                </>
            }
            {error_data && <p>{error_data}</p>}
            {error_species && <p>{error_species}</p>}
            {error_evolution && <p>{error_evolution}</p>}
        </div >
    );
}

export default PokemonPage;