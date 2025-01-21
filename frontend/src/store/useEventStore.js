import { create } from 'zustand';

const useEventStore = create((set) => ({
  events: [],
  formData: {
    title: "",
    description: "",
    date: "",
    location: { lat: 0, lng: 0 },
  },
  isEditMode: false,
  modalOpen: false,
  selectedEvent: null,
  setEvents: (events) => set({ events }),
  setFormData: (formData) => set({ formData }),
  setIsEditMode: (isEditMode) => set({ isEditMode }),
  setModalOpen: (modalOpen) => set({ modalOpen }),
  setSelectedEvent: (selectedEvent) => set({ selectedEvent }),
}));

export default useEventStore;