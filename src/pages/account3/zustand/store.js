// formStore.js
import create from 'zustand';

export const useStore = create((set) => ({
  step: 1,
  formData: {
    first_name: '',
    last_name: '',
    title: '',
    phone_number: '',
    id_type: '',
    id_number: '',
    account_type: '',
    email: '',
    upload: '',
  },
  setStep: (step) => set({ step: step + 1}),
  setFormData: (data) => set({ formData: data }),
}));

