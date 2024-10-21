import { createContext, useEffect, useState } from "react";

export const PokemonGenerationContext = createContext(null);

export const PokemonGenerationProvider = ({ children }) => {
    const [data, setData] = useState(new Map());
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/version-group?limit=30")
            .then((response) => response.json())
            .then((d) => {
                d.results.forEach(r => {
                    fetch(r.url).then((response) => response.json())
                        .then(d => setData(m => m.set(r.name, d.generation.name)))
                        .catch(err => setErrors(e => [...e, err.message]));
                });
            })
            .catch((err) => {
                setData(new Map());
                setErrors(e => [...e, err.message]);
            });
    }, []);

    const printAll = () => {
        console.log(data);
    }

    return (
        <PokemonGenerationContext.Provider value={{ ...data, printAll }}>
            {children}
        </PokemonGenerationContext.Provider>
    )
}