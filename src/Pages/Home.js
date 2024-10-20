import useFetch from "../Hooks/useFetch";

import PokemonCard from "../Components/PokemonCard";

const Home = () => {
    const { data, error } = useFetch("https://pokeapi.co/api/v2/pokemon?page=1");

    return (
        <div className="flex items-center flex-wrap">
            {data.results && data.results.map((r, i) => <PokemonCard key={i} id={i + 1} name={r.name} />)}
        </div>
    );
}

export default Home;