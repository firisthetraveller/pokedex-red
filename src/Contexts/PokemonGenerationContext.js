import { createContext, useEffect, useState } from "react";

export const PokemonGenerationContext = createContext(null);

const romanNumerals = {
    'i': 1, 'ii': 2, 'iii': 3, 'iv': 4,
    'v': 5, 'vi': 6, 'vii': 7, 'viii': 8,
    'ix': 9, 'x': 10, 'xi': 11, 'xii': 12
}

const getGenerationNumber = (name) => {
    console.log(name);
    return romanNumerals[name.split('-')[1]]
}

export const PokemonGenerationProvider = ({ children }) => {
    const [data, setData] = useState(new Map());
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/version-group?limit=30")
            .then((response) => response.json())
            .then((d) => {
                d.results.forEach(r => {
                    fetch(r.url).then((response) => response.json())
                        .then(d => setData(m => m.set(getGenerationNumber(d.generation.name), m.get(getGenerationNumber(d.generation.name)) ? m.get(getGenerationNumber(d.generation.name)).add(r.name) : new Set([r.name]))))
                        .catch(err => setErrors(e => [...e, err.message]));
                });
            })
            .catch((err) => {
                setData(new Map());
                setErrors(e => [...e, err.message]);
            });
    }, []);

    const getAllNextGenerations = (start) => {
        const games = [];

        data.forEach((v, k) => {
            if (k >= getGenerationNumber(start)) {
                games.push([...v]);
            }
        });

        return games.flat();
    }

    const printAll = () => {
        console.log(data);
    }

    return (
        <PokemonGenerationContext.Provider value={{ ...data, printAll, getAllNextGenerations }}>
            {children}
            {errors && errors.map(e => <p>{e}</p>)}
        </PokemonGenerationContext.Provider>
    )
}