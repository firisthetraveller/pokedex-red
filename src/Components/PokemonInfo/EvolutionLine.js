import useFetch from "../../Hooks/useFetch";
import EvolutionInfo from "./EvolutionInfo";

const EvolutionLine = ({ url }) => {
    const { data, error } = useFetch(url);

    return (
        <div className="flex items-center my-2 max-md:self-center overflow-x-scroll">
            {data && data.chain && <EvolutionInfo data={data.chain} />}
            {error && <p>{error.message}</p>}
        </div>
    );
}

export default EvolutionLine; 