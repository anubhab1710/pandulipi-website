import { useState } from "react";
import apiConfig from "../api.config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);
        const resp = await fetch(apiConfig.URL + '/user/signin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({ email, password })
        })
        const data = await resp.json();
        if (!resp.ok) {
            setIsLoading(false);
            setError(data.message);
        } else {
            localStorage.setItem('pandulipi_user', JSON.stringify(data));
            dispatch({ type: 'LOGIN', payload: data })

            setIsLoading(false);
        }
    }
    return { login, error, isLoading };
}