import useFormat from "../../Hooks/useFormat";

const commonStyle = "rounded p-1 pr-1.5 text-white type-shadow mx-1";

const getTypeColorStyle = (name) => {
    switch (name) {
        case "normal": return "bg-gray-300";
        case "fighting": return "bg-red-600 shadow-gray-700";
        case "fire": return "bg-orange-500"
        case "water": return "bg-sky-500";
        case "grass": return "bg-green-500";
        case "dragon": return "bg-purple-700";
        case "poison": return "bg-fuchsia-600";
        case "ground": return "bg-amber-500";
        case "flying": return "bg-indigo-400";
        case "ice": return "bg-blue-300";
        case "rock": return "bg-amber-800";
        case "bug": return "bg-lime-500";
        case "psychic": return "bg-pink-500";
        case "dark": return "bg-gray-800";
        case "steel": return "bg-gray-400";
        case "ghost": return "bg-slate-700";
        case "electric": return "bg-yellow-500";
        case "fairy": return "bg-pink-300";
        default: throw new Error(`Type not implemented yet: ${name}`);
    }
}
 
const TypeInfo = ({ name }) => {
    const { capitalize } = useFormat();

    return <span className={`${commonStyle} ${getTypeColorStyle(name)} font-semibold`}>{capitalize(name)}</span>
}

export default TypeInfo;