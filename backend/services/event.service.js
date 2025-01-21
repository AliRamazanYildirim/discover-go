import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const createEvent = async (eventData) => {
    try {
        const response = await axios.post(`${apiUrl}/events`, eventData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getAllEvents = async () => {
    try {
        const response = await axios.get(`${apiUrl}/events`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getEventById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/events/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateEvent = async (id, eventData) => {
    try {
        const response = await axios.put(`${apiUrl}/events/${id}`, eventData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteEvent = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/events/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};