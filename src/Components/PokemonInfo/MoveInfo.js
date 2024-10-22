import useFormat from "../../Hooks/useFormat";

const MoveInfo = ({ level, name }) => {
    const { capitalizeAllString } = useFormat();

    return (
        <tr>
            <td className="px-2">{capitalizeAllString(name)}</td>
            {level > 0 && <td className="px-2 text-center">{level}</td>}
        </tr>
    );
}

export default MoveInfo;