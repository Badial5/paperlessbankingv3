import React from 'react';
import { useFormContext } from '../contexts/AccountCreation.context';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

const Step1 = ({step, nextStep, prevStep}) => {
  const {  handleChange, formData } = useFormContext();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: formData,
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    handleChange('first_name', data.first_name);
    handleChange('last_name', data.last_name);
    handleChange('title', data.title);
    handleChange('phone_number', data.phone_number);
    handleChange('id_type', data.id_type);
    handleChange('id_number', data.id_number);
    handleChange('account_type', data.account_type);
    handleChange('email', data.email);

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="First Name"
        {...register('first_name', { required: true })}
        error={!!errors.first_name}
        helperText={errors.first_name && 'First Name is required'}
      />
      {/* Add the remaining input fields */}
      <Button type="submit" disabled={!isValid}>Next</Button>
    </form>
  );
};

export default Step1;
