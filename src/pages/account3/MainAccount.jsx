// FormContainer.js
import React from 'react';
import { useStore } from './zustand/store';
import { Stepper, Step, StepLabel } from '@mui/material';
import AccountPage from './steps/account';
import UploadPicturePage from './steps/upload';
import ConfirmationPage from './steps/confirm';

const steps = ['Account', 'Upload Picture', 'Confirmation'];

const AccountFormContainers = () => {
  const { step } = useStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <AccountPage />;
      case 2:
        return <UploadPicturePage />;
      case 3:
        return <ConfirmationPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper activeStep={step - 1}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {renderStep()}
    </div>
  );
};

export default AccountFormContainers;
