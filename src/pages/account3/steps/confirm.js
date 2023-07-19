// ConfirmationPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Box, Button } from '@mui/material';
import { useStore } from '../zustand/store';

const ConfirmationPage = () => {
  const { formData, setStep } = useStore();
  const { handleSubmit } = useForm();

  const handlePrevious = () => {
    setStep(2);
  };

  const onSubmit = () => {
    // Handle form submission
    console.log('Submitted data:', formData);
    // Reset form and show success page
    setStep(4);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Confirmation Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="First Name" value={formData.first_name} fullWidth disabled />
        {/* Other text fields with disabled attribute */}

        <button type="button" onClick={handlePrevious}>Previous</button>
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

export default ConfirmationPage;
