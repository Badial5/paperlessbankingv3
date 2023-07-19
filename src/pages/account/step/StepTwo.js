import React from 'react';
// import { useFormContext } from './FormContext';
import { useFormContext } from '../contexts/AccountCreation.context';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { TextFieldCustom } from '../../auth/sign-up/style/signup-styled';

const Step2 = ({nextStep, prevStep}) => {
  const {  handleChange, formData } = useFormContext();
  const { register, handleSubmit } = useForm({
    defaultValues: formData,
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    handleChange('upload', data.upload);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Add your upload component */}
      <TextFieldCustom label="name" />
      <Button onClick={prevStep}>Previous</Button>
      <Button type="submit">Next</Button>
    </form>
  );
};

export default Step2;
