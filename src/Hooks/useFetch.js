import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((d) => {
                setData(d);
                setError("");
            })
            .catch((err) => {
                setError(err.message);
                setData("");
            });
    }, [url]);

    return { data, error };
}

export default useFetch;