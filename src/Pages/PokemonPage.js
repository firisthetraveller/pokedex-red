import { useParams } from "react-router-dom";

import useFormat from "../Hooks/useFormat";
import useFetch from "../Hooks/useFetch";

import StatInfo from "../Components/PokemonInfo/StatInfo";
import TypeInfo from "../Components/PokemonInfo/TypeInfo";
import EvolutionLine from "../Components/PokemonInfo/EvolutionLine";
import usePokemonIds from "../Hooks/usePokemonIds";
import SectionWrapper from "../Components/PokemonInfo/SectionWrapper";
import Heading from "../Components/Base/Heading";

const PokemonPage = () => {
    const { name } = useParams();
    const { getId } = usePokemonIds();

    const { data, error: error_data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const { data: species, error: error_species } = useFetch(`https://pokeapi.co/api/v2/pokemon-species/${getId(name)}`);
    const { capitalizeAllString } = useFormat();

    return (
        <div className="top-20">
            {data && species &&
                <>
                    <Heading level={2}>#{data.id} {capitalizeAllString(data.name)}</Heading>
                    {species.genera && species.genera.filter(g => g.language.name === 'en').map((g, i) => <Heading level={3} key={i} className="text-gray-600">{g.genus}</Heading>)}
                    {data.sprites && <img src={data.sprites.front_default} alt={`Front of ${data.name}`} />}
                    {data.types && data.types.map((t, i) => <TypeInfo key={i} name={t.type.name} />)}

                    {species.evolution_chain && <EvolutionLine url={species.evolution_chain.url} />}

                    {/** Abilities */}
                    <SectionWrapper name="Abilities">
                        {data.abilities && data.abilities.map((a, i) =>
                            <p key={i}>{capitalizeAllString(a.ability.name)} {a.is_hidden && <span className="bg-gray-400 p-1 rounded">Hidden</span>}</p>
                        )}
                    </SectionWrapper>

                    <SectionWrapper name="Base stats">
                        {data.stats && data.stats.map((s, i) => <StatInfo key={i} base={s.base_stat} ev={s.effort} name={s.stat.name} />)}
                    </SectionWrapper>
                </>
            }
            {error_data && <p>{error_data}</p>}
            {error_species && <p>{error_species}</p>}
        </div>
    );
}

export default PokemonPage;