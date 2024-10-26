import { createContext, useEffect, useState } from "react";

export const PokemonTypeContext = createContext(null);


const weaknessTranslator = (value) => {
    switch (value) {
        case -1: return "Immune";
        case 0: return "x1/4";
        case 1: case 2: case 3: case 4: return `x${1 / 4 * Math.pow(2, value)}`;
        default: throw new Error(`No such damage value: ${value}`);
    }
}

export const PokemonTypeProvider = ({ children }) => {
    const [types, setTypes] = useState(new Map());
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch("https://pokeapi.co/api/v2/type?limit=30")
            .then(response => response.json())
            .then(d => {
                const calls = d.results.map(r => new Promise(resolve => {
                    fetch(r.url)
                        .then(response => response.json())
                        .then(d => setTypes(t => new Map(t.set(r.name, {
                            double: d.damage_relations.double_damage_from.map(t => t.name),
                            half: d.damage_relations.half_damage_from.map(t => t.name),
                            immune: d.damage_relations.no_damage_from.map(t => t.name)
                        }))))
                        .catch(err => setErrors(e => [...e, err.message]));
                    resolve();
                }));

                Promise.all(calls).then(_ => setLoading(false));
            })
            .catch(err => {
                setErrors(e => [...e, err.message]);
                setLoading(false);
            });
    }, []);

    /**
     * 
     * @param {string[]} names 
     */
    const getWeaknessMap = (names) => {
        const weaknesses = new Map([...types.keys()].map(t => [t, {name: t, value: 2}]));

        names.forEach(t => {
            const relations = types.get(t);

            relations.double.forEach(t => {
                let value = weaknesses.get(t).value;
                if (value === -1)
                    return;
                weaknesses.set(t, {name: t, value: value + 1});
            });

            relations.half.forEach(t => {
                let value = weaknesses.get(t).value;
                if (value === -1)
                    return;
                weaknesses.set(t, {name: t, value: value - 1});
            });

            relations.immune.forEach(t => {
                weaknesses.set(t, {name: t, value: - 1});
            });
        });

        return weaknesses;
    }

    const getWeaknesses = (names) => {
        return [...getWeaknessMap(names).values()].filter(info => !["unknown", "shadow", "stellar"].includes(info.name)).map(i => {return {...i, value: weaknessTranslator(i.value)}});
    }

    return (
        <PokemonTypeContext.Provider value={{ ...types, getWeaknessMap, getWeaknesses }}>
            {children}
            {errors.map((e, i) => <p key={i}>{e}</p>)}
        </PokemonTypeContext.Provider>
    );
}