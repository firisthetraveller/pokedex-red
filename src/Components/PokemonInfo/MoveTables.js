import { useEffect, useState } from "react";

import { usePokemonGenerations } from "../../Hooks/usePokemonData";
import useFormat from "../../Hooks/useFormat";

import MoveTable from "./MoveTable";
import SectionWrapper from "../Base/SectionWrapper";

const MoveTables = ({ moves, genName }) => {
    const [selectedVersion, setSelectedVersion] = useState("red-blue");
    const { getAllNextGenerations } = usePokemonGenerations();
    const { capitalizeAllString } = useFormat();

    const versions = getAllNextGenerations(genName);

    useEffect(() => {
        setSelectedVersion(v => (versions && !versions.includes(v)) ? versions[0] : v);
    }, [versions]);

    return (
        <>
            <select value={selectedVersion} onChange={e => setSelectedVersion(e.target.value)}>
                {versions && versions.map((v, i) => <option key={i} value={v}>{capitalizeAllString(v)}</option>)}
            </select>
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