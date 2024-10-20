import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import EvolutionInfo from "./EvolutionInfo";

const EvolutionLine = ({ url }) => {
    const { data: speciesData, error } = useFetch(url);
    const [evolutionData, setEvolutionData] = useState("");
    const [evolutionError, setEvolutionError] = useState("");

    useEffect(() => {
        if (speciesData) {
            fetch(speciesData.evolution_chain.url)
            .then((response) => response.json())
            .then((d) => {
                setEvolutionData(d);
                setEvolutionError("");
            })
            .catch((err) => {
                setEvolutionError(err.message);
                setEvolutionData("");
            });
        }
    }, [speciesData]);

    return (
        <div className="flex">
            {evolutionData && evolutionData.chain && <EvolutionInfo data={evolutionData.chain} />}
            {error && <p>{error.message}</p>}
            {evolutionError && <p>{evolutionError.message}</p>}
        </div>
    );
}

export default EvolutionLine; 