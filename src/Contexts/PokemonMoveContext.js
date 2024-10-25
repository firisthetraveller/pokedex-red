import { createContext, useState } from "react";
import LoadingPokemonLogo from "../Components/Home/LoadingPokemonLogo";

export const PokemonMoveContext = createContext(null);

/**
 * Move description
 * @typedef {Object} Move
 * @property {string} type - Move type
 * @property {number} power - Base power
 * @property {number} accuracy - Accuracy out of 100
 * @property {number} pp - Power points : usage count
 * @property {string} damage_class - Physical / Special / Status
 *  @property {any[]} machines
 */

export const PokemonMoveProvider = ({ children }) => {
    const [moves, setMoves] = useState(new Map());
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMoves = (names) => {
        setLoading(true);

        const fetchMove = (name) => new Promise(resolve => {
            if (!moves.has(name)) {
                fetch(`https://pokeapi.co/api/v2/move/${name}`)
                    .then((response) => response.json())
                    .then((d) => {
                        let effect_entry = d.effect_entries.find(e => e.language.name === "en");

                        setMoves(moves => new Map(moves.set(name, {
                            machines: d.machines,
                            type: d.type.name,
                            power: d.power,
                            pp: d.pp,
                            damage_class: d.damage_class.name,
                            accuracy: d.accuracy,
                            effect: effect_entry ? (effect_entry.short_effect ? effect_entry.short_effect : effect_entry.effect) : "-"
                        })));
                    })
                    .catch((err) => {
                        setErrors(e => [...e, err.message]);
                    });
            }
            resolve();
        });

        Promise.all(names.filter(n => n && !moves.has(n)).map(name => fetchMove(name)))
            .then(values => setLoading(false));
    }

    /**
     * 
     * @param {string} name 
     * @returns {Move}
     */
    const getMove = (name) => {
        return moves.get(name);
    }

    return (
        <PokemonMoveContext.Provider value={{ ...moves, fetchMoves, getMove }}>
            {loading && <LoadingPokemonLogo />}
            {children}
            {errors.map((e, i) => <p key={i}>{e}</p>)}
        </PokemonMoveContext.Provider>
    );
}
