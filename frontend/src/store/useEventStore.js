import { create } from 'zustand';
import { createEvent, getAllEvents, updateEvent, deleteEvent } from '../../../backend/services/event.service';

export const useEventStore = create((set) => ({
    events: [],
    modalOpen: false,
    currentEvent: null,
    mapClickLocation: null,
    setMapClickLocation: (location) => set({ mapClickLocation: location }),
    addEvent: async (event) => {
        try {
            const newEvent = await createEvent(event);
            set((state) => ({ events: [...state.events, newEvent] }));
        } catch (error) {
            console.error('Error adding event:', error);
        }
    },
    getAllEvents: async () => {
        try {
            const response = await getAllEvents();
            set({ events: response.data || [] });
        } catch (error) {
            console.error('Error fetching events:', error);
            set({ events: [] });
        }
    },
    updateEvent: async (id, updatedEvent) => {
        try {
            const updated = await updateEvent(id, updatedEvent);
            set((state) => ({
                events: state.events.map((event) => event._id === id ? updated : event),
            }));
        } catch (error) {
            console.error('Error updating event:', error);
        }
    },
    deleteEvent: async (id) => {
        try {
            await deleteEvent(id);
            set((state) => ({
                events: state.events.filter((event) => event._id !== id),
            }));
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    },
    setEvents: (events) => set({ events }),
    openModal: (event) => set({ modalOpen: true, currentEvent: event }),
    closeModal: () => set({ modalOpen: false, currentEvent: null }),
}));