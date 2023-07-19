import * as React from 'react';
import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

import { useForm } from "react-hook-form";

// import AccountCreation from './account-creation';
import AccountCreationJs from './step/account-creation';
import Upload from './step/Upload';
import ConfirmStep from './step/Confirm';

// import FormCompleteAnimation from "./animation/json/formComplete.json"


import Lottie from 'lottie-web';
import FormCompleteAnimation from './animation/json/formComplete.json';

import { useState } from 'react';


const steps = ['Account Creation', 'Upload Image', 'Confirm Details'];

export default function MainAccount() {

  const [formData, setFormData] = useState({
    first_name: "",
      last_name: "",
      title: "",
      phone_number: "",
      id_type: "",
      id_number: "",
      account_type: "",
      email: "",
      upload: "",
  })

  const { handleSubmit, register, watch, setValue, formState: {errors, isValid}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: formData
  })

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});


  //Lottie
  const animationContainer = useRef(null);


  const [showAnimation, setShowAnimation] = React.useState(true);


  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: FormCompleteAnimation,
      loop: false,
      autoplay: true,
      renderer: 'svg',
    });
  
    anim.addEventListener('complete', () => {
      // Animation completed, hide the animation and show the completion message
      setShowAnimation(false);
    });
  
    return () => {
      anim.destroy(); // Cleanup the animation when the component unmounts
    };
  }, []);



  



  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleChange = input => e => {
    setFormData({...formData, [input]: e.target. value})
  }

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <AccountCreationJs formData={formData} handleNext={handleNext} handleChange={handleChange} register={register} isValid={isValid} errors={errors}  />;
      case 1:
        return <Upload  formData={formData} handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} />;
      case 2:
        
        return <ConfirmStep formData={formData} handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} reset={reset} trigger={trigger} setValue={setValue}  handleSubmit={handleSubmit} register={register} isValid={isValid} errors={errors}/>;

      default:
        return null;
    }
  };


  console.log("Form Values: ", formData)

  return (
    <Box sx={{ width: '100%' }}>
     

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

      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
          
          <Box>
            {allStepsCompleted()

? (
  <React.Fragment>



{/* ============== When the forms are completed, the feedback message =========== */}

{/* <Box sx={{padding: "10rem 10rem"}}>
  <Typography sx={{ mt: 2, mb: 1,  }}>
  All steps completed - you're finished Games
  </Typography>
</Box> */}

{showAnimation ? (
  <Box
    ref={animationContainer}
    sx={{ width: '100%', height: '100%' }}
    // Adjust the styles as per your requirement
  />
) : (
  <React.Fragment>
    <Box sx={{ padding: '10rem 10rem' }}>
      <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you're finished Games</Typography>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      <Box sx={{ flex: '1 1 auto' }} />
      <Button onClick={handleReset}>Reset</Button>
    </Box>
  </React.Fragment>
)}


  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
  <Box sx={{ flex: '1 1 auto' }} />
  <Button onClick={handleReset}>Reset</Button>
  </Box>



  </React.Fragment>
  ) : (

  <React.Fragment>


{/* ==================== This is the Page header content =====================  */}
  {/* <Typography sx={{ mt: 2, mb: 1, py: 1, fontSize: 41 }}>
  {steps[activeStep]}
  </Typography> */}




{/* ====================== This is the Page Content  ================================ */}
  <Box>{renderStepContent(activeStep)}</Box>



{/* ======================= This is the button content ============================  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}

              {/* <Box sx={{ flex: '1 1 auto' }} /> */}

              {/* <Button onClick={handleNext} sx={{ mr: 1 }}> */}
                {/* I remove Finish nd replace it with null value */}
                {/* {activeStep === totalSteps() - 1 ? '' : 'Next'} */}

              {/* </Button> */}

              {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Done' : 'Complete Step'}
                  </Button>
                ))} */}
            </Box>


          </React.Fragment>


        )}
      </Box>
     
    </Paper>
  </Box>
</Box>
);
}