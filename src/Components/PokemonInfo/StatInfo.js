import useFormat from "../../Hooks/useFormat";

const StatInfo = ({ base, ev, name }) => {
    const { capitalizeAllString } = useFormat();

    return (
        <>
            <div className="flex items-center">
                <span className="flex-1">{name === 'hp' ? 'HP' : capitalizeAllString(name)}</span>
                <span>{base}</span>
                <div className="flex-3 mx-2 rounded">
                    <div style={{ width: `${Math.floor(base * 100 / 255)}%` }} className="bg-red-600 h-2 rounded border border-red-500" />
                </div>
            </div>

        </>
    );
}

export default StatInfo;