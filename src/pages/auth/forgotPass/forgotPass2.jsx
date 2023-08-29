
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { theme } from '../../../theme/theme';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios"
import { Alert, FormControl, FormGroup, FormHelperText, 
  InputLabel, Paper, styled, Typography } from '@mui/material';

//Password visiblity
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';


//React Toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// =========================== REACT ANIMATION SPINNER =========================================
//REACT ANIMATION SPINNER 
// import { ClipLoader } from 'react-spinners/ClipLoader';
import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';





import EyeIcon from "../../../assets/svg/eye.svg"



//image
import bank1 from "../../../assets/images/bank1.jpg"
import bank6 from "../../../assets/images/bank6.jpg"
import bank7 from "../../../assets/images/bank7.jpg"
import signupImg from "../../..//assets/images/signup2.jpg"



// import {  InlaksText, PageHeader,
//   SubTitle, PaperWrapper,
//  ButtonSubmit, PageHeaderAndTitleContainer, InputFieldState, 
//  InputFieldBox, InputLableText, InputTextField, InputFieldGrid,
//   HelperText, ForgotPassText, BottonComp, LoginText, IdontHaveAccount,
//     ContainerWrapper,
//  } from "./forgotPass.styles"


import Collapse from '@mui/material/Collapse';
// import { ErrorAlert, ErrorAlertText, ErrorHelperTextContainer, LongTextFieldGridItem, NameLabel, PageHeaderAndTitleContainer2 } from '../sign-up/signup.styles'; 



import { ContainerWrapper, GridContainer, GridItem, InlaksText, PageHeader, NameLabel,
  PageHeaderAndTitleContainer, SubTitle, ErrorHelperTextContainer, 
LongTextFieldGridItem, PasswordCheck, PasswordFeedback, PasswordStrengthContainer,
PasswordStrengthText, ButtonComponent, InputFieldGrid, ButtonText, SignupText, 
TncText, PasswordStrengthBarThree, PasswordStrengthBarOne, PasswordStrengthBarTwo,
 PasswordStregthContainer, PasswordContainer, PasswordMinimumBox, ErrorAlertText,
 ErrorAlert, AlreadyHaveAccount, BackgroundWrapper, PageHeaderAndTitleContainer2, 
 PageHeader2, SubTitle2, GridContainer2} from '../sign-up/signup.styles';

 import { BottonComp } from '../login/login.styles';
import { useEffect } from 'react';
import { GlobalButton, GlobalErrorHelperText, GlobalInlaksText, GlobalInputLabel, GlobalLink, GlobalPageBackground, GlobalPageHeader, GlobalPaperStyle, GlobalSubPageHeader, GlobalTextField } from '../../../assets/GlobalStyled/Globalstyles';
import CircularIndeterminate from '../../../assets/GlobalAnimation/ButtonAnimation/LoadingButton';




// import PhoneInput from 'react-phone-number-input'

const baseUrl = "https://api.inlakssolutions.com/accounts/v1/password-reset-otp/"

// const baseUrl2 = "https://banking-api.inlakssolutions.com/accounts/v1/password-reset-otp/"



console.log("ThemeProvider Props:", theme)





//PasswordStrengthBar 
// const styles = {
//   wrap: {
//     width: 300,
//   },
//   input: {
//     display: 'block',
//     width: '100%',
//     height: 38,
//     padding: '6px 10px',
//     borderRadius: 2,
//     border: 'solid 1px #ccc',
//     boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1)',
//     fontSize: 16,
//     outline: '0',
//     boxSizing: 'border-box',
//   },
// };










export default function ForgotPass2() {

  const { handleSubmit, register, setValue,watch, control, formState: {errors, isValid, isLoading, isSubmitting, isSubmitted, isSubmitSuccessful
  }, reset,} = useForm({
    mode: "onChange",
    defaultValues: {
     
      email: "",
    
    }
  })

    // REACT COMPONENT USENAVIGATE
    const navigate = useNavigate();

  //Password adornment
const [showPassword, setShowPassword] = useState(false);


//error state
const [error, setError] = useState(null)


const [errorApi, setErrorApi] = useState(null)





//OPEN OR CLOSE
const [open, setOpen] = useState(true);

console.log("Open value: ", open)
//Password Strength bar
const [inputValue, setInputValue] = useState('');


// REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const [loadingInProgress, setLoadingInProgress] = useState(false);



// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



useEffect(() => {
  setLoadingInProgress(true)
  const timer = setTimeout(() => {
    setLoadingInProgress(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);







//session storage
const [sessionalEmail, setSessionalEmail] = useState(null);


useEffect(() => {

  // Read data from sessionStorage on component mount
  const storedData = sessionStorage.getItem('sessionEmail');
  setSessionalEmail(storedData);

  // Update sessionStorage when the data changes
  sessionStorage.setItem('sessionEmail', storedData);

}, [])

  


  const backgroundColorText = {
    background: 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
  };




  const onSubmit = async (data) => {
    // sessionStorage.setItem("sessionEmail", data.email);
    setSessionalEmail(sessionStorage.setItem("sessionEmail", data.email));

    const retrievedEmail = sessionStorage.getItem("sessionEmail")
    console.log("Retrieved Email: ", retrievedEmail)

    console.log("Form Data: ", data)
    // registerForm()
    // reset()

    console.log("Session Storage Data ", sessionalEmail)

    try {
      const response = await axios.post(baseUrl, data)
      const newResponse = response.data
      console.log(newResponse)
      // newResponse()

    
      reset()
      navigate("/password-reset-otp")
      

      console.log("Successful: ", newResponse)

      Object.values(newResponse).forEach(errors => {
        errors.forEach(successMessage => {
          toast.success(successMessage); // Display each error message using toast.error()
          
          // console.log("Error inside the Inner ForEach: ", errorMessage )
        });
        // I will do something here but I have forgotten 
      });

    } catch (error) {
      

      setErrorApi(error.response.data);
      console.log("Call to the API returns: ", errorApi);

      Object.values(errorApi).forEach(errors => {
        errors.forEach(errorMessage => {
          toast.error(errorMessage); // Display each error message using toast.error()
          
          // console.log("Error inside the Inner ForEach: ", errorMessage )
        });
        // I will do something here but I have forgotten 
      });
      // console.log("Error Message: ", error.response.data)
      console.log("Error Message from state: ", error)
    }


  }











 //REACT SPINNER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${signupImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
        objectFit: "cover",
      }}
    >
      <GridLoader color="#8F45F2" size={25} />
    </Box>
  );
};





  return (
<>

{loadingInProgress ? (
        <Spinner />
      ) : (

    <GlobalPageBackground >
       <CssBaseline />
      

        <GlobalInlaksText>
          InLaks 
        </GlobalInlaksText>

    

      <GlobalPaperStyle elevation={20} sx={{mb: 15, width: "30%"}}>

      <Box sx={{marginLeft: "auto", marginRight: "auto"}}>
        <GlobalPageHeader>
          Forgot Password
        </GlobalPageHeader>

        <GlobalSubPageHeader>
        Enter your account email to reset your password.
        </GlobalSubPageHeader>

      </Box>



      <Grid container spacing={1} component="form" 
    onSubmit={handleSubmit(onSubmit)} >




{/* Email address  */}
<Grid item xs={12} sx={{display: "flex", flexDirection: "column",  alignContent: "center", }}>

<GlobalInputLabel htmlFor='email' sx={{justifyItems: "flex-start"}}>Email</GlobalInputLabel>

  <GlobalTextField id='email' 
  error={Boolean(errors.first_name)}
  variant="outlined"

placeholder='someexample@gmail.com'
{...register("email", {required: {
value: true,
message: "Email is required", 

}, 
pattern: {
value: /^[^\d][A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
message: "Please enter a valid email address"
}
})}

/>

{ (errors.email?.message  ) &&
  <GlobalErrorHelperText>{errors.email?.message}</GlobalErrorHelperText> 
}

</Grid>


{/* ==================CLOSE OF EMAIL ADDRESS ===================================================================================  */}


      












    {/* =================================== BUTTON ==================================================================================================== */}
   

      <Grid item xs={12} sx={{display: "flex", justifyContent: "center", }}>
        <GlobalButton type='submit'
            // color="secondary"
            sx={{ background: !isValid ? "#cecece" : 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',}}
            disabled={!isValid || isSubmitting}
            size="small"
            variant='contained'>
            
            {
              isSubmitting ? <CircularIndeterminate /> :  "Submit"
            }

        </GlobalButton>
    </Grid>



    <GlobalLink component={RouterLink} to="/" textAlign={"center"} 
    sx={{display: "flex", marginLeft: "auto",
    mb: 5,
    marginRight: "auto", textDecoration: "none"}}>
      👋🏾 I don’t have an account? 
      <span style={{color: "#7833EE", 
      textDecoration: "underline", marginLeft: 3}}> Signup</span>
    </GlobalLink>


   

    


</Grid>





</GlobalPaperStyle>  



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



      </GlobalPageBackground>

      )}
      
      </>
  );
}


