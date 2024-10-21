import { useState } from "react";

import { usePokemonGenerations } from "../../Hooks/usePokemonData";
import useFormat from "../../Hooks/useFormat";

import MoveTable from "./MoveTable";
import SectionWrapper from "./SectionWrapper";

const MoveTables = ({ moves, genName }) => {
    const [selectedVersion, setSelectedVersion] = useState("red-blue");
    const { getAllNextGenerations } = usePokemonGenerations();
    const { capitalizeAllString } = useFormat();

    const versions = getAllNextGenerations(genName);

    return (
        <>
            <select value={selectedVersion} onChange={e => setSelectedVersion(e.target.value)}>
                {versions && versions.map((v, i) => <option key={i} value={v}>{capitalizeAllString(v)}</option>)}
            </select>
            <SectionWrapper name="Learned moves by leveling up">
                <MoveTable moves={moves} learnType="level-up" sort={(a, b) => a.level - b.level} selectedVersion={selectedVersion} startGen={genName} />
            </SectionWrapper>
        </>
    );
}

export default MoveTables;