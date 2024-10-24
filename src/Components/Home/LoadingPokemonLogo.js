import PokemonLogo from "../Icons/PokemonLogo";

const LoadingPokemonLogo = () => {
    return (
        <div className="w-full h-full flex items-center justify-center absolute">
            <PokemonLogo spinning={true} className="size-32 " />
        </div>
    );
}

export default LoadingPokemonLogo;