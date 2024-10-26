import EvolutionInfo from "./EvolutionInfo";

const EvolutionLine = ({ data }) => {
    return (
        <div className="flex items-center m-2 max-md:self-center overflow-x-auto">
            {data && data.chain && <EvolutionInfo data={data.chain} />}
        </div>
    );
};

export default EvolutionLine; 