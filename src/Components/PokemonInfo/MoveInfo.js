import useFormat from "../../Hooks/useFormat";
import { usePokemonMoves } from "../../Hooks/usePokemonData";
import Tooltipped from "../Base/Tooltipped";
import DamageClass from "../Icons/DamageClass";
import TypeInfo from "./TypeInfo";

const MoveInfo = ({ level, name }) => {
    const { capitalizeAllString } = useFormat();
    const { getMove } = usePokemonMoves();

    const info = getMove(name);

    return (
        <tr className="text-center" >
            {info
                ? <>
                    <td className="px-2">
                        <Tooltipped text={info.effect}>
                            {capitalizeAllString(name)}
                        </Tooltipped >
                    </td>
                    <td className="p-2"><TypeInfo name={info.type} /></td>
                    <td className="px-2">{info.power ? info.power : '-'}</td>
                    <td className="px-2">{info.accuracy ? info.accuracy : '-'}</td>
                    <td className="px-2">{info.pp}</td>
                    <td className="px-2"><DamageClass name={info.damage_class} /></td>
                </>
                : <td className="px-2">{capitalizeAllString(name)}</td>
            }
            {level > 0 && <td className="px-2 text-center">{level}</td>}
        </tr>
    );
}

export default MoveInfo;