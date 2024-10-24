import { createContext, useCallback, useEffect, useState } from "react";
import LoadingPokemonLogo from "../Components/Home/LoadingPokemonLogo";

export const PokemonGenerationContext = createContext(null);

const romanNumerals = {
    'i': 1, 'ii': 2, 'iii': 3, 'iv': 4,
    'v': 5, 'vi': 6, 'vii': 7, 'viii': 8,
    'ix': 9, 'x': 10, 'xi': 11, 'xii': 12
}

const getGenerationNumber = (name) => {
    return romanNumerals[name.split('-')[1]]
}

export const PokemonGenerationProvider = ({ children }) => {
    const [data, setData] = useState({ generations: new Map(), games: new Map() });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    /** TODO Set loading state: false when all promises have been resolved */
    /** TODO Loading in background (Web worker) */

    useEffect(() => {
        setLoading(true);

        fetch("https://pokeapi.co/api/v2/version-group?limit=30")
            .then((response) => response.json())
            .then((d) => {
                const subFetch = (url, name) => new Promise(resolve => {
                    fetch(url)
                        .then((response) => response.json())
                        .then(d => {
                            setData(data => {
                                return {
                                    games: new Map(data.games.set(d.name, d.versions.map(v => v.name))),
                                    generations: new Map(data.generations.set(
                                        getGenerationNumber(d.generation.name),
                                        data.generations.get(getGenerationNumber(d.generation.name))
                                            ? data.generations.get(getGenerationNumber(d.generation.name)).add(name)
                                            : new Set([name])))
                                }
                            })
                            resolve();
                        })
                        .catch(err => setErrors(e => [...e, err.message]));
                });
                Promise.all(d.results.map(r => subFetch(r.url, r.name)))
                    .then(values => setLoading(false));
            })
            .catch((err) => {
                setData(new Map());
                setErrors(e => [...e, err.message]);
            });
    }, []);

    const getAllNextGenerations = useCallback((start) => {
        const games = [];

        data.generations.forEach((v, k) => {
            if (k >= getGenerationNumber(start)) {
                games.push([...v]);
            }
        });

        return games.flat();
    }, [data]);

    const getGenerationGames = useCallback((generation) => {
        return data.games.get(generation);
    }, [data]);

    return (
        <PokemonGenerationContext.Provider value={{ ...data, getAllNextGenerations, getGenerationGames }}>
            {loading && <LoadingPokemonLogo />}
            {!loading && children}
            {errors && errors.map(e => <p>{e}</p>)}
        </PokemonGenerationContext.Provider>
    )
}