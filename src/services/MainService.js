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

    const getProduct = async (id) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/products/${id}`, 'GET', null, { "Content-Type": 'application/json', "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getMyProducts = async (id) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/users/${id}/products`, 'GET', null, { "Content-Type": 'application/json', "Authorization": `Bearer ${token.replace('"', '')}` });
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

    const getUser = async (id) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/users/${id}`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const editUser = async (id, user) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/users/${id}/edit`, 'POST', JSON.stringify(user),
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const editMyUser = async (user) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/edit`, 'POST', JSON.stringify(user),
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getCategories = async () => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/categories`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const createCategory = async (category) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/categories/create`, 'POST', JSON.stringify(category),
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const removeCategory = async (id) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/categories/${id}/remove`, 'POST', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const createProduct = async (id, product) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/users/${id}/product/create`, 'POST', JSON.stringify(product),
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const editProduct = async (id, product) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/products/${id}/edit`, 'POST', JSON.stringify(product),
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const removeProduct = async (id) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/products/${id}/remove`, 'POST', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getCart = async () => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/cart`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getOrders = async () => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/orders`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const removeOrders = async (id) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/order/${id}/remove`, 'POST', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const editOrders = async (id, data) => {
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/order/${id}/edit`, 'POST', JSON.stringify(data),
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const createCart = async (order) => { // it is only create and add on empty cart
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/cart/create`, 'POST', JSON.stringify(order),
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const addCart = async (order) => { // it is only add on exist cart
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/cart/add`, 'POST', JSON.stringify(order),
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getAllAnalytic = async () => { // it is only add on exist cart
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/analytic/all`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    const getAnalyticProducts = async () => { // it is only add on exist cart
        const token = getLocalStorageWithExpiry('token');
        if (token)
            return await request(`${_apiBase}/analytic/products`, 'GET', null,
                { "Content-Type": "application/json", "Authorization": `Bearer ${token.replace('"', '')}` });
        return null;
    }

    return { login, register, getProducts, getRoles, getUsers, getAllowUsers, getWaitUsers, deleteUser, accessUser, getMyUser, getUser, editUser, editMyUser, getMyProducts, getCategories, createCategory, removeCategory, createProduct, removeProduct, editProduct, getCart, addCart, createCart, getOrders, removeOrders, getAllAnalytic, getAnalyticProducts, getProduct, editOrders, loading, error };
}

export default useMainService;
