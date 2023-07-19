// AccountPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { useStore } from '../zustand/store';

const AccountPage = () => {
  const { formData, setFormData, setStep } = useStore();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Account Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="First Name"
          {...register('first_name')}
          fullWidth
        />
        {/* Other text fields */}

        <button type="submit">Next</button>
      </form>
    </Box>
  );
};

export default AccountPage;
