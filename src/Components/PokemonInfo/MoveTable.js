import MoveInfo from "./MoveInfo";

const MoveTable = ({ moves, learnType, selectedVersion, sort }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="px-2">Name</th>
                    <th className="px-2">Level learned at</th>
                </tr>
            </thead>
            <tbody>
                {moves
                    .filter(m => m.version_group_details
                        .some(v => v.move_learn_method.name === learnType && v.version_group.name === selectedVersion))
                    .map(m => {
                        return {
                            name: m.move.name,
                            level: m.version_group_details.filter(v => v.version_group.name === selectedVersion)[0].level_learned_at
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
    );
}

export default MoveTable;