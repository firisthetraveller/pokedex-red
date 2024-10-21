import useFormat from "../../Hooks/useFormat";

const AbilityInfo = ({ name, hidden = false }) => {
    const { capitalizeAllString } = useFormat();

    return (
        <>
            {
                hidden
                    ? <span className="bg-gray-200 p-1 mx-1 rounded">{capitalizeAllString(name)}</span>
                    : <span className="p-1 mx-1">{capitalizeAllString(name)}</span>
            }
        </>
    );
}

export default AbilityInfo;