import { useParams } from "react-router-dom";

import useFormat from "../Hooks/useFormat";
import useFetch from "../Hooks/useFetch";

import StatInfo from "../Components/PokemonInfo/StatInfo";
import TypeInfo from "../Components/PokemonInfo/TypeInfo";
import EvolutionLine from "../Components/PokemonInfo/EvolutionLine";

const PokemonPage = () => {
    const { name } = useParams();

    const { data, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const { capitalize, capitalizeAllString } = useFormat();

    return (
        <div className="top-20">
            {data &&
                <>
                    <p>#{data.id} {capitalizeAllString(data.name)}</p>
                    {data.sprites && <img src={data.sprites.front_default} alt={`Front of ${data.name}`} />}
                    {data.types && data.types.map((t, i) => <TypeInfo key={i} name={t.type.name} />)}

                    {data.species && <EvolutionLine url={data.species.url}/>}

                    {/** Abilities */}
                    {data.abilities && data.abilities.map((a, i) =>
                        <p key={i}>{capitalizeAllString(a.ability.name)} {a.is_hidden && <span className="bg-gray-400 p-1 rounded">Hidden</span>}</p>
                    )}
                    {data.stats && data.stats.map((s, i) => <StatInfo key={i} base={s.base_stat} ev={s.effort} name={s.stat.name} />)}
                </>
            }
            {error && <p>{error}</p>}
        </div>
    );
}

export default PokemonPage;