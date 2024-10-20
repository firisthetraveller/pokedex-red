import { createContext } from "react";

import useFetch from "../Hooks/useFetch";

export const PokemonIdContext = createContext(null);

const getIdFromUrl = (urlString) => {
    return urlString.split('/').at(-2);
} 

export const PokemonIdProvider = ({children}) => {
    const {data, error} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const ids = data ? new Map(data.results.map(r => [Number(getIdFromUrl(r.url)), r.name])) : new Map([]);

    const getImageUrl = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }

    return (
        <PokemonIdContext.Provider value={{...ids, getImageUrl}}>
            {children}
        </PokemonIdContext.Provider>
    )
}