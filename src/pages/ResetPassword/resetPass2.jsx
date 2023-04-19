// import * as React from 'react';
import { useRef, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import MuiPhoneNumber from 'material-ui-phone-number';

import EyeIcon from "../../../src/assets/svg/eye.svg"


import { Collapse } from "@mui/material"

import axios from "axios"


import { Link as RouterLink, redirect, useNavigate } from 'react-router-dom';


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm } from 'react-hook-form';


// =========================== REACT ANIMATION SPINNER =========================================
//REACT ANIMATION SPINNER 
// import { ClipLoader } from 'react-spinners/ClipLoader';
import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';





// import signupImg from "../../..//assets/images/signup2.jpg" 
// import signupImg from "../../assets/images/signup2.jpg"
import signupImg from "../../assets/images/signup2.jpg";


import { ContainerWrapper, GridContainer, GridItem, InlaksText, PageHeader, 
  PageHeaderAndTitleContainer, SubTitle, ErrorHelperTextContainer, 
 PasswordCheck, PasswordFeedback, PasswordStrengthContainer, ButtonComponent, InputFieldGrid, ButtonText, SignupText, TncText, 
PasswordStrengthBarThree, PasswordStrengthBarOne, PasswordStrengthBarTwo, 
PasswordStregthContainer, PasswordContainer, PasswordMinimumBox,
ErrorAlert, ErrorAlertText, Alert} from './resetPassword.styles';

// import { ContainerWrapper, GridContainer, GridItem, InlaksText, PageHeader, 
//   PageHeaderAndTitleContainer, SubTitle, ErrorHelperTextContainer, 
//  PasswordCheck, PasswordFeedback, PasswordStrengthContainer, ButtonComponent, InputFieldGrid, ButtonText, SignupText, TncText, 
// PasswordStrengthBarThree, PasswordStrengthBarOne, PasswordStrengthBarTwo, 
// PasswordStregthContainer, PasswordContainer, PasswordMinimumBox,
// ErrorAlert, ErrorAlertText, Alert, BottonComp, LoginText} from '../../pages/auth/login/login.styles';

import { CircularProgress } from '@mui/material';  

//Password visiblity
import PasswordStrengthBar from 'react-password-strength-bar';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { GridContainer2, LongTextFieldGridItem, NameLabel, PageHeader2, PageHeaderAndTitleContainer2, PasswordStrengthText, SubTitle2 } from '../auth/sign-up/signup.styles';
import { IdontHaveAccount } from '../auth/forgotPass/forgotPass.styles';





//RESET PASSWORD API ENDPOINT
const baseUrl = "https://api.inlakssolutions.com/accounts/v1/password-reset/"






const theme = createTheme();

export default function ResetPass2() {


  //USEREF FUNCTION 
  const ref = useRef(null)

  //Button Loading state ================================================================
  const [loading, setLoading] = useState(false);

  // REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const [loadingInProgress, setLoadingInProgress] = useState(false);



// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



  const { handleSubmit, register, watch, formState: {errors}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      new_password1: "",
      new_password2: "",
      // password2: "",
      // tnc: ""
    }
  })

// ================================================================================================================== 
  

  //============================= LOCAL STORAGE ==============================================
  const [storedEmail, setStoredEmail] = useState(null);

  //=================================== useEffect ===========================================

  useEffect(() => {
    setStoredEmail(localStorage.getItem("email"));
  }, []);


  console.log("Local Storage Email Value: ", storedEmail)


// ====================================================================================================================

  //Will DELETE IT 

  //API ENDPOINTS
  // REACT COMPONENT USENAVIGATE
  const navigate = useNavigate();

  //error state
  // const [errorss, setError] = useState([])


  //Password Strength bar
const [inputValue, setInputValue] = useState('');
const [value, setValue] = useState()
const [passsuggestion, setPassSuggestion] = useState([])
const [passwarning, setPassWarning] = useState('')

const [phone, setPhone] = useState()
// const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

const [password, setPassword] = useState('');
const [suggestion, setSuggestion] = useState('');

//Password adornment
const [showPassword, setShowPassword] = useState(false);
const [showPassword2, setShowPassword2] = useState(false);

//OPEN OR CLOSE
const [open, setOpen] = useState(true);

//ERROR 
const [error, setError] = useState('')



//Password adornment
// const [showPassword, setShowPassword] = useState(false);
const [state, setState] = useState("")
const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

const passwordStrengthChange = (e) => {
  setInputValue(e.target.value);
}

function handleChange(e) {
  setPassword(e.target.value);
}

function handleCheckboxChange(e) {
  setShowPassword(e.target.checked);
}



useEffect(() => {
  setLoadingInProgress(true)
  const timer = setTimeout(() => {
    setLoadingInProgress(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);



const onSubmit = async (data) => {
  console.log("Form Data: ", data)
  // registerForm()
  // reset()

  try {
// ========================================= LocalStorage ================================================= 
    const response = await axios.post(baseUrl, {
      new_password1: data.new_password1,
      new_password2: data.new_password2,
      email: storedEmail,
    })
    const newResponse = response.data
    // console.log(newResponse)
    // newResponse()

    navigate("/password-congratulation")
 
    console.log("Successful: ", newResponse)
  } catch (error) {
    setError(error.response.data)
    console.log("Error Message: ", error.response.data)
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
    <ThemeProvider theme={theme}>

{loadingInProgress ? (
        <Spinner />
      ) : (

<Box  
     sx={{ 
      // backgroundColor: "yellow", 
      backgroundImage: `url(${signupImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover', 
      display: "flex",  
      
      flexDirection: "column",
      boxSizing: "borderBox",
      backgroundRepeat: 'no-repeat', 
      width: "100%",
      // height: {xs: "100vh"},
      // mx: "auto",
      // my:'auto',
      maxWidth: "100vw",
      minHeight: "100vh"

    }}
    >


      <InlaksText sx={{mx: "auto", mt: 2}}>
        InLaks 
      </InlaksText>

      <ContainerWrapper component="main" maxWidth="xs" 
sx={{
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  // justifyContent: 'center',
  // mx: 'auto',
  // my: 'auto',
  padding: '5px 20px',
  // minHeight: {xs: "50vh", md: "80vh", lg: "70vh"},

}}>

<Box
    sx={{
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center",
      // padding: "30px 14px", this gives it padding
      // backgroundColor: "red",
      padding: "30px 10px",
      // marginBottom: "20px",
      // padding: {xs: "40px 14px", md: "30px 14px"},
      // padding: {xs: "40px 14px"},
     
      // minHeight: {xs: "80vh", md: "80vh", lg: "80vh"}, 
      // maxHeight: {xs: "80vh", md: "80vh", lg: "80vh"},
      // padding: { xs: "30px 15px" }
      // border: "5px solid #fff"
  }}>
    
      
      
          
          <PageHeaderAndTitleContainer sx={{mt: 0}}>

            <PageHeader textAlign="center">
            Reset your password 
            </PageHeader>


            <SubTitle textAlign="center">
            Please set a new password for your account
            </SubTitle>


          </PageHeaderAndTitleContainer>

{/* =======================CLOSE OF PAGE HEADER AND SUBTITLE =================================================  */}


{(error && open ) &&  
 <Collapse in={open}>  
        <ErrorAlert severity="error" onClose={() => setOpen(!open)}
        sx={{
        "& .MuiAlert-icon": {
          color: "#fff"
        }, "& .MuiAlert-action": {
          color: "#fff"
        }, overflow: "hidden", 
        ml: "auto"
         }}>
          
          <ErrorAlertText >
          {Object.values(error)} 
          {/* { Object.entries(error).map(([key, val])=> <p key={key}>{key}: {val}</p>) }  */}
          </ErrorAlertText>

          </ErrorAlert>

      
     </Collapse> 
}


{/* ================================ END OF ERROR ALERT ==================================================  */}
          <GridContainer container component="form" onSubmit={handleSubmit(onSubmit)} 
           sx={{ width: "100%" }}>

        


           {/* =======================PASSWORD =================================================================================================  */}
            




  {/* =======================PASSWORD =================================================================================================  */}
{/* <LongTextFieldGridItem item xs={12}  
            sx={{height: 144}}> */}

<LongTextFieldGridItem item xs={12}  
      sx={{height: 130}}>



<NameLabel sx={{padding: "0px 16px"}}>Password</NameLabel>


<TextField  type={showPassword ? "text" : "password"}
error={Boolean(errors.password1)}
variant="outlined" 
fullWidth
sx={{ padding: "5px 16px", width: "100%",
"& .MuiOutlinedInput-root.Mui-focused": {
"& > fieldset": {
borderColor: "#7833EE"
}
},  [`& fieldset`]:{
borderRadius: "6px" }
}}
InputProps={{
endAdornment: (
<InputAdornment position="end">
   {/* <IconButton
    aria-label="toggle password visibility"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <Visibility /> : <VisibilityOff />}
  </IconButton> */}

  <IconButton
  onClick={() => setShowPassword(!showPassword)}
  >
  <img src={EyeIcon} />
  </IconButton>
</InputAdornment>
),

style: {
height: "2rem",
fontSize: 12,
fontFamily: 'Helvetica Neue'
},
}}

{...register("new_password1",  {required: {
value: true,
message: "Password is required",

}, 
minLength: {
value: 6,
message: "The Minimum length is 6"
} })}  

// ========================================================================== 
      
value={inputValue}
onChange={passwordStrengthChange}
// helperText={errors.password1?.message}

placeholder="Password here"
/>

{/* <ErrorHelperTextContainer>{errors.password1?.message}</ErrorHelperTextContainer> */}


<PasswordStrengthText sx={{padding: "0px 16px", 
fontFamily: 'Helvetica Neue' , fontSize: 12, 
height: 10, mt: "0.5", mb: 1, }}>
Password strength
</PasswordStrengthText>




<PasswordStrengthBar 
style={{width: "100%" , padding: "0px 16px",}} password={inputValue} 

scoreWords={['weak😪', 'okay 😅', 'strong 💪🏾', 'strong💪🏾', 'strong💪🏾']}
shortScoreWord= ""
onChangeScore={(score, feedback) => {
console.log(score, feedback);
// setPassSuggestion({...feedback.warning})
setPassWarning(feedback.warning)
setPassSuggestion(feedback.suggestions)

}}

/>

{/* <Typography sx={{fontFamily: 'Helvetica Neue', fontSize: 12}}> 
{ passwarning} 
</Typography> */}

{/* <Typography sx={{fontFamily: 'Helvetica Neue', fontSize: 12}}>
{passsuggestion}
</Typography> */}

<PasswordMinimumBox sx={{padding: "0px 16px",
color: " #ababab;"}}>
Password must be a minimum of 6 character, including one letter and a number or a symbol
</PasswordMinimumBox>

{/* {passsuggestion.map((suggestion, index) => <p key={index}>{suggestion}</p>)} */}


</LongTextFieldGridItem>




<LongTextFieldGridItem item xs={12}>



<NameLabel sx={{px: "16px", paddingTop: "13px"}}>Confirm Password</NameLabel>


<TextField  type={showPassword2 ? "text" : "password"}
error={Boolean(errors.password2)}
variant="outlined" 
fullWidth
sx={{ padding: "5px 16px", width: "100%",
"& .MuiOutlinedInput-root.Mui-focused": {
"& > fieldset": {
borderColor: "#7833EE"
}
},  [`& fieldset`]:{
borderRadius: "6px" }
}}
InputProps={{
endAdornment: (
<InputAdornment position="end">
  

  <IconButton
  onClick={() => setShowPassword2(!showPassword2)}
  >
  <img src={EyeIcon} />
  </IconButton>
</InputAdornment>
),

style: {
height: "2rem",
fontSize: 12,
fontFamily: 'Helvetica Neue'
},
}}

{...register("new_password2",  {required: {
value: true,
message: "Password is required",

}, 
minLength: {
value: 6,
message: "The Minimum length is 6"
} })}  

// ========================================================================== 
      

// helperText={errors.password1?.message}

placeholder="Password here"
/>

{/* <ErrorHelperTextContainer>{errors.password1?.message}</ErrorHelperTextContainer> */}

</LongTextFieldGridItem>














{/* </PasswordContainer>  */}

      
{/* =============================== CLOSE OF PASSWORD ===================================================================================  */}
      


{/* ======================================= Close of Password Feedbck ==========================================================================  */}

     

{/* =================================== TNC ================================================================================================  */}

         
         






{/* =======================================CLOSE TNC =================================================================================================  */}


{/* =================================== BUTTON ==================================================================================================== */}
          <LongTextFieldGridItem item xs={12}  sx={{height: 80, 
          display: "flex", flexDirection: "column", alignItems: "center", 
          mr: "auto", ml: "auto", mt: 2}}>

              <ButtonComponent type='submit'
              sx={{width: {xs: "20rem", md: "21.5rem"}, height: "30px"}}>
                <ButtonText>
                  Set Password 
                </ButtonText>
              </ButtonComponent>


          <Link component={RouterLink} to="/login" textAlign={"center"} 
          sx={{display: "flex", alignSelf: "center", mt: 1}}>
              <SignupText textAlign="center">
              👈🏽Back to login
              </SignupText>
          </Link>

          </LongTextFieldGridItem>

        
            

          </GridContainer>

        {/* </Box> */}
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}

        </Box>
      
      </ContainerWrapper>

      </Box>

      )}


    </ThemeProvider>
  );



}