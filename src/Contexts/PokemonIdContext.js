import { createContext } from "react";

import useFetch from "../Hooks/useFetch";
import PokemonLogo from "../Components/Icons/PokemonLogo";

export const PokemonIdContext = createContext(null);

const exceptions = [
    ['dudunsparce', 982]
]

const getIdFromUrl = (urlString) => {
    return urlString.split('/').at(-2);
}

export const PokemonIdProvider = ({ children }) => {
    const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const ids = data ? new Map([...exceptions, ...data.results.map(r => [r.name, Number(getIdFromUrl(r.url))])]) : new Map(exceptions);

    const getImageFromName = (name) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids.get(name)}.png`;
    }

    const getOfficialArtworkFromName = (name) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ids.get(name)}.png`;
    }

    const get3DVisualFromName = (name) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${ids.get(name)}.png`;
    }

    const getId = (name) => {
        return ids.get(name);
    }

    const getNames = () => {
        return [...ids.keys()];
    }

    return (
        <>
            <PokemonIdContext.Provider value={{ ...ids, getNames, getImageFromName, getId, getOfficialArtworkFromName, get3DVisualFromName }}>
                {loading && <PokemonLogo spinning={true} />}
                {!loading && children}
            </PokemonIdContext.Provider>
            {error && <p>{error}</p>}
        </>
    )
}