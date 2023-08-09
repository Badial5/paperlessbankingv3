import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { DevTool } from "@hookform/devtools";
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';



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



import signupImg from "../../assets/images/signup2.jpg"
import EyeIcon from "../../assets/svg/eye.svg"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


// import { GlobalReactPhone, GlobalTextfieldEmail, PageSubtitle, PageTitle, TextFieldCustom } from './style/signup-styled';

import { GlobalErrorHelperText, GlobalInputLabel, GlobalPaperStyle, GlobalTextfieldEmail, GlobalTextField, GlobalPageHeader, GlobalSubPageHeader, GlobalReactPhone, GlobalPageBackground, GlobalInlaksText, GlobalPasswordStrength, GlobalPasswordMinimumBox, GlobalButton, GlobalLink } from '../../assets/GlobalStyled/Globalstyles';


//LOADING ANIMATION


import CircularIndeterminate from '../../assets/GlobalAnimation/ButtonAnimation/LoadingButton';

// import { LazyMotion, domAnimation, m } from "framer-motion"

// export const MyComponent = ({ isVisible }) => (
//   <LazyMotion features={domAnimation}>
//     <m.div animate={{ opacity: 1 }} />
//   </LazyMotion>
// )





//API PROTOCOL
//recently change it
// const baseUrl = "https://banking-api.inlakssolutions.com/accounts/v1/password-reset/"

const baseUrl = "http://api.inlakssolutions.com/accounts/v1/password-reset/"



//STYLE FOR PHONE INPUT COMPONENT

// const styles = {
//   fontFamily: "Poppins",
//   fontSize: 12,
//   "& .MuiOutlinedInput-root.Mui-focused": {
//     "& > fieldset": {
//       borderColor: "#7833EE"
//     }
//   },
//   "& fieldset": {
//     borderRadius: "6px"
//   },
//   "& .MuiInputBase-root": {
//     height: "2rem"
//   }
// };


// const styles = {
//     width: '100%',
//     fontFamily: "Poppins",
//     fontSize: 12,
//     "& .MuiOutlinedInput-root.Mui-focused": {
//         "& > fieldset": {
//   borderColor: "#7833EE"
//         }
//       },  [`& fieldset`]:{
//         borderRadius: "6px",  },
//     "& .MuiInputBase-root": {
//         height: "2rem",
//       }
//   };
  


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
  



const ResetPass2 = (props) => {

  //FOR THE PASSWORD
  const [passwordWarning, setPasswordWarning] = useState('')
  const [passwordSuggestion, setPasswordSuggestion] = useState([])



  const { value, defaultCountry, onChange, classes } = props;

 //error state
//  const [error, setError] = useState(null)



  const [errorApi, setErrorApi] = useState('')

//For the session storage 
const [email, setEmail] = useState('');


  const { handleSubmit, register, setValue,watch, control, formState: {errors, isValid, isLoading, isSubmitting, isSubmitted, isSubmitSuccessful
  }, reset,} = useForm({
    mode: "onTouched",
    defaultValues: {
      new_password1: "",
      new_password2: "",


    }
  })


 

  //router
  const navigate = useNavigate();


  // REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const [loadingInProgress, setLoadingInProgress] = useState(false);
// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Password adornment
const [showPassword, setShowPassword] = useState(false);
const [showPassword2, setShowPassword2] = useState(false);


//background Color
const backgroundColorText = {
  background: 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
};

//Password Strength bar
const [inputValue, setInputValue] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [values, setValues] = useState()
const [passsuggestion, setPassSuggestion] = useState([])
const [passwarning, setPassWarning] = useState('')


//session storage
const [sessionalEmail, setSessionalEmail] = useState(null);




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
  //   sessionStorage.setItem("email", data.email);
  //   console.log("Form Data: ", data)
   
  //   try {
  //     const response = await axios.post(baseUrl, data)
  //     // const newResponse = response.data
  //     // console.log("FORM RESPONSE: ", newResponse)
  //     // newResponse()

  //     console.log("Form Submitted", response)
  //     console.log("Session Storage Email ", email)
  //     navigate("/phone-Otp")
  //     reset()
  
  //     // console.log("Successful: ", newResponse)
  //   } catch (error) {
  //     // setError(error.response.data
  //     setErrorApi(error.response.data)
  //   // setErrorApi((prevState) => ({...prevState, error.message}))
  //   console.log("Call to the APi returns: ",errorApi)
  //     // toast.error({...errorApi})
  //     toast.error(errorApi.message); // Display the error message using toast.error()

  //     console.log("Error Api: ", errorApi)
   
  //   }
  // }


  useEffect(() => {

    // Read data from sessionStorage on component mount
    const storedData = sessionStorage.getItem('sessionEmail');
    setSessionalEmail(storedData);

    // Update sessionStorage when the data changes
    sessionStorage.setItem('sessionEmail', storedData);

  }, [])



  const onSubmit = async (data) => {
    sessionStorage.setItem("sessionEmail", data.email);
    
    console.log("Form Data: ", data);
    console.log("Session Email at Password Reset: ", sessionalEmail)
  
    try {
      const response = await axios.post(baseUrl, {
        email: sessionalEmail,
        new_password1: data.new_password1,
        new_password2: data.new_password2

      });
      console.log("Form Submitted", response);
      console.log("Session Storage Email ", email);
     
         // Check if this log is printed in the console
      console.log('Before toast.success');
      
     
      
      reset();
      navigate("/login");
      toast.success('Password Reset Successful');


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
      console.log("Error Api: ", errorApi);
    }
  }

  
  
  
  
  
  


  // const onSubmit = async (data) => {
  //   sessionStorage.setItem("email", data.email);
  //   console.log("Form Data: ", data)
  //   // registerForm()
  //   // reset()
  //   try {
  //     const response = await axios.post(baseUrl, data)
  //     const newResponse = response.data
  //     // console.log(newResponse)
  //     // newResponse()
      
  //     // setCurrentEmail(email)
  //     console.log("EMail Context Value: ", email)
  
  //     console.log("Session Storage Email ", email)
  
    
  //     navigate("/phone-Otp")
  //     reset()
  
  //     // console.log("Successful: ", newResponse)
  //   } catch (error) {
  //     // setError(error.response.data)
  
  //     if (error.response.data.message === "Request failed with status code 500") {
  //       console.log("Sorry You made a bad request" )
  //       setError("You made a bad request\n Check the Email")
  //     } else {
  //       setError(error.response.data)
  //     }
  //     // console.log("Error Message: ", error.response.data)
  //     console.log("Error Message from state: ", error) 
  //   }
  // }
  

  //From the Login 
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
  //     // setErrorApi(error.message)
  //     toast.error(...errorApi)
  //    console.log("Call to the APi returns: ",...errorApi)
  //     // console.log("Error Message: ", error.response.data)
  //     console.log("Error Message from state: ", ...errorApi)
  //   }
  
  
  // }


// const onSubmit = async (data) => {
//     sessionStorage.setItem("email", data.email);
//     console.log("Form Data: ", data)
   
//     try {
//       const response = await axios.post(baseUrl, data)
//       const newResponse = response.data
//     //   console.log(newResponse)
    
    
//       navigate("/phone-Otp")
//       reset()
    
//     } catch (error) {
//       console.log("Call to the API returns: ", error)
//       const errorMsg = error.response && error.response.data ? error.response.data : 'Something went wrong'
//       toast.error(errorMsg, {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   }


// const onSubmit = async (data) => {
//   try {
//     sessionStorage.setItem("email", data.email);
//     console.log("Form Data: ", data);
    
//     const response = await fetch(baseUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
    
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message);
//     }
    
//     const responseData = await response.json();
//     console.log(responseData);
  
//     navigate("/phone-Otp");
//     reset();
  
//     return responseData;
//   } catch (error) {
//     console.error(error);
    
//     if (error.message === "Request failed with status code 500") {
//       console.log("Sorry You made a bad request" )
//       setErrorApi("You made a bad request\n Check the Email")
//     } else {
//       setErrorApi("An unexpected error occurred");
//     }
//   }
// }

// const onSubmit = async (data) => {
//   try {
//     sessionStorage.setItem("email", data.email);
//     console.log("Form Data: ", data);

//     fetch(baseUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => {
//       if (!response.ok) {
//         return response.json().then(errorData => {
//           throw new Error(errorData.message);
//         });
//       } else {
//         return response.json();
//       }
//     })
//     .then(responseData => {
//       console.log(responseData);
    
//       navigate("/phone-Otp");
//       reset();
  
//       return responseData;
//     })
//     .catch(error => {
//       console.error(error);
      
//       if (error.message === "Request failed with status code 500") {
//         console.log("Sorry You made a bad request" )
//         setErrorApi("You made a bad request\n Check the Email")
//       } else {
//         setErrorApi("An unexpected error occurred");
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// console.log('PASSWORD WARNING: ', passwordWarning)
// console.log('PASSWORD SUGGESTION: ', passwordSuggestion)


//TOASIFY ERROR



  //REACT SPINNER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const Spinner = () => {
    return (
      <Box
      //   motion.Box 
      // initial={{ opacity: 0, scale: 0.1 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{duration: 20}}

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

      <GlobalPaperStyle elevation={1} sx={{mb: 15, width: "30%"}} >



      <>
        <GlobalPageHeader sx={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 1}}  >
          Reset your password 
        </GlobalPageHeader>

        <GlobalSubPageHeader sx={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 1}}>
        Please set a new password for your account
        </GlobalSubPageHeader>

        {/* <Box>
          {errorApi}
        </Box> */}

        </>






        <Grid container spacing={1} component="form" 
    onSubmit={handleSubmit(onSubmit)} sx={{padding: "5% 5%",}}>



        {/* PASSWORD FIELD  */}

        <Grid item xs={12} sm={12}>
          <GlobalInputLabel htmlFor='password'>Password</GlobalInputLabel>

          <GlobalTextField fullWidth id='password'
          type={showPassword ? "text" : "password"}

          error={Boolean(errors.new_password1)}


          variant="outlined" 

          {...register("new_password1",  {required: {
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


{errors.password1?.message && (
  <GlobalErrorHelperText>{errors.password1.message}</GlobalErrorHelperText>
)}



{inputValue && (
  <>
    <GlobalPasswordStrength>
      Password Strength
    </GlobalPasswordStrength>

    {/* <PasswordStrengthBar
      style={{}}
      password={inputValue}
      scoreWords={[
        'weak😪',
        'okay 😅',
        'strong 💪🏾',
        'strong💪🏾',
        'strong💪🏾'
      ]}
      shortScoreWord=""
      onChangeScore={(score, feedback) => {
        console.log(score, feedback);

        setPassWarning(feedback.warning)
        setPasswordSuggestion(feedback.suggestions)
      }}
    /> */}

{/* <PasswordStrengthBar
  style={{}}
  password={inputValue}
  scoreWords={[
    'weak😪',
    'okay 😅',
    'strong 💪🏾',
    'strong💪🏾',
    'strong💪🏾'
  ]}
  shortScoreWord=""
  onChangeScore={(score, feedback) => {
    console.log(score, feedback);

    if (feedback) {
      setPassWarning(...feedback.warning);
      setPasswordSuggestion(...feedback.suggestions);
    }
  }}
/> */}

<PasswordStrengthBar
  style={{}}
  password={inputValue}
  scoreWords={[
    'weak😪',
    'okay 😅',
    'strong 💪🏾',
    'strong💪🏾',
    'strong💪🏾'
  ]}
  shortScoreWord=""
  onChangeScore={(score, feedback) => {
    console.log(score, feedback);

    if (feedback && feedback.warning) {
      setPassWarning(...feedback.warning);
      setPasswordSuggestion(...feedback.suggestions);
    }
  }}
/>


  </>
)}

{inputValue && (
  <GlobalPasswordMinimumBox sx={{fontSize: {xs: 10, lg: 10 } }}>
    Password must be a minimum of 6 characters, including one letter and a number or symbol
  </GlobalPasswordMinimumBox>
)}



        </Grid>


        <Grid item xs={12} sm={12}>
          <GlobalInputLabel htmlFor='new_password2'>Confirm Password</GlobalInputLabel>

          <GlobalTextField fullWidth id='new_password2'
          type={showPassword2 ? "text" : "password"}

          error={Boolean(errors.new_password2)}


          variant="outlined" 

          {...register("new_password2",  {required: {
            value: true,
            message: "Password is required",
            
            }, 
            minLength: {
            value: 6,
            message: "The Minimum length is 6"
            } })}  


         

         

       
        

          InputProps={{
            endAdornment: (
            <InputAdornment position="end">
              
            
              <IconButton
              onClick={() => setShowPassword2(!showPassword2)}
              >
              <img src={EyeIcon} />
              </IconButton>
            </InputAdornment>

            )}}

           
                placeholder="Password here"

          />


{errors.new_password2?.message && (
  <GlobalErrorHelperText>{errors.new_password2.message}</GlobalErrorHelperText>
)}





{/* ============================ BUTTON ============================= */}

        </Grid>

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

        <GlobalLink component={RouterLink} to="/login" textAlign={"center"} 
    sx={{display: "flex", marginLeft: "auto",
    mb: 5,
    marginRight: "auto", textDecoration: "none"}}>
        {/* <SignupText textAlign="center">
        👋🏾 Already have an account? {" "}  
        <span style={{color: "#7833EE", 
      textDecoration: "underline"}}> Login</span>
        </SignupText> */}
        👋🏾 Already have an account?  <span style={{color: "#7833EE", 
      textDecoration: "underline", marginLeft: 3}}>{" Login"}</span>
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

export default ResetPass2
