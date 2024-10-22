import MoveTable from "./MoveTable";
import SectionWrapper from "../Base/SectionWrapper";

const MoveTables = ({ moves, selectedVersion }) => {
    return (
        <>
            <SectionWrapper name="Learned moves by leveling up">
                <MoveTable moves={moves} learnType="level-up" sort={(a, b) => a.level - b.level} selectedVersion={selectedVersion} />
            </SectionWrapper>
            <SectionWrapper name="Learned moves by tutor">
                <MoveTable moves={moves} learnType="tutor" sort={(a, b) => a.name < b.name} selectedVersion={selectedVersion} />
            </SectionWrapper>
            <SectionWrapper name="Learned moves by TMs">
                <MoveTable moves={moves} learnType="machine" sort={(a, b) => a.name < b.name} selectedVersion={selectedVersion} />
            </SectionWrapper>
        </>
    );
}

export default MoveTables;