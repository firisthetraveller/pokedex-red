import { createContext, useState } from "react";

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

    const fetchMoves = (names) => {
        names.filter(n => !moves.has(n)).forEach(n => {
            fetch(`https://pokeapi.co/api/v2/move/${n}`)
                .then((response) => response.json())
                .then((d) => {
                    let effect_entry = d.effect_entries.find(e => e.language.name === "en");
                    setMoves(moves => moves.set(n, {
                        machines: d.machines,
                        type: d.type.name,
                        power: d.power,
                        pp: d.pp,
                        damage_class: d.damage_class.name,
                        accuracy: d.accuracy,
                        effect: effect_entry ? effect_entry.effect : "-"
                    }));
                })
                .catch((err) => {
                    setErrors(e => [...e, err.message]);
                });
        });
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
            {children}
        </PokemonMoveContext.Provider>
    );
}
