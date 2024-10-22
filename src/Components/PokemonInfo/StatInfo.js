import useFormat from "../../Hooks/useFormat";

const StatInfo = ({ stats }) => {
    const { capitalizeAllString } = useFormat();

    return (
        <>
            {stats && <div className="flex">
                <div className="flex-1 flex flex-col">
                    {stats.map((s, i) => <>
                        <div className="flex items-center" key={i}>
                            {/* <StatInfo key={i} base={} ev={s.effort} name={} /> */}
                            <span className="flex-1">{s.stat.name === 'hp' ? 'HP' : capitalizeAllString(s.stat.name)}</span>
                            <span className="text-right">{s.base_stat}</span>
                        </div>
                    </>)}
                </div>

                {/** Bars */}
                <div className="flex-2 lg:flex-3 xl:flex-4 flex flex-col">
                    {stats.map((s, i) => <div className="flex-1 m-2 rounded" key={i}>
                        <div style={{ width: `${Math.floor(s.base_stat * 100 / 255)}%` }} className="bg-red-600 h-2 rounded border border-red-500" />
                    </div>)}
                </div>
            </div>}
        </>
    );
}

export default StatInfo;