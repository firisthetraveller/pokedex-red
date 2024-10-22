import useFormat from "../../Hooks/useFormat";

const PokedexFlavorText = ({ entries, selectedVersion }) => {
    const { capitalizeAllString } = useFormat();

    const selectedGamesText = selectedVersion ? entries.filter(e => selectedVersion.includes(e.version.name)) : [];

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