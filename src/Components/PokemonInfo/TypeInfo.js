import useFormat from "../../Hooks/useFormat";

const commonStyle = "rounded p-1 pr-1.5 text-white type-shadow mx-1";

const TypeInfo = ({ name }) => {
    const { capitalize } = useFormat();

    switch (name) {
        case "normal": return <span className={`${commonStyle} bg-gray-300`}>{capitalize(name)}</span>
        case "red": return <span className={`${commonStyle} bg-red-600 shadow-gray-700`}>{capitalize(name)}</span>
        case "fire": return <span className={`${commonStyle} bg-orange-500`}>{capitalize(name)}</span>
        case "water": return <span className={`${commonStyle} bg-sky-500`}>{capitalize(name)}</span>
        case "grass": return <span className={`${commonStyle} bg-green-500`}>{capitalize(name)}</span>
        case "dragon": return <span className={`${commonStyle} bg-purple-700`}>{capitalize(name)}</span>
        case "poison": return <span className={`${commonStyle} bg-fuchsia-600`}>{capitalize(name)}</span>
        case "ground": return <span className={`${commonStyle} bg-amber-500`}>{capitalize(name)}</span>
        case "flying": return <span className={`${commonStyle} bg-indigo-400`}>{capitalize(name)}</span>
        case "ice": return <span className={`${commonStyle} bg-blue-300`}>{capitalize(name)}</span>
        case "rock": return <span className={`${commonStyle} bg-amber-800`}>{capitalize(name)}</span>
        case "bug": return <span className={`${commonStyle} bg-lime-500`}>{capitalize(name)}</span>
        case "psychic": return <span className={`${commonStyle} bg-pink-500`}>{capitalize(name)}</span>
        case "dark": return <span className={`${commonStyle} bg-gray-800`}>{capitalize(name)}</span>
        case "steel": return <span className={`${commonStyle} bg-gray-400`}>{capitalize(name)}</span>
        case "ghost": return <span className={`${commonStyle} bg-slate-700`}>{capitalize(name)}</span>
        case "electric": return <span className={`${commonStyle} bg-yellow-500`}>{capitalize(name)}</span>
        case "fairy": return <span className={`${commonStyle} bg-pink-300`}>{capitalize(name)}</span>
        default: throw new Error(`Type not implemented yet: ${name}`);
    }
}

export default TypeInfo;