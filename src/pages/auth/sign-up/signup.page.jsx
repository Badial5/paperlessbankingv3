import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { DevTool } from "@hookform/devtools";
import { useNavigate, Link as RouterLink, Navigate } from 'react-router-dom';
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



import signupImg from "../../../assets/images/signup2.jpg"
import EyeIcon from "../../../assets/svg/eye.svg"


import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


// import { GlobalReactPhone, GlobalTextfieldEmail, PageSubtitle, PageTitle, TextFieldCustom } from './style/signup-styled';

import { GlobalErrorHelperText, GlobalInputLabel, GlobalPaperStyle, GlobalTextfieldEmail, GlobalTextField, GlobalPageHeader, GlobalSubPageHeader, GlobalReactPhone, GlobalPageBackground, GlobalInlaksText, GlobalPasswordStrength, GlobalPasswordMinimumBox, GlobalButton, GlobalLink } from '../../../assets/GlobalStyled/Globalstyles';


//LOADING ANIMATION


import CircularIndeterminate from '../../../assets/GlobalAnimation/ButtonAnimation/LoadingButton';
import { LoadingButton } from '@mui/lab';
import api from '../../../Interceptors/tokenAxios';

// import { LazyMotion, domAnimation, m } from "framer-motion"

// export const MyComponent = ({ isVisible }) => (
//   <LazyMotion features={domAnimation}>
//     <m.div animate={{ opacity: 1 }} />
//   </LazyMotion>
// )





//API PROTOCOL
const baseUrl = "https://banking-api.inlakssolutions.com/accounts/v1/signup/"

const baseUrl2 = "https://banking-api.inlakssolutions.com/accounts/v1/signup/"

const baseUrl3 = "https://api.inlakssolutions.com/accounts/v1/signup/"

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
  



const SignUpFormError = (props) => {

  //FOR THE PASSWORD
  const [passwordWarning, setPasswordWarning] = useState('')
  const [passwordSuggestion, setPasswordSuggestion] = useState([])

  //REDIRECT
  const [redirect, setRedirect] = useState(false)



  const { value, defaultCountry, onChange, classes } = props;

 //error state
//  const [error, setError] = useState(null)



  const [errorApi, setErrorApi] = useState('')

//For the session storage 
const [email, setEmail] = useState('');


  const { handleSubmit, register, setValue,watch, control, formState: {errors, isValid, isLoading, isSubmitting, isSubmitted, isSubmitSuccessful
  }, reset,} = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password1: "",
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


// Inside the component
const handlePasswordChange = (event) => {
  const newValue = event.target.value;
  setInputValue(newValue);
  passwordStrengthChange(newValue);
  handleFieldChangePassword(newValue);
};





//React Spinner 
useEffect(() => {
  setLoadingInProgress(true)
  const timer = setTimeout(() => {
    setLoadingInProgress(false);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

const passwordStrengthChange = (event) => {
    setInputValue(event.target.value);
  }


  const handleFieldChangePassword = (e) => {
    handleInputChange(e);
    passwordStrengthChange(e);
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



  const onSubmit = async (data) => {
    sessionStorage.setItem("email", data.email);
    console.log("Form Data: ", data);
    // data.preventDefault();
    try {
      const response = await api.post(
        // baseUrl3, 
        // "https://api.inlakssolutions.com/accounts/v1/signup/",
        "accounts/v1/signup/",
        data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + sessionStorage.getItem('Token')
          },
        } );
      console.log("Form Submitted", response);
      console.log("Session Storage Email ", email);
     
      console.log('Before toast.success'); // Check if this log is printed in the console
      toast.success('We sent you an email, check and authenticate it');
      
      // setRedirect(true)

      // if (redirect) {
      //   return <Navigate to="/phone-Otp" />
      // }

      reset();

      console.log("Redirect Status: ", redirect)

      navigate("/phone-Otp");


    } catch (error) {

      setErrorApi(error.response.data);
      console.log("Call to the API returns: ", errorApi);

      Object.values(errorApi).forEach(errors => {
        errors.forEach(errorMessage => {
          toast.error(errorMessage); // Display each error message using toast.error()

          // console.log("Error inside the Inner ForEach: ", errorMessage )
        });
      });
      console.log("Error Api: ", errorApi);
    }
  }

  
  


console.log('PASSWORD WARNING: ', passwordWarning)
console.log('PASSWORD SUGGESTION: ', passwordSuggestion)


//TOASIFY ERROR

const ErrorToast = () => toast(errorApi);


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
        <GridLoader 
        // color="#00BFFF" 
        color='#4991ff'
        size={25} />
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

      <GlobalPaperStyle elevation={1}  >



      <>
        <GlobalPageHeader sx={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 1}}  >
          Let’s get started
        </GlobalPageHeader>

        <GlobalSubPageHeader sx={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 1}}>
        Explore banking and financial solutions that are right for you.
        </GlobalSubPageHeader>

        {/* <Box>
          {errorApi}
        </Box> */}

        </>






        <Grid container spacing={1} component="form" 
    onSubmit={handleSubmit(onSubmit)} sx={{padding: "5% 5%",}}>

        <Grid item xs={12} sm={6}>

        <GlobalInputLabel htmlFor='first_name'>First Name</GlobalInputLabel>
        <GlobalTextField  type="text"
          id="first_name"
          fullWidth
          error={Boolean(errors.first_name)}
            variant="outlined"
      
        {...register("first_name", {required: {
        value: true,
        message: "First name is required"
        }, 

        })} 

        // helperText={errors.first_name?.message}

        placeholder='eg. Joseph'
      
        />

        { (errors.first_name?.message  ) &&
        <GlobalErrorHelperText>{errors.first_name?.message}</GlobalErrorHelperText> 
        }

        </Grid>





        {/* Last name TextField  */}
        <Grid item xs={12} sm={6}>

        <GlobalInputLabel htmlFor='last_name'>Last Name</GlobalInputLabel>
          <GlobalTextField type="text"
          id="last_name"
          fullWidth
            error={Boolean(errors.last_name)}

            {...register("last_name", {required: {
        value: true,
        message: "Last name is required"
        }, 
       
        })} 
            
            variant="outlined" 
          placeholder='eg. Smith'
         
     
          />

        { (errors.last_name?.message  ) &&
        <GlobalErrorHelperText>{errors.last_name?.message}</GlobalErrorHelperText> 
        }

        </Grid>


        {/* Phone number  */}

        <Grid item xs={12}>
          <GlobalInputLabel htmlFor='phone_number'>Phone Number</GlobalInputLabel>

<GlobalReactPhone 
fullWidth
  component={TextField} 
  id='phone_number'

  {...register("phone_number", {
    required: {
      value: true,
      message: "phone_number is required"
    }, 
  })} 
  value={watch('phone_number')}
  country={'gh'}
  error={Boolean(errors.phone_number)}
  onChange={onChange}
  enableSearch={true}
  disableSearchIcon={true}
  inputStyle={styles}
  inputProps={{
    maxLength: 16,
    ...register('phone_number') // add register function to input props
  }}

  placeholder='+233 500000000'
/>
{ (errors.phone_number?.message  ) &&
        <GlobalErrorHelperText>{errors.phone_number?.message}</GlobalErrorHelperText> 
}

         
        </Grid>



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

          error={Boolean(errors.password1)}


          variant="outlined" 

          {...register("password1",  {required: {
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

          // value={inputValue}
          // onChange={handlePasswordChange} // Use the new function here

  

       
        

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
  <GlobalPasswordMinimumBox>
    Password must be a minimum of 6 characters, including one letter and a number or symbol
  </GlobalPasswordMinimumBox>
)}



        </Grid>

    <Grid item xs={12} sx={{display: "flex", justifyContent: "center", }}>
        <GlobalButton type='submit'
            // color="secondary"
            sx={{ background: !isValid ? "#cecece" : 
            // 'linear-gradient(90deg, #00BFFF 0%, #00BFFF 53.42%, #00BFFF 103.85%)',
            'linear-gradient(90deg, #4991ff 0%, #4991ff 53.42%, #4991ff 103.85%)',
          
          }}
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
    mb: 1, marginRight: "auto", textDecoration: "none"}}>
        {/* <SignupText textAlign="center">
        👋🏾 Already have an account? {" "}  
        <span style={{color: "#7833EE", 
      textDecoration: "underline"}}> Login</span>
        </SignupText> */}
        👋🏾 Already have an account?  <span style={{
          // color: "#00BFFF", 
          color: "#4991ff",
      textDecoration: "underline", marginLeft: 3}}>{" Login"}</span>
    </GlobalLink>

    {/* <LoadingButton>LoadingTesting</LoadingButton> */}

        
         
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

export default SignUpFormError
