import { createContext, useCallback, useEffect, useState } from "react";

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
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/version-group?limit=30")
            .then((response) => response.json())
            .then((d) => {
                d.results.forEach(r => {
                    fetch(r.url).then((response) => response.json())
                        .then(d => {
                            setData(data => {
                                return {
                                    games: new Map(data.games.set(d.name, d.versions.map(v => v.name))),
                                    generations: new Map(data.generations.set(
                                        getGenerationNumber(d.generation.name),
                                        data.generations.get(getGenerationNumber(d.generation.name))
                                            ? data.generations.get(getGenerationNumber(d.generation.name)).add(r.name)
                                            : new Set([r.name])))
                                }
                            })
                        })
                        .catch(err => setErrors(e => [...e, err.message]));
                });
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
            {children}
            {errors && errors.map(e => <p>{e}</p>)}
        </PokemonGenerationContext.Provider>
    )
}