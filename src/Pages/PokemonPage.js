import { useParams } from "react-router-dom";

import useFormat from "../Hooks/useFormat";
import useFetch from "../Hooks/useFetch";
import { usePokemonIds } from "../Hooks/usePokemonData";

import StatInfo from "../Components/PokemonInfo/StatInfo";
import TypeInfo from "../Components/PokemonInfo/TypeInfo";
import EvolutionLine from "../Components/PokemonInfo/EvolutionLine";
import SectionWrapper from "../Components/PokemonInfo/SectionWrapper";
import Heading from "../Components/Base/Heading";
import AbilityInfo from "../Components/PokemonInfo/AbilityInfo";
import MoveTables from "../Components/PokemonInfo/MoveTables";
import BasicInfo from "../Components/PokemonInfo/BasicInfo";

const PokemonPage = () => {
    const { name } = useParams();
    const { getOfficialArtworkFromName } = usePokemonIds();

    const { data, error: error_data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const { data: species, error: error_species } = useFetch(data ? data.species.url : "");
    const { capitalizeAllString } = useFormat();

    return (
        <div className="top-20 lg:mx-20 mx-8 mt-4 flex flex-col">
            {data && species &&
                <>
                    <Heading level={2}>#{data.id} {capitalizeAllString(data.name)}</Heading>
                    {species.genera && species.genera.filter(g => g.language.name === 'en').map((g, i) => <Heading level={3} key={i} className="text-gray-600">{g.genus}</Heading>)}
                    {data.sprites && <img src={getOfficialArtworkFromName(name)} alt={`Front of ${data.name}`} className="max-md:self-center max-w-64" />}


                    {data.types && <SectionWrapper name="Species data">
                        <div className="flex">
                            {data.types && <SectionWrapper name={`Type${data.types.length > 1 ? 's' : ''}`}>
                                {data.types.map((t, i) => <TypeInfo key={i} name={t.type.name} />)}
                            </SectionWrapper>}
                            {data.height && <BasicInfo name="Height" value={`${data.height / 10} m`} />}
                            {data.weight && <BasicInfo name="Weight" value={`${data.weight / 10} kg`} />}
                        </div>
                    </SectionWrapper>}

                    {species.evolution_chain && <SectionWrapper name="Evolution">
                        <EvolutionLine url={species.evolution_chain.url} />
                    </SectionWrapper>}

                    {data.abilities && <SectionWrapper name="Abilities">
                        {data.abilities.map((a, i) => <AbilityInfo key={i} name={a.ability.name} hidden={a.is_hidden} />)}
                    </SectionWrapper>}

                    {data.stats && <SectionWrapper name="Base stats">
                        <StatInfo stats={data.stats} />
                    </SectionWrapper>}

                    {data.moves && <SectionWrapper name="Moves">
                        <MoveTables moves={data.moves} genName={species.generation.name} />
                    </SectionWrapper>}
                </>
            }
            {error_data && <p>{error_data}</p>}
            {error_species && <p>{error_species}</p>}
        </div >
    );
}

export default PokemonPage;