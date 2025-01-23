import { create } from 'zustand';

const useLoginStore = create((set) => ({
  formData: {
    email: "",
    password: "",
  },
  error: "",
  loading: false,
  isLoggedIn: false,
  setFormData: (newFormData) => set((state) => ({ formData: { ...state.formData, ...newFormData } })),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));

export default useLoginStore;