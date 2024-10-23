import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import useFetch from "../Hooks/useFetch";
import { usePokemonIds } from "../Hooks/usePokemonData";

import PokemonCard from "../Components/Home/PokemonCard";

const Home = () => {
    const { offset: offsetParam, limit: limitParam } = useParams();
    const offset = Number(offsetParam);
    const limit = Number(limitParam);

    const { data, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    const { getId } = usePokemonIds();

    return (
        <>
            {data &&
                <div className="flex items-center">
                    {data.previous
                        ? <Link to={`/home/${Math.max(offset - limit, 0)}/${limit}`} className="text-center flex-1"><FontAwesomeIcon icon={faArrowLeft} /></Link>
                        : <div className="flex-1" />}
                    <div className="flex justify-center flex-wrap flex-8 overflow-y-scroll results">
                        {data.results && data.results.map((r, i) => <PokemonCard key={i} id={getId(r.name)} name={r.name} />)}
                    </div>
                    {data.next
                        ? <Link to={`/home/${offset + limit}/${limit}`} className="text-center flex-1"><FontAwesomeIcon icon={faArrowRight} /></Link>
                        : <div className="flex-1" />}
                </div>
            }
            {error && <p>{error}</p>}
        </>
    );
}

export default Home;