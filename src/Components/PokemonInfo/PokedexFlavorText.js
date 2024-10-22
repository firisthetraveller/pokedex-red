import useFormat from "../../Hooks/useFormat";
import { usePokemonGenerations } from "../../Hooks/usePokemonData";

const PokedexFlavorText = ({ entries, selectedVersion }) => {
    const { capitalizeAllString } = useFormat();
    const { getGenerationGames } = usePokemonGenerations();

    /** @type {any[]} */
    const games = getGenerationGames(selectedVersion);

    const selectedGamesText = (selectedVersion && games) ? entries.filter(e => games.includes(e.version.name)) : [];
    
    return (
        <>
            {selectedVersion && (selectedGamesText.length > 0
                ?
                <table>
                    <tbody>
                        {selectedGamesText.map((e, i) => <tr key={i}>
                            <td className="px-2 py-1">{capitalizeAllString(e.version.name)}</td>
                            <td className="px-2 py-1">
                                {e.flavor_text.split('').map((t, i) => <p key={i}>{t}</p>)}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                : <p>No Pokédex entry associated with this game.</p>)
            }
        </>
    );
}

export default PokedexFlavorText;