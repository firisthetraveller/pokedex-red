import TypeInfo from "./TypeInfo";

const wkStyle = "text-center font-semibold"

const WeaknessIcon = ({ value }) => {
    switch (value) {
        case -1: return <div className={`text-purple-700 ${wkStyle}`}>0</div>;
        case 0: return <div className={`text-amber-700 ${wkStyle}`}>1/4</div>;
        case 1: return <div className={`text-yellow-600 ${wkStyle}`}>1/2</div>;
        case 2: return <div className={`text-gray-300 text-center`}>1</div>;
        case 3: return <div className={`text-green-600 ${wkStyle}`}>2</div>;
        case 4: return <div className={`text-lime-500 ${wkStyle}`}>4</div>;
        default: throw new Error (`No such value: ${value}.`);
    }
}

const WeaknessInfo = ({ weaknesses }) => {
    return (
        <div className="overflow-x-auto">
            <div className="flex">
                {weaknesses.map((w, i) => <div key={i} className="flex flex-col">
                    <TypeInfo name={w.name} className="vertical-writing flex-1 m-1 text-center" />
                    <WeaknessIcon value={w.value} />
                </div>)}
            </div>
        </div>
    );
}

export default WeaknessInfo;