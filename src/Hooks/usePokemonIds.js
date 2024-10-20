import { useContext } from "react";
import { PokemonIdContext } from "../Contexts/PokemonIdContext";

const usePokemonIds = () => {
    const context = useContext(PokemonIdContext);

    if (context == null) {
        throw new Error ("usePokemonIds should be used inside a PokemonIdProvider.");
    }

    return context;
}
 
export default usePokemonIds;