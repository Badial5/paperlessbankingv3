import { Box, Step, StepLabel, Typography, Button } from '@mui/material';
import axios from 'axios';

//MUI Icons 
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HomeIcon from '@mui/icons-material/Home';



import { useForm } from 'react-hook-form';
import { useState, useRef, useEffect } from 'react';

import Lottie from 'lottie-web';
import FormCompleteAnimation from './animation/json/formComplete.json';


//Global styles for the dashboard 
import { DashboardBackButton, DashboardHomeButton, DashboardNextButton, DashboardPageBackground, DashboardPaper, DashboardSkipButton, DashboardStepper, GlobalPageBackground } from '../../../../assets/GlobalStyled/Globalstyles';



//Pages
// import AccountPage2 from './step/accountPage';
// import UploadPage2 from './step/uploadPage';
// import ConfirmPage2 from './step/ConfirmPage';
// import SuccessPage from './step/sucessPage';


import MSConfirm from './step/MSConfirm';
import MySchedules from './step/MySchedules';
import SuccessPage from '../../../account4/step/sucessPage';


const baseUrl = 'https://banking-api.inlakssolutions.com/bank/v1/bank-account-request/'



//steps the user will step around
const steps = ['Account Creation', 'Upload Picture', 'Confirmation'];


const MSFormContainer = () => {

  //STATES===============================

  // ==================================================================================

  const [image, setImage] = useState(null);


    //step
    const [step, setStep] = useState(0)


    // const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  //Stepper States ===========================================
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());



  //Form data values
  const [formData, setFormData] = useState({
    first_name: "",
      last_name: "",
      title: "",
      phone_number: "",
      id_type: "",
      id_number: "",
      account_type: "",
      email: "",
      upload: null,
  })



  const { handleSubmit, register, watch, setValue, formState: {errors, isValid}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: formData
  })

 


   //Lottie
   const animationContainer = useRef(null);


   const [showAnimation, setShowAnimation] = useState(true);



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


  //For buttons
  
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


  //For next button
  const handleNextOld = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };


  //For Back button
  const handleBackOld = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  //For each step
  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  //Global handleChange
  const handleChange = input => e => {
    setFormData({...formData, [input]: e.target. value})
  }


   //this will render the pages according to the step number
   const renderStepContent = (step) => {
    switch (step) {

      case 0:
        return <MySchedules formData={formData} handleNext={handleNext} handleChange={handleChange} register={register} isValid={isValid} errors={errors}  />;


      case 1:
        // return <UploadPage2  formData={formData} handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} register={register} isValid={isValid} errors={errors} />;



      case 1:
        
        return <MSConfirm formData={formData} handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} reset={reset} trigger={trigger} setValue={setValue}  handleSubmit={handleSubmit} register={register} isValid={isValid} errors={errors}
        upload={formData.upload} // Pass the 'upload' field value as the 'upload' prop

        submitForm={submitForm} // Pass the submitForm function as a prop
        />;

      default:
        return null;
    }
  };


  //Console logging the form values
  console.log("Form Values: ", formData)



  //Steps handlers ================================================

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };


  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

   // Define function to handle next button click
   const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // Send form data to server for processing
      try {
        const response = await axios.post(baseUrl, formData); // Change "api/form-submit" to your server endpoint that handles form submission
        if (response.status === 200) {
          // Display success message to the user
          alert('Form submitted successfully!');
          setActiveStep(0);
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            age: '', 
            gender: "",
            nationality: '',
            city: '',
          });
        } else {
          // Display error message to the user
          alert('Error submitting form. Please try again later.');
        }
      } catch (error) {
        console.error(error);
        // Display error message to the user
        alert('Error submitting form. Please try again later.');
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };


  //Reset || Refactor it to go back to the homepage
  const handleReset = () => {
    setActiveStep(0);
  };



  const onSubmit = (data) => {
    // Trigger validation for all fields
    trigger().then((isValid) => {
      if (isValid) {
        // Submit data to external API using Axios here
      }
    });
  };


  const submitForm = async () => {
    try {
      // Perform form validation here
      const isValid = await trigger(); // Triggers validation for all fields
      if (!isValid) {
        return; // Stop submission if form is not valid
      }
  
      // Send the form data to the API using Axios
      await axios.post('your_api_url', formData);
  
      // Handle success, e.g., show a success message or redirect to another page
      console.log('Form submitted successfully!');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Form submission error:', error);
    }
  };
  




 



  return (
    <Box sx={{ width: '100%' }}>

      <DashboardPageBackground>

        <DashboardPaper elevation={20}>

          <DashboardStepper activeStep={activeStep}>
          {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}

          </DashboardStepper>


          {activeStep === steps.length ? (
        <>

          {/* This is the Success Page  */}

          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography> */}

          <SuccessPage />



          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ 
              // flex: '1 1 auto', 
              alignSelf: "center", justifyContent: "center" }} />
            <DashboardHomeButton onClick={handleReset}endIcon={<HomeIcon fontSize='small' />}>Reset</DashboardHomeButton>
          </Box>
        </>
      ) : 
      

      // Pages will render here 
      (
        <>

          {renderStepContent(activeStep)}


          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <DashboardBackButton
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
          
            >
              Back
            </DashboardBackButton>


            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <DashboardSkipButton color="inherit" onClick={handleSkip}  sx={{ mr: 1 }}>
                Skip
              </DashboardSkipButton>
            )}

<DashboardNextButton elevation={20} onClick={handleNext} size='small'
//this will enable the button iff the forms are valid
 disabled={!isValid} >
  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
</DashboardNextButton>

          </Box>
        </>
      )}

          
        </DashboardPaper>

      </DashboardPageBackground>
       
      
    </Box>
  )
}

export default MSFormContainer
