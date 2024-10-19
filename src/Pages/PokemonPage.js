import { useEffect, useState } from "react";
import useFormat from "../Hooks/useFormat";
import StatInfo from "../Components/PokemonInfo/StatInfo";
import TypeInfo from "../Components/PokemonInfo/TypeInfo";

const PokemonPage = ({ name }) => {
    const [data, setData] = useState([]);
    const { capitalize, capitalizeAllString } = useFormat();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((d) => {
                console.log(d);
                setData(d);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [name]);

    return (
        <div className="top-20">
            <p>#{data.id} {capitalizeAllString(data.name)}</p>
            {data.sprites && <img src={data.sprites.front_default} alt={`Front of ${data.name}`} />}
            {data.types && data.types.map((t, i) => <TypeInfo name={t.type.name}/>)}

            {/** Abilities */}
            {data.abilities && data.abilities.map(a =>
                <p>{capitalize(a.ability.name)} {a.is_hidden && <span className="bg-gray-400 p-1 rounded">HIDDEN</span>}</p>
            )}
            {data.stats && data.stats.map((s, i) => <StatInfo key={i} base={s.base_stat} ev={s.effort} name={s.stat.name} />)}
        </div>
    );
}

export default PokemonPage;