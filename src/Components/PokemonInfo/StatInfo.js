import useFormat from "../../Hooks/useFormat";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const shortTranslator = (statName) => {
    switch (statName) {
        case 'special-attack': return 'sp.-atk.';
        case 'special-defense': return 'sp.-def.';
        default: return statName;
    }
}

const StatInfo = ({ stats }) => {
    const { capitalizeAllString } = useFormat();
    const { width } = useWindowDimensions();

    return (
        <>
            {stats && <div className="flex">
                <div className="flex-1 flex flex-col">
                    {stats.map((s, i) => <div className="flex items-center" key={i}>
                        {/* <StatInfo key={i} base={} ev={s.effort} name={} /> */}
                        <span className="flex-1">{s.stat.name === 'hp' ? 'HP' : capitalizeAllString(width <= 640 ? shortTranslator(s.stat.name) : s.stat.name)}</span>
                    </div>)}
                </div>

                {/** Bars */}
                <div className="flex-2 lg:flex-3 xl:flex-4 flex flex-col">
                    {stats.map((s, i) => <div className="flex-1 rounded" key={i}>
                        <div style={{ width: `${Math.floor(s.base_stat * 100 / 255)}%` }} className="bg-red-600 my-0.5 rounded-lg">
                            <p className="text-white text-xs font-normal pl-2">{s.base_stat}</p>
                        </div>
                    </div>)}
                </div>
            </div>}
        </>
    );
}

export default StatInfo;