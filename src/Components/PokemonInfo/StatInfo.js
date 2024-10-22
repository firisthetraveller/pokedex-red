import useFormat from "../../Hooks/useFormat";

const StatInfo = ({ stats }) => {
    const { capitalizeAllString } = useFormat();

    return (
        <>
            {stats && <div className="flex">
                <div className="flex-1 flex flex-col">
                    {stats.map((s, i) => <>
                        {/* <StatInfo key={i} base={} ev={s.effort} name={} /> */}
                        <div className="flex items-center">
                            <span className="flex-1">{s.stat.name === 'hp' ? 'HP' : capitalizeAllString(s.stat.name)}</span>
                            <span className="text-right">{s.base_stat}</span>
                        </div>
                    </>)}
                </div>

                {/** Bars */}
                <div className="flex-2 flex flex-col">
                    {stats.map((s, i) => <div className="flex-1 m-2 rounded">
                        <div style={{ width: `${Math.floor(s.base_stat * 100 / 255)}%` }} className="bg-red-600 h-2 rounded border border-red-500" />
                    </div>)}
                </div>
            </div>}
        </>
    );
}

export default StatInfo;