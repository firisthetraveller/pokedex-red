import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const setStatus = (data, error, loading) => {
        setData(data);
        setError(error);
        setLoading(loading);
    }

    useEffect(() => {
        setStatus("", "", true);
        fetch(url)
            .then((response) => response.json())
            .then((d) => {
                setStatus(d, "", false);
            })
            .catch((err) => {
                setStatus("", err.message, false);
            });
    }, [url]);

    return { data, error, loading };
}

export default useFetch;