// UploadPicturePage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useStore } from '../zustand/store';
import {  Box } from '@mui/material';

const UploadPicturePage = () => {
  const { formData, setFormData, setStep } = useStore();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setStep(3);
  };

  const handlePrevious = () => {
    setStep(1);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Upload Your Picture</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Upload"
          {...register('upload')}
          type="file"
          fullWidth
        />
        {/* Other text fields */}

        <button type="button" onClick={handlePrevious}>Previous</button>
        <button type="submit">Next</button>
      </form>
    </Box>
  );
};

export default UploadPicturePage;
