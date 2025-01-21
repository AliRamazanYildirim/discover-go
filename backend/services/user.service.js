import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/users/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createUser = async (username, email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/users`, { username, email, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${apiUrl}/users`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/users/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`${apiUrl}/users/${id}`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/users/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};