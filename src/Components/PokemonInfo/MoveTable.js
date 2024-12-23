import useWindowDimensions from "../../Hooks/useWindowDimensions";

import MoveInfo from "./MoveInfo";

const MoveTable = ({ moves, learnType, selectedVersion, sort }) => {
    const displayedMoves = moves
        .filter(m => m.version_group_details
            .some(v => v.move_learn_method.name === learnType && v.version_group.name === selectedVersion));
    const { width } = useWindowDimensions();

    return (
        <>
            {displayedMoves.length > 0
                ? <table>
                    <thead>
                        <tr>
                            <th className="px-2">Name</th>
                            <th className="px-2">Type</th>
                            {width >= 640 && <>
                                <th className="px-2">Power</th>
                                <th className="px-2">Accuracy</th>
                                <th className="px-2">PP</th>
                                <th className="px-2">Class</th>
                            </>}
                            {learnType === "level-up" && <th className="px-2">Level learned at</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {displayedMoves
                            .map(m => {
                                return {
                                    name: m.move.name,
                                    level: m.version_group_details.find(v => v.version_group.name === selectedVersion).level_learned_at
                                }
                            })
                            .sort(sort)
                            .map((m, i) =>
                                <MoveInfo key={i}
                                    level={m.level}
                                    name={m.name}
                                />)}
                    </tbody>
                </table>
                : <p>No moves learnable this way.</p>}
        </>
    );
}

export default MoveTable;