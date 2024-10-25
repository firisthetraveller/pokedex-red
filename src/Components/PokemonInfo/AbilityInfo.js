import useFetch from "../../Hooks/useFetch";
import useFormat from "../../Hooks/useFormat";
import Tooltipped from "../Base/Tooltipped";

const AbilityInfo = ({ name, hidden = false }) => {
    const { capitalizeAllString } = useFormat();
    const { data, error } = useFetch(`https://pokeapi.co/api/v2/ability/${name}`);

    const effect_entries = data ? data.effect_entries.find(e => e.language.name === "en") : null;

    const content = (
        <>
            {hidden
                ? <span className="bg-gray-200 p-1 mx-1 rounded">{capitalizeAllString(name)}</span>
                : <span className="p-1 mx-1">{capitalizeAllString(name)}</span>
            }
        </>
    )

    return (
        <>
            {effect_entries
                ? <Tooltipped text={effect_entries.short_effect || effect_entries.effect} tooltipClassName="max-w-80">
                    {content}
                </Tooltipped>
                : content
            }
            {error && <p>{error}</p>}
        </>
    );
}

export default AbilityInfo;