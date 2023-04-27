import { useState } from "react";
import apiConfig from "../api.config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const signup = async (name, email, password, cpassword,gradYear, dept) => {
        setIsLoading(true);
        setError(null);
        const resp = await fetch(apiConfig.URL + '/user/signup', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ name, email, password, cpassword ,gradYear, dept})
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
    return { signup, isLoading, error };
}