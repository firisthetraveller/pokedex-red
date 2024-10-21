import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import useFetch from "../Hooks/useFetch";

import PokemonCard from "../Components/PokemonCard";
import usePokemonIds from "../Hooks/usePokemonIds";


const Home = () => {
    const { offset: offsetParam, limit: limitParam } = useParams();
    const offset = Number(offsetParam);
    const limit = Number(limitParam);

    const { data, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    const { getId } = usePokemonIds();

    return (
        <>
            {data && <div className="flex items-center flex-wrap">
                {data.previous && <Link to={`/home/${Math.max(offset - limit, 0)}/${limit}`} ><FontAwesomeIcon icon={faArrowLeft} /></Link>}
                {data.results && data.results.map((r, i) => <PokemonCard key={i} id={getId(r.name)} name={r.name} />)}
                {data.next && <Link to={`/home/${offset + limit}/${limit}`}><FontAwesomeIcon icon={faArrowRight} /></Link>}
            </div>}
            {error && <p>{error}</p>}
        </>
    );
}

export default Home;