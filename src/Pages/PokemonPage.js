import { useParams } from "react-router-dom";

import useFormat from "../Hooks/useFormat";
import useFetch from "../Hooks/useFetch";

import StatInfo from "../Components/PokemonInfo/StatInfo";
import TypeInfo from "../Components/PokemonInfo/TypeInfo";
import EvolutionLine from "../Components/PokemonInfo/EvolutionLine";
import usePokemonIds from "../Hooks/usePokemonIds";
import SectionWrapper from "../Components/PokemonInfo/SectionWrapper";
import Heading from "../Components/Base/Heading";
import AbilityInfo from "../Components/PokemonInfo/AbilityInfo";

const PokemonPage = () => {
    const { name } = useParams();
    const { getId, getOfficialArtworkFromName } = usePokemonIds();

    const { data, error: error_data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const { data: species, error: error_species } = useFetch(getId(name) ? `https://pokeapi.co/api/v2/pokemon-species/${getId(name)}` : "");
    const { capitalizeAllString } = useFormat();

    return (
        <div className="top-20 mx-20 mt-4">
            {data && species &&
                <>
                    <Heading level={2}>#{data.id} {capitalizeAllString(data.name)}</Heading>
                    {species.genera && species.genera.filter(g => g.language.name === 'en').map((g, i) => <Heading level={3} key={i} className="text-gray-600">{g.genus}</Heading>)}
                    {data.sprites && <img src={getOfficialArtworkFromName(name)} alt={`Front of ${data.name}`} className="max-w-64" />}


                    {data.types && <SectionWrapper name={`Type${data.types.length > 1 ? 's' : ''}`}>
                        {data.types.map((t, i) => <TypeInfo key={i} name={t.type.name} />)}
                    </SectionWrapper>}


                    {species.evolution_chain && <SectionWrapper name="Evolution">
                        <EvolutionLine url={species.evolution_chain.url} />
                    </SectionWrapper>}

                    {data.abilities && <SectionWrapper name="Abilities">
                        {data.abilities.map((a, i) => <AbilityInfo key={i} name={a.ability.name} hidden={a.is_hidden} />)}
                    </SectionWrapper>}

                    {data.stats && <SectionWrapper name="Base stats">
                        {data.stats.map((s, i) => <StatInfo key={i} base={s.base_stat} ev={s.effort} name={s.stat.name} />)}
                    </SectionWrapper>}
                </>
            }
            {error_data && <p>{error_data}</p>}
            {error_species && <p>{error_species}</p>}
        </div>
    );
}

export default PokemonPage;