import useFormat from "../../Hooks/useFormat";

const StatInfo = ({ base, ev, name }) => {
    const { capitalizeAllString } = useFormat();
    
    return (
        <>
            <div className="flex">
                <span className="flex-1">{name === 'hp' ? 'HP' : capitalizeAllString(name)}</span>
                <span className="flex-1">{base}</span>
            </div>
            <div className="w-60">
                <div style={{ width: `${Math.floor(base * 100 / 255)}%` }} className="bg-red-600" />
            </div>
        </>
    );
}

export default StatInfo;