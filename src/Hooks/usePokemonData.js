import { useContext } from "react";
import { PokemonIdContext } from "../Contexts/PokemonIdContext";
import { PokemonGenerationContext } from "../Contexts/PokemonGenerationContext";
import { PokemonMoveContext } from "../Contexts/PokemonMoveContext";

const usePokemonData = (contextName, error) => {
    const context = useContext(contextName);

    if (context == null) {
        throw new Error (error);
    }

    return context;
}
 
export const usePokemonIds = () => usePokemonData(PokemonIdContext, "usePokemonIds should be used inside a PokemonIdProvider.");
export const usePokemonGenerations = () => usePokemonData(PokemonGenerationContext, "usePokemonGenerations should be used inside a PokemonGenerationProvider.");
export const usePokemonMoves = () => usePokemonData(PokemonMoveContext, "usePokemonGenerations should be used inside a PokemonGenerationProvider.");