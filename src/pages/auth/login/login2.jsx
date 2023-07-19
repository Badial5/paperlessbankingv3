import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import { useNavigate, Link as RouterLink, Link } from 'react-router-dom';
import axios from 'axios';



import { Box, Button, Grid, Paper, TextField, Typography, CircularProgress } from '@mui/material';

//React Toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




//Phone Input 
import 'react-phone-input-2/lib/style.css'
// import PhoneTextField from "mui-phone-textfield";

//another
import ReactPhoneInput from 'react-phone-input-material-ui';


//Password visiblity
import PasswordStrengthBar from 'react-password-strength-bar';

//Animations
import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';



import signupImg from "../../../assets/images/signup2.jpg"
import EyeIcon from "../../../assets/svg/eye.svg"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


// import { GlobalReactPhone, GlobalTextfieldEmail, PageSubtitle, PageTitle, TextFieldCustom } from './style/signup-styled';

import { GlobalErrorHelperText, GlobalInputLabel, GlobalPaperStyle, GlobalTextfieldEmail, GlobalTextField, GlobalPageHeader, GlobalSubPageHeader, GlobalReactPhone, GlobalPageBackground, GlobalInlaksText, GlobalPasswordStrength, GlobalPasswordMinimumBox, GlobalButton, GlobalLink } from '../../../assets/GlobalStyled/Globalstyles';


//LOADING ANIMATION


import CircularIndeterminate from '../../../assets/GlobalAnimation/ButtonAnimation/LoadingButton';






//API PROTOCOL
const baseUrl = "https://banking-api.inlakssolutions.com/accounts/v1/login/"




const styles = {
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 12,
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "#7833EE"
      }
    },
    "& fieldset": {
      borderRadius: "6px"
    },
    "& .MuiInputBase-root": {
      height: "2rem"
    }
  };
  



const Login2Form = (props) => {

  const { value, defaultCountry, onChange, classes } = props;



  const [errorApi, setErrorApi] = useState('')

//For the session storage 
const [email, setEmail] = useState('');


  const { handleSubmit, register, setValue,watch, control, formState: {errors, isValid, isLoading, isSubmitting, isSubmitted, isSubmitSuccessful
  }, reset,} = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    }
  })


 

  //router
  const navigate = useNavigate();


  // REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const [loadingInProgress, setLoadingInProgress] = useState(false);
// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Password adornment
const [showPassword, setShowPassword] = useState(false);


//background Color
const backgroundColorText = {
  background: 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
};

//Password Strength bar
const [inputValue, setInputValue] = useState('');
const [values, setValues] = useState()
const [passsuggestion, setPassSuggestion] = useState([])
const [passwarning, setPassWarning] = useState('')





//React Spinner 
useEffect(() => {
  setLoadingInProgress(true)
  const timer = setTimeout(() => {
    setLoadingInProgress(false);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

const passwordStrengthChange = (e) => {
    setInputValue(e.target.value);
  }


  const handleFieldChangePassword = (e) => {
    handleInputChange(e);
    passwordStrengthChange();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // setFormComplete(prevState => ({...prevState, [name]: value }));
  }



  //+++++++++++++ ONSUBMIT +=====================


  // const onSubmit = async (data) => {
  //   console.log("Form Data: ", data)
  //   // registerForm()
  //   // reset()
  
  //   try {
  //     const response = await axios.post(baseUrl, data)
  //     const newResponse = response.data
  //     console.log(newResponse)
  //     // newResponse()
  
    
  //     // navigate("/landing-page")
  //     navigate("/user-dashboard")
  //     reset()
  
  //     console.log("Successful: ", newResponse)
  //   } catch (error) {
  //     setErrorApi(error.response.data)
  //     // console.log("Error Message: ", error.response.data)
  //     toast.error(errorApi)
  //    console.log("Call to the APi returns: ",errorApi)
  //     console.log("Error Message from state: ", error)
  //   }
  
  
  // }

   //+++++++++++++ ONSUBMIT +=====================

  //  const onSubmit = async (data) => {
  //   sessionStorage.setItem("email", data.email);
  //   console.log("Form Data: ", data)
   
  //   try {
  //     const response = await axios.post(baseUrl, data)
  //     const newResponse = response.data
  //     console.log("FORM RESPONSE: ", newResponse)
  //     // newResponse()
      
    
  
  //     console.log("Session Storage Email ", email)
  
    
  //     navigate("/phone-Otp")
  //     reset()
  
  //     // console.log("Successful: ", newResponse)
  //   } catch (error) {
  //     // setError(error.response.data
  //   setErrorApi(error.message)

  //     toast.error(errorApi)
  //    console.log("Call to the APi returns: ",errorApi)


   
  //   }
  // }


  // const onSubmit = async (data) => {
  //   console.log("Form Data: ", data)
  //   // registerForm()
  //   // reset()
  
  //   try {
  //     const response = await axios.post(baseUrl, data)
  //     const newResponse = response.data
  //     console.log(newResponse)
  //     // newResponse()
  
    
  //     // navigate("/landing-page")
  //     navigate("/user-dashboard")
  //     reset()
  
  //     console.log("Successful: ", newResponse)
  //   } catch (error) {
  //     setErrorApi(error.response.data.error)
  //     console.log("Error from Gh: ", error.response.data.error)
  //     toast.error(...errorApi)
  //    console.log("Call to the APi returns: ",...errorApi)
  //     // console.log("Error Message: ", error.response.data)
  //     console.log("Error Message from state: ", ...errorApi)
  //   }
  
  
  // }


  const onSubmit = async (data) => {
    sessionStorage.setItem("email", data.email);
    console.log("Form Data: ", data)
   
    try {
      const response = await axios.post(baseUrl, data)
      const newResponse = response.data
      console.log(newResponse)
  
      console.log("Session Storage Email ", email)
  
    
 
      navigate("/user-dashboard")
      reset()
  
   
    } catch (error) {
      // setError(error.response.data)
  
      setErrorApi(error.response.data);
      console.log("Call to the API returns: ", errorApi);
      


      const errorMessage = error.message 
      console.log("Error MEssage: ", errorMessage)



      Object.values(errorApi).forEach(errors => {
        errors.forEach(errorMessage => {
          toast.error(errorMessage); // Display each error message using toast.error()

          // console.log("Error inside the Inner ForEach: ", errorMessage )
        });
      });
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
          flexDirection: "colummn",
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


        <GlobalPageBackground

      >

      {/* <InlaksText sx={{mt: 5}}>
      Inlaks 
      </InlaksText> */}

      {/* {
        errorApi ? <Box sx={{color: "red"}}> <ErrorToast /> </Box> : ""
      } */}

      <GlobalInlaksText>
        Inlaks
      </GlobalInlaksText>


      {/* <Paper elevation={1} sx={{display: "flex", flexDirection: "column", rowGap: 5, width: {xs: "100%", sm: 600 }, height: "80vh", padding: '0px 30px', borderRadius: 10, fontFamily: "Poppins" }} > */}

      <GlobalPaperStyle elevation={20}  sx={{mb: 15, width: "30%"}}>



      <Box sx={{marginLeft: "auto", marginRight: "auto"}}>
        <GlobalPageHeader>
        Welcome back! 
        </GlobalPageHeader>

        <GlobalSubPageHeader>
        Enter your login credentials to access your account.
        </GlobalSubPageHeader>

        {/* <Box>
          {errorApi}
        </Box> */}

        </Box>






        <Grid container spacing={1} component="form" 
    onSubmit={handleSubmit(onSubmit)} sx={{padding: "1% 5%",}}>



        {/* Email Address  */}

        <Grid item xs={12} sm={12}>
          <GlobalInputLabel htmlFor='email'>Email Address</GlobalInputLabel>

          <GlobalTextField fullWidth id='email'
          
          error={Boolean(errors.email)}
          variant="outlined" 
          placeholder='someexample@gmail.com'
{...register("email", {required: {
value: true,
message: "Email is required", 

}, 
pattern: {
// value: /^\S+@\S+$/i,
// value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

value: /^[^\d][A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
message: "Please enter a valid email address"
}
})}
          />


{ (errors.email?.message  ) &&
        <GlobalErrorHelperText>{errors.email?.message}</GlobalErrorHelperText> 
        }


        </Grid>




        {/* PASSWORD FIELD  */}

        <Grid item xs={12} sm={12}>
          <GlobalInputLabel htmlFor='password'>Password</GlobalInputLabel>

          <GlobalTextField fullWidth id='password'
          type={showPassword ? "text" : "password"}

          error={Boolean(errors.password)}


          variant="outlined" 

          {...register("password",  {required: {
            value: true,
            message: "Password is required",
            
            }, 
            minLength: {
            value: 6,
            message: "The Minimum length is 6"
            } })}  


          value={inputValue}

          onChange={(event) => {
            // handleInputChange(event);
            passwordStrengthChange(event)
            handleFieldChangePassword(event);
          
          }}

       
        

          InputProps={{
            endAdornment: (
            <InputAdornment position="end">
              
            
              <IconButton
              onClick={() => setShowPassword(!showPassword)}
              >
              <img src={EyeIcon} />
              </IconButton>
            </InputAdornment>

            )}}

           
                placeholder="Password here"

          />






  
<Link component={RouterLink} to="/forgotpassword2" 
sx={{padding: "5px 16px",}}>
              <Typography
              
               sx={{fontFamily: "Helvetica Neue", 
              fontWeight: 400, fontSize: 12, 
              lineHeight: "16px",  
              textDecoration: "underline", 
              color: "#434344",
              cursor: "pointer"}}>
                I forgot my password
              </Typography>
</Link>





        </Grid>

    <Grid item xs={12} sx={{display: "flex", justifyContent: "center", }}>
        <GlobalButton type='submit'
            // color="secondary"
            sx={{ background: !isValid ? "cecece" : 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',}}
            disabled={!isValid || isSubmitting}
            size="small"
            variant='contained'
            
            >
         
            
            {
              isSubmitting ? <CircularIndeterminate /> :  "Submit"
            }

        </GlobalButton>
    </Grid>

        <GlobalLink component={RouterLink} to="/" textAlign={"center"} 
    sx={{display: "flex", marginLeft: "auto",
    mb: 5,
    marginRight: "auto", textDecoration: "none"}}>
        {/* <SignupText textAlign="center">
        👋🏾 Already have an account? {" "}  
        <span style={{color: "#7833EE", 
      textDecoration: "underline"}}> Login</span>
        </SignupText> */}
        👋🏾 Already have an account? <span style={{color: "#7833EE", 
      textDecoration: "underline", marginLeft: 3}}>Sign up</span>
    </GlobalLink>

        
         
        {/* end of the Grid container  */}
        </Grid>

        {/* <DevTool control={control} />  */}

        {/* {process.env.NODE_ENV === 'development' && <DevTool control={control} />} */}

        




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

      ) }



    




  
    
    </>
  )
}

export default Login2Form
