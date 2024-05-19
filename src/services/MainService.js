import { useHttp } from "../hooks/http.hook";
import { getLocalStorageWithExpiry } from "./getLocalStorageWithExpiry";

const useMainService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "http://rest.server.kz";

    const login = async (username, password) => {
        return await request(`${_apiBase}/login`, 'POST', JSON.stringify({ username, password }));
    }

    const register = async (user) => {
        return await request(`${_apiBase}/register`, 'POST', JSON.stringify(user));
    }

    const getProducts = async () => {
        return await request(`${_apiBase}/products`, 'GET', null);
    }

    const setProduct = async (id) => {
        return await request(`${_apiBase}/register`, 'POST', JSON.stringify(user));
    }

    const getUsers = async (id) => {
        return await request(`${_apiBase}/users/${id}`, 'POST', JSON.stringify({ username, password }));
    }

    const setUser = async (id, user) => {
        return await request(`${_apiBase}/users/edit/${id}`, 'POST', JSON.stringify(user));
    }

    return { login, register };
}

export default useMainService;
