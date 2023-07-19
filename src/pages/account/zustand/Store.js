// formStore.js
import create from 'zustand';

const useStore = ((set) => ({
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
  setStep: (step) => set({ step }),
  setFormData: (data) => set({ formData: data }),
}));

export default useStore;
