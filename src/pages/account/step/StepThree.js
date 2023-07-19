import React from 'react';
// import { useFormContext } from './FormContext';
import { useFormContext } from '../contexts/AccountCreation.context';
import { Button } from '@mui/material';

const ConfirmationPage = () => {
  const { prevStep, formData } = useFormContext();

  const handleEdit = () => {
    prevStep();
  };

  const handleSubmit = () => {
    // Implement your submit logic here
  };

  return (
    <div>
      <h2>Confirmation Page</h2>
      <p>First Name: {formData.first_name}</p>
      {/* Display the remaining form data */}
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default ConfirmationPage;
