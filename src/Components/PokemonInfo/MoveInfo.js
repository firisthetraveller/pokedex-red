import useFormat from "../../Hooks/useFormat";

const MoveInfo = ({ level, name }) => {
    const { capitalizeAllString } = useFormat();

    return (
        <tr>
            <td className="px-2">{capitalizeAllString(name)}</td>
            <td className="px-2">{level}</td>
        </tr>
    );
}

export default MoveInfo;