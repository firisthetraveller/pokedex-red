import { useEffect, useState } from "react";

import { usePokemonGenerations } from "../../Hooks/usePokemonData";
import useFormat from "../../Hooks/useFormat";

const GameSelector = ({ species, version, setSelectedVersion }) => {
    const [versions, setVersions] = useState([]);
    const { getAllNextGenerations } = usePokemonGenerations();
    const { capitalizeAllString } = useFormat();

    useEffect(() => {
        if (species) {
            setVersions(getAllNextGenerations(species.generation.name));
        }
    }, [species, getAllNextGenerations]);

    useEffect(() => {
        if (versions) {
            setSelectedVersion(v => (versions && !versions.includes(v)) ? versions[0] : v);
        }
    }, [versions, setSelectedVersion]);

    return (
        <select value={version} onChange={e => setSelectedVersion(e.target.value)}>
            {versions && versions.map((v, i) => <option key={i} value={v}>{capitalizeAllString(v)}</option>)}
        </select>
    );
}

export default GameSelector;