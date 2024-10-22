import useFormat from "../../Hooks/useFormat";

const PokedexFlavorText = ({ entries }) => {
    const { capitalizeAllString } = useFormat();

    return (
        <>
            {entries.map((e, i) => <tr key={i}>
                <td className="px-2 py-1">{capitalizeAllString(e.version.name)}</td>
                <td className="px-2 py-1">
                {e.flavor_text.split('').map((t, i) => <p key={i}>{t}</p>)}
                </td>
            </tr>)}
        </>

    );
}

export default PokedexFlavorText;