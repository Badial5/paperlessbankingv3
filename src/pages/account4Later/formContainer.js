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


//React Toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//Global styles for the dashboard 
import { DashboardBackButton, DashboardHomeButton, DashboardNextButton, DashboardPageBackground, DashboardPaper, DashboardSkipButton, DashboardStepper, GlobalPageBackground } from '../../assets/GlobalStyled/Globalstyles';



//Pages
import AccountPage2 from './step/accountPage';
import UploadPage2 from './step/uploadPage';
import ConfirmPage2 from './step/ConfirmPage';
import SuccessPage from './step/sucessPage';


const baseUrl = 'https://banking-api.inlakssolutions.com/bank/v1/bank-account-request/'



//steps the user will step around
const steps = ['Account Creation', 'Upload Picture', 'Confirmation'];


const FormContainer = () => {


  //STATES===============================

  // ==================================================================================

  const [image, setImage] = useState(null);

  const [globalImage, setGlobalImage] = useState(null)


  const [errorApi, setErrorApi] = useState("")


    //step
    const [step, setStep] = useState(0)


    // const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  //Stepper States ===========================================
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());


// ================================================================================
  //Form data values ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [formData, setFormData] = useState({
      title: "",
      first_name: "",
      last_name: "",
      full_name: "",
      phone_number: "",
      id_type: "",
      id_number: "",
      account_type: "",
      email_address: "",
      selfie_image: '',
  })



  const { handleSubmit, register, unregister, watch, setValue, formState: {errors, isValid}, reset, trigger } = useForm({
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



  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  useEffect(() => {
    // Remove first_name and last_name from the form data
    unregister('first_name');
    unregister('last_name');
  }, [unregister]);

  // ====================================================================

 

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
        return <AccountPage2 formData={formData} handleNext={handleNext} handleChange={handleChange} register={register} isValid={isValid} errors={errors} setValue={setValue} watch={watch} unregister={unregister} />;


      case 1:
        // return <UploadPage2  formData={formData} handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} register={register} isValid={isValid} errors={errors} />;

       return <UploadPage2
        image={image}
        setImage={setImage}

        globalImage={globalImage}
        setGlobalImage={setGlobalImage}
        
        handleNext={handleNext}
        handleBack={handleBack}
        handleChange={handleChange}
        register={register}
        isValid={isValid}
        errors={errors}
        formData={formData}
        setFormData={setFormData}
      />;


      case 2:
        
        return <ConfirmPage2 formData={formData} handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} reset={reset} trigger={trigger} setValue={setValue}  handleSubmit={handleSubmit} register={register} isValid={isValid} errors={errors}
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



   //handleImageChange

  //  const handleImageChange = (event) => {
  //   const imageFile = event.target.files[0];
  //   setFormData({ ...formData, selfie_image: imageFile });
  // };
  


   // Define function to handle next button click

   const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // Send form data to server for processing
  
      // ACCESS TOKEN
      const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwNTE4ODg2LCJpYXQiOjE2OTAyNTk2ODYsImp0aSI6IjY0MmYxNGYyMWFjMDQ3NDQ4MmRhZjk2ZjUwYjc5MzUzIiwidXNlcl9pZCI6Nn0.FJ_LIbrrMvNK7RxB1iVzkwqNQTyV5OLOmGuHWaIt79M'; // Replace with your actual access token

      console.log("+++FORM DATA: ", formData)
  
      try {
        // Prepare the form data
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title); // Replace 'Mr.' with the correct title value
        // formDataToSend.append('full_name', formData.name); // Make sure the 'name' field in formData contains the full name

        formDataToSend.append('first_name', formData.first_name);

        formDataToSend.append('last_name', formData.last_name);

        // formDataToSend.append('full_name', `${formData.first_name} ${formData.last_name}`);

        formDataToSend.append('id_type', formData.id_type); // Replace 'Passport' with the correct ID type value

        formDataToSend.append('id_number', formData.id_number); // Make sure the 'id_number' field in formData contains the user's ID number

        formDataToSend.append('account_type', formData.account_type); // Replace 'Current Account' with the correct account type value
        formDataToSend.append('phone_number', formData.phone_number); // Make sure the 'phone_number' field in formData contains the phone number
        formDataToSend.append('email_address', formData.email); // Make sure the 'email' field in formData contains the email address
        // formDataToSend.append('use_selfie', true);  // Replace 'true' with the actual value for use_selfie
        formDataToSend.append('selfie_image', formData.selfie_image); // Make sure the 'image' field in formData contains the selfie image

        console.log("FormDataToSend: ", formDataToSend)
  
        const response = await axios.post(baseUrl, {
          formData: formDataToSend
        }, {
          headers: {
            // 'Content-Type': 'multipart/form-data',
            'Content-Type': 'application/json', // Set the content type to JSON
            Authorization: `Bearer ${access_token}`,
          },
        });
  
        if (response.status === 200) {
          // Display success message to the user
          // alert('Form submitted successfully!');
          setActiveStep(0);
          setFormData({
           formData
          });
        } else {
          // Display error message to the user
          alert('Error submitting form. Please try again later.');
        }
      } catch (error) {
        console.error(error);
  
        setErrorApi(error.message);
  
        // Display error message to the user
        alert('Error submitting form. Please try again later.');
  
        Object.values(errorApi).forEach(errors => {
          errors.forEach(errorMessage => {
            toast.error(errorMessage); // Display each error message using toast.error()
          });
        });
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  

  //  const handleNext = async () => {
  //   if (activeStep === steps.length - 1) {
  //     // Send form data to server for processing

  //     //ACCESS TOKEN
  // const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwNTE4ODg2LCJpYXQiOjE2OTAyNTk2ODYsImp0aSI6IjY0MmYxNGYyMWFjMDQ3NDQ4MmRhZjk2ZjUwYjc5MzUzIiwidXNlcl9pZCI6Nn0.FJ_LIbrrMvNK7RxB1iVzkwqNQTyV5OLOmGuHWaIt79M';

  //     try {
  //       const response = await axios.post(baseUrl, formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //           Authorization: `Bearer ${access_token}`,
           
  //         },}); // Change "api/form-submit" to your server endpoint that handles form submission
  //       if (response.status === 200) {
  //         // Display success message to the user
  //         // alert('Form submitted successfully!');
  //         setActiveStep(0);
  //         setFormData({
  //           email: '',
  //           password: '',
  //           confirmPassword: '',
  //           name: '',
  //           age: '', 
  //           gender: "",
  //           nationality: '',
  //           city: '',
  //           image: null
  //         });
  //       } else {
  //         // Display error message to the user
  //         alert('Error submitting form. Please try again later.');
  //       }
  //     } catch (error) {
  //       console.error(error);

  //       setErrorApi(error.response.data);

  //       // Display error message to the user
  //       alert('Error submitting form. Please try again later.');

  //       Object.values(errorApi).forEach(errors => {
  //         errors.forEach(errorMessage => {
  //           toast.error(errorMessage); // Display each error message using toast.error()
  
  //           // console.log("Error inside the Inner ForEach: ", errorMessage )
  //         });
  //       });
  //     }
  //   } else {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   }
  // };


  //  const handleNext = async () => {
  //   if (activeStep === steps.length - 1) {
  //     try {
  //       const response = await axios.patch(baseUrl, formData);
  //       if (response.status === 200) {
  //         setActiveStep(0);
  //         setFormData({
  //           email: '',
  //           password: '',
  //           confirmPassword: '',
  //           name: '',
  //           age: '',
  //           gender: '',
  //           nationality: '',
  //           city: '',
  //         });
  //       } else {
  //         alert('Error submitting form. Please try again later.');
  //       }
  //     } catch (error) {
  //       console.error(error);
  
  //       if (error.response && error.response.data) {
  //         const { errors } = error.response.data;
  //         if (errors && Array.isArray(errors)) {
  //           errors.forEach((errorMessage) => {
  //             toast.error(errorMessage);
  //           });
  //         }
  //       } else {
  //         alert('Error submitting form. Please try again later.');
  //       }
  //     }
  //   } else {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   }
  // };
  
  

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
      await axios.post(baseUrl, formData);
  
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
            <Step   sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: '#9747FF', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                {
                  color: '#9747FF', // Just text label (COMPLETED)
                },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#9747FF', // circle color (ACTIVE)
              },
              // '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
              //   {
              //     color: '#9747FF', // Just text label (ACTIVE)
              //   },
              // '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
              //   fill: '#9747FF', // circle's number (ACTIVE)
              // },
            }} key={label} {...stepProps}>
              <StepLabel {...labelProps} 
            >{label}</StepLabel>
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

<DashboardNextButton elevation={20} 
onClick={handleNext}
// onClick={() => setValue(`${first_name} ${last_name}`, full_name), handleNext }
size='small'
//this will enable the button iff the forms are valid
 disabled={!isValid} >
  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
</DashboardNextButton>

          </Box>
        </>
      )}

          
        </DashboardPaper>

        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />

      </DashboardPageBackground>
       
      
    </Box>
  )
}

export default FormContainer
