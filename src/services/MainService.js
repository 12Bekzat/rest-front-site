import { useHttp } from "../hooks/http.hook";
import { getLocalStorageWithExpiry } from "./getLocalStorageWithExpiry";

const useMainService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "http://localhost:7171";

    const login = async (username, password) => {
        return await request(`${_apiBase}/login`, 'POST', JSON.stringify({ username, password }));
    }

    const register = async (user) => {
        return await request(`${_apiBase}/register`, 'POST', JSON.stringify(user));
    }

    const getProducts = async () => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/products`, 'GET', null, { "Content-Type": 'application/json', "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getRoles = async () => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/roles`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getUsers = async () => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/users`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getAllowUsers = async () => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/users/allow`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getWaitUsers = async () => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/users/wait`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const deleteUser = async (id) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/users/${id}/remove`, 'POST', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const accessUser = async (id) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/users/${id}/access`, 'POST', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getMyUser = async () => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/my`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    return { login, register, getProducts, getRoles, getUsers, getAllowUsers, getWaitUsers, deleteUser, accessUser, getMyUser, loading, error };
}

export default useMainService;
