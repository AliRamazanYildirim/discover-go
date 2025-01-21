import axios from 'axios';

// API Base URL
const apiUrl = import.meta.env.VITE_API_URL;

// Common API Handler to Follow DRY Principle
const apiRequest = async (method, endpoint, data = null) => {
    try {
        const response = await axios({
            method,
            url: `${apiUrl}${endpoint}`,
            data,
        });
        return response.data;
    } catch (error) {
        console.error(`API Error [${method.toUpperCase()} ${endpoint}]:`, error.response?.data || error.message);
        throw error.response?.data || { message: "An unexpected error occurred." };
    }
};

// Event API Endpoints
export const getEvents = async () => {
    return apiRequest('get', '/events');
};

export const getEventById = async (id) => {
    if (!id) throw new Error("Event ID is required");
    return apiRequest('get', `/events/${id}`);
};

export const createEvent = async (eventData) => {
    const { title, description, date, location } = eventData;
    if (!title || !description || !date || !location?.lat || !location?.lng) {
        throw new Error("All fields are required to create an event");
    }
    return apiRequest('post', '/events', eventData);
};

export const updateEvent = async (id, updatedData) => {
    if (!id) throw new Error("Event ID is required");
    return apiRequest('put', `/events/${id}`, updatedData);
};

export const deleteEvent = async (id) => {
    if (!id) throw new Error("Event ID is required");
    return apiRequest('delete', `/events/${id}`);
};

// Utility for User Feedback or Logging (Open for Extension)
export const handleApiError = (error) => {
    const errorMessage = error?.message || "An unexpected error occurred.";
    console.error("Handled API Error:", errorMessage);
    return errorMessage;
};
