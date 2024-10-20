import { createContext } from "react";

import useFetch from "../Hooks/useFetch";

export const PokemonIdContext = createContext(null);

const getIdFromUrl = (urlString) => {
    return urlString.split('/').at(-2);
} 

export const PokemonIdProvider = ({children}) => {
    const {data, loading, error} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const ids = data ? new Map(data.results.map(r => [r.name, Number(getIdFromUrl(r.url))])) : new Map([]);

    const getImageFromName = (name) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids.get(name)}.png`;
    }

    return (
        <PokemonIdContext.Provider value={{...ids, getImageFromName}}>
            {!loading && children}
        </PokemonIdContext.Provider>
    )
}