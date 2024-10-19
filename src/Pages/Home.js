import useFetch from "../Hooks/useFetch";

import PokemonCard from "../Components/PokemonCard";

const Home = () => {
    const { data, error } = useFetch("https://pokeapi.co/api/v2/pokemon?page=1");

    return (
        <div>
            {data.results && data.results.map((r, i) => <PokemonCard key={i} name={r.name} />)}
        </div>
    );
}

export default Home;