import React, {useContext} from 'react';
import { useFormContext, FormProvider, FormContext } from './contexts/AccountCreation.context';

import Step1 from './step/StepOne';

import Step2 from './step/StepTwo';

import ConfirmationPage from './step/StepThree';
import { Stepper, Step, StepLabel, Box, Paper } from '@mui/material';
import { useState } from 'react';



const steps = ['Step 1', 'Step 2', 'Confirmation'];



const MultiStepForm = () => {
//   const { step, setStep } = useFormContext();
//   const [step, setStep] = useState(1);

    // const {step, setStep} = useContext(FormContext)


    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
      };
    
      const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
      };
    



const getStepContent = (step) => {
    switch (step) {
      case 1:
        return <Step1 step={step} nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <Step2 step={step} nextStep={nextStep} prevStep={prevStep}/>;
      case 3:
        return <ConfirmationPage step={step} nextStep={nextStep} prevStep={prevStep}/>;
      default:
        return null;
    }
  };

  console.log("Step value: ", step)

  return (

    <FormProvider>


<Box
        style={{
          backgroundColor: '#fff',
          height: '100vh',
          borderRadius: 20,
          marginTop: 0,
          paddingLeft: 30,
          paddingRight: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >

        <Paper elevation={12} sx={{ width: '40rem', display: 'flex', flexDirection: "column", padding: '10px 30px', borderRadius: 10 }}
        >



      <Stepper activeStep={step - 1}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>


      {getStepContent(step)}


      </Paper>
      </Box>
    </FormProvider>
  );
};

export default MultiStepForm;
