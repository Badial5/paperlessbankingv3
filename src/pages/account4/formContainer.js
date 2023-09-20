import { Box, Step, StepLabel, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


//MUI Icons 
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HomeIcon from '@mui/icons-material/Home';


//redux create account
import { useDispatch, useSelector } from 'react-redux';
import { createAccountAction } from '../../redux-toolkit/account/accountSlice';





import { useForm } from 'react-hook-form';
import { useState, useRef, useEffect } from 'react';

import Lottie from 'lottie-web';
import FormCompleteAnimation from './animation/json/formComplete.json';


//React Toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//Global styles for the dashboard 
import { DashboardBackButton, DashboardHomeButton, DashboardNextButton, DashboardPageBackground, DashboardPaper, DashboardSkipButton, DashboardStepper, GlobalButton, GlobalPageBackground } from '../../assets/GlobalStyled/Globalstyles';



//Pages
import AccountPage2 from './step/accountPage';
import UploadPage2 from './step/uploadPage';
import ConfirmPage2 from './step/ConfirmPage';
import SuccessPage from './step/sucessPage';


const baseUrl = 'https://api.inlakssolutions.com/bank/v1/bank-account-request/'



//steps the user will step around
const steps = ['Account Creation',
//  'Upload Picture', 
 'Confirmation'];


const FormContainer = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()


  // const { success } = useSelector((state) => state?.accounts);

    //get store data
    const {
      account: accountCreated,
      loading,
      error,
      success,
    } = useSelector((state) => state?.accounts);
    //redirect after 3 seconds
    useEffect(() => {
      setTimeout(() => {
        if (success) {
          navigate("/user-dashboard");
          //reload tye page
          // window.location.reload();
        }
      }, 3000);
    }, [success]);


  //STATES===============================

  // ==================================================================================


  //image +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [file, setFile] = useState(null)


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
      full_name: "",
      phone_number: "",
      id_type: "",
      id_number: "",
      account_type: "",
      email_address: "",
      selfie_image: null,
  })



  const { handleSubmit, register, unregister, watch, setValue, formState: {errors, isValid}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: formData
  })

 
   const  {selfie_image } = formData


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


  // useEffect(() => {
  //   // Remove first_name and last_name from the form data
  //   unregister('first_name');
  //   unregister('last_name');
  // }, [unregister]);

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
    setFormData({...formData, [input]: e.target.value})
  }




  // const handleImageChange = input => (newFile) => {
  //   setFile( {...formData, [input]: newFile.target.value})
  // }

  // const handleImageChange = (newFile) => {
  //   const {selfie_image} = formData
  //   setFile({
  //     newFile,
  //     selfie_image: URL.createObjectURL(newFile)
  //   })

  //   setFormData(URL.createObjectURL(newFile))

    
    
  // }

  console.log("Selfie_Image from Confirmation Page: ", selfie_image)

  //this work but the image does not show
  const handleImageChange = (newImage) => {
    setFormData({ ...formData, selfie_image: URL.createObjectURL(newImage) });
  };

  // const handleImageChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   // Update the formData with the selected image
  //   setFormData({
  //     ...formData,
  //     selfie_image: selectedFile, // Update the selfie_image property
  //   });
  // };

  // const handleImageChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   // Update the formData with the selected image
  //   setFormData({
  //     ...formData,
  //     selfie_image: selectedFile, // Update the selfie_image property
  //   });
  // };
  
  

  console.log("FIlE Image: ", file)

  console.log("FORM DATA IMAGE: ", formData.selfie_image)

  //assigning file value to image 
 
  //IMAGE D


   //this will render the pages according to the step number
   const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <AccountPage2 formData={formData} handleNext={handleNext} handleChange={handleChange} register={register} isValid={isValid} errors={errors} setValue={setValue} watch={watch} unregister={unregister}  handleImageChange={handleImageChange}  />;


      case 1:

     

      return <ConfirmPage2 formData={formData} handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} reset={reset} trigger={trigger} setValue={setValue}  handleSubmit={handleSubmit} register={register} isValid={isValid} errors={errors}
      selfie_image={selfie_image} file={file} // Pass the 'upload' field value as the 'upload' prop
      
      submitForm={submitForm} // Pass the submitForm function as a prop
      />;




      // case 2:
        
       

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
    
      console.log("+++FORM DATA: ", formData)
  
      
      try {

        // dispatch(createAccountAction(formData))
        const response = await dispatch(createAccountAction(formData));
        reset()
        if (response.status === 'success') {
          // Bank account created successfully
          toast.success('Bank Account Created');
          // Redirect after 3 seconds
          setTimeout(() => {
            navigate('/user-dashboard');
            // Reload the page
            // window.location.reload();
          }, 3000);
        } else {
          // Handle any other success status or error message
          toast.error(response.message || 'An error occurred');
        }

        


        console.log("++++++++++++++++++++++++Account Created+++++++++++++++++++++")
        console.log(formData)
      } catch (error) {
        console.log("Error from Multi Step Create account: ", error)
        toast.error("Sorry there is an error")
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
       //pass the token to header
       const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `multipart/form-data`,
        },
      };

    try {
      // Perform form validation here
      const isValid = await trigger(); // Triggers validation for all fields
      if (!isValid) {
        return; // Stop submission if form is not valid
      }
  
      // Send the form data to the API using Axios
      await axios.post(baseUrl, formData, config );
  
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
                color: '#4991FF', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                {
                  color: '#4991FF', // Just text label (COMPLETED)
                },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#4991FF', // circle color (ACTIVE)
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


            {/* <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <DashboardSkipButton color="inherit" onClick={handleSkip}  sx={{ mr: 1 }}>
                Skip
              </DashboardSkipButton>
            )} */}

<GlobalButton elevation={20}  sx={{width: 100,
    height: 30,}}
onClick={handleNext}
// onClick={() => setValue(`${first_name} ${last_name}`, full_name), handleNext }
size='small'
//this will enable the button iff the forms are valid
 disabled={!isValid} >
  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
</GlobalButton>

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
