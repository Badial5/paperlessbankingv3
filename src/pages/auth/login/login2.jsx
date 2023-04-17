
import { useRef, useEffect, useContext} from 'react';

import { CircularProgress } from '@mui/material';  
// import { CircularProgress } from '@mui/joy/CircularProgress'; 

import { Collapse } from "@mui/material"
import { useMediaQuery } from "@mui/material"

import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';




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

import axios from "axios"


import { Link as RouterLink, redirect, useNavigate } from 'react-router-dom';


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm } from 'react-hook-form';

// import signupImg from "../../..//assets/images/signup2.jpg"

import signupImg from "../../../assets/images/signup2.jpg"


import { ContainerWrapper, GridContainer, GridItem, InlaksText, PageHeader, NameLabel,
  PageHeaderAndTitleContainer, SubTitle, ErrorHelperTextContainer, 
LongTextFieldGridItem, PasswordCheck, PasswordFeedback, PasswordStrengthContainer,
PasswordStrengthText, ButtonComponent, InputFieldGrid, ButtonText, SignupText, 
TncText, PasswordStrengthBarThree, PasswordStrengthBarOne, PasswordStrengthBarTwo,
 PasswordStregthContainer, PasswordContainer, PasswordMinimumBox, ErrorAlertText,
 ErrorAlert, AlreadyHaveAccount, BackgroundWrapper, PageHeaderAndTitleContainer2, 
 PageHeader2, SubTitle2, GridContainer2} from '../sign-up/signup.styles';


//Password visiblity
import PasswordStrengthBar from 'react-password-strength-bar';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================================================================

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

// import { PasswordEyeIcon } from "../../../assets/svg/eyeIcon.svg"
// import PasswordEyePng from "../../../assets/svg/eyeIcon.png"
import EyeIcon from "../../../assets/svg/eye.svg"

// ===========================================================================


import { useState } from 'react';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import PhoneTextField from "mui-phone-textfield";


// CONTEXT API ======================================================================

// import { EmailContext, EmailProvider } from '../../../context/emailContext';

// import { EmailContext } from '../../../context/emailContext';

import { EmailContext, EmailProvider } from '../../../context/emailContext';
import { BottonComp } from './login.styles';




//ALERT ERRORS
// import AlertComponent from '../../../components/alerts/alert'; 





//SIGNUP API ENDPOINT
// const baseUrl = "https://api.inlakssolutions.com/accounts/v1/login/"

const baseUrl = "https://banking-api.inlakssolutions.com/accounts/v1/login/"




const theme = createTheme();

export default function Login2Form() {

  //USEREF FUNCTION 
  // const ref = useRef(null)
  const inputRef = useRef(null)

  const { handleSubmit, register, watch, setValue, formState: {errors}, reset,
  getValues, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      
      email: "",
      password: "",
      // password2: "",
      // tnc: ""
    }
  })

  // const { handleSubmit, register, watch, formState: {errors}, reset, trigger } = useForm({
  //   mode: "onTouched",
   
  // })

// ================================================================================================================== 
  
  //phone book
  const [isoValue, setIsoValue] = useState(""); // The input value.
  const [isocountry, setIsoCountry] = useState("GH"); // The selected country.
  const [phoneNumber, setPhoneNumber] = useState(); // The PhoneNumber instance.
  const [selectedCountry, setSelectedCountry] = useState(null);

    //error state
    const [error, setError] = useState(null)

    const [mail, setMail] = useState("")

    //Button Loading state ================================================================
    const [loading, setLoading] = useState(false);


    //OPEN 
    const [open, setOpen] = useState(true)

  //phone book
  const [country, setCountry] = useState('');

  const isXsScreen = useMediaQuery('(max-width:600px)');

  //=========================================================================================================

  const backgroundColorText = {
    background: 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
  };



// const { number } = phoneNumber;

//    console.log("Destructure Phone Number outseide: ", number)
//    setValue("phone_number", phoneNumber)


  
// useEffect(() => {
//   setValue("phone_number", phoneNumber);
// }, [phoneNumber, setValue]);


// ====================================================================================================================

  //Will DELETE IT 

  //API ENDPOINTS
  // REACT COMPONENT USENAVIGATE
  const navigate = useNavigate();

//Button Loading State
const ButtonLoadinghandleClick = () => {
  setLoading(true);
  // simulate an async action
  setTimeout(() => {
    setLoading(false);
  }, 3000);
};

  //Password Strength bar
const [inputValue, setInputValue] = useState('');
const [values, setValues] = useState()
const [passsuggestion, setPassSuggestion] = useState([])
const [passwarning, setPassWarning] = useState('')

const [phone, setPhone] = useState()
// const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

const [password, setPassword] = useState('');
const [suggestion, setSuggestion] = useState('');


// REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const [loadingInProgress, setLoadingInProgress] = useState(false);



// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//CONTEXT API =====================================================================
// export const EmailContext1 = createContext();

// const EmailContext = createContext();
const [email, setEmail] = useState('');


const { setCurrentEmail } = useContext(EmailContext)





// ====================================== CLOSE OF EMAIL CONTEXT ================================= ====== 

//Password adornment
const [showPassword, setShowPassword] = useState(false);
//Password adornment
// const [showPassword, setShowPassword] = useState(false);
const [state, setState] = useState("")
const handleClickShowPassword = () => setShowPassword((show) => !show);

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
    const response = await axios.post(baseUrl, data)
    const newResponse = response.data
    console.log(newResponse)
    // newResponse()

  
    // navigate("/landing-page")
    navigate("/user-dashboard")
    reset()

    console.log("Successful: ", newResponse)
  } catch (error) {
    setError(error.response.data)
    // console.log("Error Message: ", error.response.data)
    console.log("Error Message from state: ", error)
  }


}

const [formComplete, setFormComplete] = useState({
  email: null,
  password: null
});


const handleInputChange = () => {
  // check if all form fields are filled out
  const formIsComplete = Object.values(getValues()).every(val => val !== '');
  setFormComplete(formIsComplete);
}


console.log("Form Complete: ", formComplete)



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
        <PacmanLoader color="#8F45F2" size={25} />
      </Box>
    );
  };




  return (
    <ThemeProvider theme={theme}>

      {/* <EmailProvider value={email} >  */}
      {/* <EmailContext.Provider value={email}>    */}

      {/* <EmailProvider> */}

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
      alignItems: "center",
      flexDirection: "column",
      boxSizing: "borderBox",
      backgroundRepeat: 'no-repeat', 
      width: "100%",
      minHeight: {xs: "100vh", md: "100vh", lg: "100vh"},
      mx: "auto",
      my:'auto',
      maxWidth: "100vw",

    }}
    >

<InlaksText sx={{mb: 0, mt: 5}}>
  Inlaks
</InlaksText>


<ContainerWrapper component="main" maxWidth="xs" 
sx={{
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  // justifyContent: 'center',
  // mx: 'auto',
  // my: 'auto',
  padding: '20px 20px',
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
      padding: "10px 10px",
      // marginBottom: "20px",
      // padding: {xs: "40px 14px", md: "30px 14px"},
      // padding: {xs: "40px 14px"},
     
      // minHeight: {xs: "80vh", md: "80vh", lg: "80vh"}, 
      // maxHeight: {xs: "80vh", md: "80vh", lg: "80vh"},
      // padding: { xs: "30px 15px" }
      // border: "5px solid #fff"
  }}>



<PageHeaderAndTitleContainer2 
sx={{height:  {xs: 60, md: 70, } , 


// height:  {xs: 60, md: 70, } 

}} >
  <PageHeader2 sx={{fontFamily: "Poppins", fontWeight: 800, }} >
      Welcome back!
  </PageHeader2>

  <SubTitle2 sx={{fontFamily: "Poppins", fontWeight: 400, }}>
  Enter your login credentials to access your account.
  </SubTitle2>

</PageHeaderAndTitleContainer2>





{(error && open ) &&  
 <Collapse in={open}>  
        <ErrorAlert severity="error" onClose={() => setOpen(!open)}
        sx={{
        "& .MuiAlert-icon": {
          color: "#fff"
        }, "& .MuiAlert-action": {
          color: "#fff"
        }, overflow: "hidden",  mr: "auto",
        ml: "auto",  width: "21.5rem", mb: 2
         }}>
          <ErrorAlertText >
          {Object.values(error)} 
          {/* { Object.entries(error).map(([key, val])=> <p key={key}>{key}: {val}</p>) }  */}
          </ErrorAlertText>

          </ErrorAlert>

      
     </Collapse> 
}








<GridContainer2 container component="form" 
onSubmit={handleSubmit(onSubmit)}>


    
{/* ===================EMAIL ADDRESS ===========================================================================================  */}


{/* Email address  */}
<LongTextFieldGridItem item xs={12} 
sx={{// Add a marginBottom property when errors.first_name?.message is present
  height: "65px",
  ...(errors.email?.message && {
    height: "70px"
  })}}>
  <NameLabel sx={{padding: "0px 16px",}}>Email Address</NameLabel>
    <TextField fullWidth type="email"
    id="email"
    error={Boolean(errors.email)}
    variant="outlined" 
    sx={{  padding: "5px 16px",
      "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
  borderColor: "#7833EE"
        }
      },  [`& fieldset`]:{
        borderRadius: "6px" }
    }}
    InputProps={{
      
      style: {
        height: "2rem",
        fontSize: 12,
        fontFamily: 'Helvetica Neue'
},
}}

// label="Email Address"
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


onChange={(event) => {
  handleInputChange(event);
  setFormComplete(prevState => ({
    ...prevState,
    email: event.target.value !== '',
  }));
}}


/>

<ErrorHelperTextContainer
>{errors.email?.message}</ErrorHelperTextContainer>
    
</LongTextFieldGridItem>


{/* ==================CLOSE OF EMAIL ADDRESS ===================================================================================  */}


      




{/* =======================PASSWORD =================================================================================================  */}
<LongTextFieldGridItem item xs={12}  
      sx={{height: 80}}>



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

{...register("password",  {required: {
value: true,
message: "Password is required",

}, 
minLength: {
value: 6,
message: "The Minimum length is 6"
} })}  

// ========================================================================== 
      

onChange={(event) => {
  handleInputChange(event);
  setFormComplete(prevState => ({
    ...prevState,
    password: event.target.value !== '',
  }));
}}

placeholder="Password here" />


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

</LongTextFieldGridItem>

  







    {/* =================================== BUTTON ==================================================================================================== */}
    <LongTextFieldGridItem item xs={12}  sx={{height:50, width: "100%",
     
    }}>


      <BottonComp
  type='submit'
  fullWidth
  sx={{
    // width: {xs: "22rem", md: "21.5rem"},
    mt: 3,
    mb: 2,
    background: Object.values(formComplete).every(Boolean)
      ? 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)'
      : '#F3F3F3',
   
  }}
  disabled={!Object.values(formComplete).every(Boolean)}

>
  <ButtonText>
    Login
  </ButtonText>
</BottonComp>


    </LongTextFieldGridItem>





    <Link component={RouterLink} to="/signup" textAlign={"center"} 
    sx={{display: "flex", marginLeft: "auto",
    marginRight: "auto", textDecoration: "none", 
    mt: 2}}>
        <SignupText textAlign="center">
        👋🏾 I don’t have an account? 
        <span style={{color: "#7833EE", 
      textDecoration: "underline"}}> Signup</span>
        </SignupText>
    </Link>

    


</GridContainer2>




</Box>
</ContainerWrapper>  





</Box>

)}

     

      {/* </EmailProvider> */}

      {/* </EmailContext.Provider>   */}

      {/* </EmailProvider>  */}
    </ThemeProvider>
  );
}