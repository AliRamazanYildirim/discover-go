import { create } from 'zustand';
import { createEvent, getAllEvents, updateEvent, deleteEvent } from '../../../backend/services/event.service';

export const useEventStore = create((set) => ({
    events: [],
    modalOpen: false,
    editModalOpen: false,
    deleteModalOpen: false,
    currentEvent: null,
    mapClickLocation: null,
    setMapClickLocation: (location) => set({ mapClickLocation: location }),
    openEditModal: (event) => set({ editModalOpen: true, currentEvent: { ...event } }),
    closeEditModal: () => set({ editModalOpen: false, currentEvent: null }),
    openDeleteModal: (event) => set({ deleteModalOpen: true, currentEvent: event }),
    closeDeleteModal: () => set({ deleteModalOpen: false, currentEvent: null }),

    addEvent: async (event) => {
    try {
        const response = await createEvent(event);
        const newEvent = response.data; // New event data returned from the backend
        set((state) => ({ events: [...state.events, newEvent] }));
        console.log('Event added to store:', newEvent);
    } catch (error) {
        console.error('Error adding event:', error.message || error);
    }
},
    getAllEvents: async () => {
        try {
            const response = await getAllEvents();
            set({ events: response.data || [] });
        } catch (error) {
            console.error('Error fetching events:', error.message || error);
            set({ events: [] });
        }
    },
    updateEvent: async (id, updatedEvent) => {
        try {
            const response = await updateEvent(id, updatedEvent); 
            const updated = response.data; // Updated event data returned from the backend
            set((state) => ({
                events: state.events.map((event) =>
                    event._id === id ? updated : event
                ),
            }));
            console.log('Event updated in store:', updated);
        } catch (error) {
            console.error('Error updating event:', error.message || error);
        }
    },       
    deleteEvent: async (id) => {
        try {
            await deleteEvent(id);
            set((state) => ({
                events: state.events.filter((event) => event._id !== id),
            }));
        } catch (error) {
            console.error('Error deleting event:', error.message || error);
        }
    },
    setEvents: (events) => set({ events }),
    openModal: (event) => set({ modalOpen: true, currentEvent: event }),
    closeModal: () => set({ modalOpen: false, currentEvent: null }),
}));