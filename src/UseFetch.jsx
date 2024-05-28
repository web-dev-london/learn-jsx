import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const result = await response.json()
                setData(result)
                setError(null)
                setIsLoading(false)
            } catch (error) {
                if (error instanceof Error)
                    setError(error.message)
                setIsLoading(false)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, isLoading, error };
}

export default UseFetch;