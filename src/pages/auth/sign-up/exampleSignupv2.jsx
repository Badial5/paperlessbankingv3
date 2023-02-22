
import { useRef, useEffect, useContext} from 'react';

import { CircularProgress } from '@mui/material';  
// import { CircularProgress } from '@mui/joy/CircularProgress'; 

import { Collapse } from "@mui/material"
import { useMediaQuery } from "@mui/material"




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
PasswordStrengthText, ButtonComponent, InputFieldGrid, ButtonText, SignupText, TncText, PasswordStrengthBarThree, PasswordStrengthBarOne, PasswordStrengthBarTwo, PasswordStregthContainer, PasswordContainer, PasswordMinimumBox, ErrorAlertText, ErrorAlert, AlreadyHaveAccount, BackgroundWrapper} from './signup.styles';


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




//ALERT ERRORS
// import AlertComponent from '../../../components/alerts/alert'; 





//SIGNUP API ENDPOINT
const baseUrl = "https://api.inlakssolutions.com/accounts/v1/signup/"






const theme = createTheme();

export default function SignUpFormErrorV1() {

  //USEREF FUNCTION 
  // const ref = useRef(null)
  const inputRef = useRef(null)

  const { handleSubmit, register, watch, setValue, formState: {errors}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password1: "",
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
    const [errorss, setError] = useState(null)

    const [mail, setMail] = useState("")

    //Button Loading state ================================================================
    const [loading, setLoading] = useState(false);


    //OPEN 
    const [open, setOpen] = useState(true)

  //phone book
  const [country, setCountry] = useState('');

  const isXsScreen = useMediaQuery('(max-width:600px)');

  const onChangeIso = ({ formattedValue, phoneNumber: {number} }) => {
   setIsoValue(formattedValue);
  //  setPhoneNumber(phoneNumber);
  setPhoneNumber(number);
  //  setValue("phone_number", number)

   console.log("PhoneNumber Value Inside: ", phoneNumber.number)

  //  const { number } = phoneNumber;

   console.log("Destructure Phone Number: ", number)
   console.log("ISO VALUE: ", isoValue)
   console.log("Value for Phone: ", phone)
};

const onCountrySelect = ({ country, formattedValue, phoneNumber }) => {
   setIsoValue(formattedValue);
   setIsoCountry(country);
   setPhoneNumber(phoneNumber);
};


const handleCountrySelection = country => {
  setSelectedCountry(country);
};


const handleClick = () => {
  setValue("phone_number", phoneNumber);
  setCurrentEmail(email);
  setMail(email)
   
  console.log("Email value NOW: ", email )
  console.log("Mail Value Now: ", mail)
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



// const onSubmit = async (data) => {
//   console.log("Form Data: ", data)
//   try {
//     const response = await axios.post(baseUrl, data)
//     const newResponse = response.data
//     // console.log(newResponse)
//     // newResponse()

//     navigate("/phone-Otp")
 
//     console.log("Successful: ", newResponse)
//   } catch (error) {
//     setError(error.response.data)
//     console.log("Error Message: ", error.response.data)
//   }
// }





const onSubmit = async (data) => {
  localStorage.setItem("email", data.email);
  console.log("Form Data: ", data)
  // registerForm()
  // reset()
  try {
    const response = await axios.post(baseUrl, data)
    const newResponse = response.data
    console.log(newResponse)
    // newResponse()
    
    setCurrentEmail(email)
    console.log("EMail Context Value: ", email)

    console.log("Local Storage Mail ", email)

  
    navigate("/phone-Otp")
    reset()

    // console.log("Successful: ", newResponse)
  } catch (error) {
    // setError(error.response.data)

    if (error.response.data.message === "Request failed with status code 500") {
      console.log("Sorry You made a bad request" )
      setError("You made a bad request\n Check the Email")
    } else {
      setError(error.response.data)
    }
    // console.log("Error Message: ", error.response.data)
    console.log("Error Message from state: ", error) 
  }
}

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};
  


      console.log('phoneNumber Outside Value: ', phoneNumber)

  return (
    <ThemeProvider theme={theme}>

      {/* <EmailProvider value={email} >  */}
      {/* <EmailContext.Provider value={email}>    */}

      {/* <EmailProvider> */}
      
<Box  
     sx={{ 
      // backgroundColor: "yellow", 
      backgroundImage: `url(${signupImg})`,
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      display: "flex",  
      alignItems: "center",
      flexDirection: "column",
      boxSizing: "borderBox",
      backgroundRepeat: 'no-repeat', 
      width: "100%",
      minHeight: "100vh",
      mx: "auto",
      maxWidth: "100vw",
    }}
    >



<ContainerWrapper component="main" maxWidth="sm" 
sx={{minHeight: "80vh",
backgroundColor: "yellow"}}
>

  <CssBaseline />

  <Box
    sx={{
      marginTop: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: "40%",
      backgroundColor: "red"
    }}
  >
    

    
    <PageHeaderAndTitleContainer>

      <PageHeader textAlign="center">
      Let’s get started
      </PageHeader>


      <SubTitle textAlign="center">
      Explore  banking and financial solutions that are right for you.
      </SubTitle>

    


    </PageHeaderAndTitleContainer>

{/* =======================CLOSE OF PAGE HEADER AND SUBTITLE =================================================  */}

{/* ============================== ALERT ERRORS =============================================================  */}


{/* <LongTextFieldGridItem sx={{width: {xs: 380, lg: "34rem"}, padding: errorss ? "0px 20px" : "0px 0px",
marginTop: errorss ? "0px" : "0", marginBottom: errorss ? "0px" : "0", 
marginLeft: 0, marginRight: 13 }}> */}

{/* <LongTextFieldGridItem sx={{padding: errorss ? "0 16px" : "0 0px" , maxWidth: errorss && {xs: "100%"}, 
marginRight: errorss && {xs: 13}, marginTop: 0, marginBottom: 0}}> */}

<Box sx={{width: "95%", marginRight: 13}}>
{ (errorss && open ) &&
<Collapse in={open}>  
  <ErrorAlert severity="error" onClose={() => setOpen(!open)}
  sx={{ 
    
  "& .MuiAlert-icon": {
    color: "#fff"
  }, "& .MuiAlert-action": {
    color: "#fff"
  }, overflow: "hidden"
   }}>
    
    <ErrorAlertText >
    {Object.values(errorss)} 
    {/* { Object.entries(error).map(([key, val])=> <p key={key}>{key}: {val}</p>) }  */}
    </ErrorAlertText>

    </ErrorAlert>


</Collapse> 
}

</Box>


{/* </LongTextFieldGridItem> */}

{/* </LongTextFieldGridItem>  */}


    
{/* ======================================== CLOSE OF ALERT ===================================================  */}

    <GridContainer container component="form" onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 0 }} spacing={2}>

    <GridItem item xs={12} sm={6}  >
    <NameLabel sx={{padding: "0px 17px",}}>First Name</NameLabel>

    <TextField  type="text"
   id="first_name"
   fullWidth
    error={Boolean(errors.first_name)}
    variant="outlined" 
    
    sx={{ 
    padding: "5px 16px",
      "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
  borderColor: "#7833EE"
        }
      },  [`& fieldset`]:{
        borderRadius: "6px",  },

        // Add a marginBottom property when errors.first_name?.message is present
// ...(errors.first_name?.message && {
//   marginBottom: "0.1rem"
// })

// ...(errors.first_name?.message ? { marginBottom: "0.2rem" } : {marginBottom: "0rem"})
    
}}


    InputProps={{
      
      style: {
        height: "2rem",
        fontSize: 12,
        fontFamily: 'Helvetica Neue'
},
}}
{...register("first_name", {required: {
value: true,
message: "First name is required"
}, 

})} 

// helperText={errors.first_name?.message}

placeholder='eg. Joseph'

/>


{ (errors.first_name?.message  ) &&
<ErrorHelperTextContainer>{errors.first_name?.message}</ErrorHelperTextContainer> 
}


   
</GridItem>




    <GridItem item xs={12} sm={6}
    sx={{// Add a marginBottom property when errors.first_name?.message is present
    ...(errors.first_name?.message && {
      height: "80px"
    })}}
    >
    <NameLabel sx={{padding: "0px 17px",}}>
      Last Name
    </NameLabel>

    <TextField  type="text"
   id="last_name" fullWidth
    error={Boolean(errors.last_name)}
    variant="outlined" 
    sx={{  padding: "3px 16px",
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
{...register("last_name", {required: {
value: true,
message: "Last name is required"
}, 

})}  

placeholder='eg. Asante'
/>

<ErrorHelperTextContainer>{errors.last_name?.message}</ErrorHelperTextContainer>

</GridItem>
{/* ===============CLOSE OF FIRST NAME AND LAST NAME =======================================================================  */}



{/* ===================PHONE NUMBER =============================================================================================  */}

<LongTextFieldGridItem item xs={12} 
sx={{mt: "0.3rem"}}
>

<NameLabel sx={{padding: "0px 16px",}}>Phone Number</NameLabel>

{/* <PhoneInput
id="phone"
placeholder='Hello WOlrd'
inputStyle={{ width: "545px" }}
country={'gh'}
enableAreaCodes="false"
enableSearch="true"
value={phone}

onChange={setPhone}
inputExtraProps={{...register("phone_number", e => setPhone(phone))}}
helperText={errors.phone_number?.message}
/> */}


{/* <PhoneInput
id="phone"
placeholder='Hello World'
inputStyle={{ width: "545px" }}
country={'gh'}
enableAreaCodes="false"
enableSearch="true"
value={phone}
onChange={setPhone}
// inputExtraProps={{ name: "phone_number", ref: register({ required: true }) }} 
inputExtraProps={{...register("phone_number", {required: "Phone required"})}} 
// inputExtreProps={{ name: "phone_number", ref: register({ required: true }) }}
helperText={errors.phone_number?.message}
/> */}


{/* <TextField type="tel"
    error={Boolean(errors.phone_number)}
    id="phone"
    variant="outlined" fullWidth
    sx={{ width: "546px", padding: "5px 16px",
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

},
}}

placeholder='(+233) 000 000 000'
{...register("phone_number", {required: {
value: true,
message: "Phone number is required"
},

maxLength: {
value: 13,
message: "The length must be 13"
}, 

minLength: {
value: 12,
message: "You’ve entered an invalid phone number"
}

})}

// helperText={errors.phone_number?.message} 
// autoComplete="email"
/> */}

{/* {selectedCountry && (
  <p>Country Zip Code: {selectedCountry.dialCode}</p>
)} */}

<PhoneTextField 
   placeholder="(+233) 000 000 000"
  // error={Boolean(setIsoValue && phoneNumber?.country !== country)} 
  value={isoValue}
  country={isocountry}
  onCountrySelect={onCountrySelect}
  onChange={onChangeIso}
// inputRef={register({ required: true, maxLength: 13, minLength: 12 })} 
// onCountryChange={handleCountrySelection} 

//   {...register("phone_number" ,{required: {
//     value: true,
//     message: "Phone number is required"
//   },

//   maxLength: {
//     value: 13,
//     message: "The length must be 13"
//   }, 

//   minLength: {
//     value: 12,
//     message: "You’ve entered an invalid phone number"
//   }

// })}


variant="outlined" fullWidth
    sx={{  
      
      padding: "5px 16px",
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



// placeholder='(+233) 000 000 000'
/>


{/* <PhoneTextField
inputRef={register({ 
name: "phone_number",
required: true, 
maxLength: 13, 
minLength: 12,
})}
value={isoValue}
country={isocountry}
onCountrySelect={onCountrySelect}
onChange={onChangeIso}
variant="outlined"
fullWidth
InputProps={{
style: {
height: "2rem",
},
}}
/> */}




{/* <PhoneTextField 
value={isoValue}
country={isocountry}
onCountrySelect={onCountrySelect}
onChange={onChangeIso}
inputProps={{ ref: register({ required: true, maxLength: 13, minLength: 12 }) }}
variant="outlined" fullWidth
sx={{ width: "546px", padding: "5px 16px",
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
},
}}
helperText={errors.phone_number && errors.phone_number.message}
/> */}



{/* <MuiPhoneNumber  
defaultCountry='gh'
inputStyle={{ width: "545px" }}
enableAreaCodes="false"
enableSearch="true"
/>  */}



<ErrorHelperTextContainer 
>{errors.phone_number?.message}</ErrorHelperTextContainer>

</LongTextFieldGridItem>

{/* =================== CLOSE PHONE NUMBER =====================================================================================  */}

     
{/* ===================EMAIL ADDRESS ===========================================================================================  */}


{/* Email address  */}
<LongTextFieldGridItem item xs={12} 
sx={{mt: "0.3rem"}}>
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
// autoComplete="email"
// helperText={errors.email?.message}

/>

<ErrorHelperTextContainer
>{errors.email?.message}</ErrorHelperTextContainer>
    
</LongTextFieldGridItem>


{/* ==================CLOSE OF EMAIL ADDRESS ===================================================================================  */}



     {/* =======================PASSWORD =================================================================================================  */}
      




{/* =======================PASSWORD =================================================================================================  */}
{/* <LongTextFieldGridItem item xs={12}  
      sx={{height: 144}}> */}

<PasswordContainer 
// sx={{width: "100%"}}

sx={{
marginTop:"14px",
// Add a marginBottom property when errors.first_name?.message is present
width: "110%",
...(errors.email?.message && {
height: "100%", 
marginTop: 3.5
})}}
>

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

{...register("password1",  {required: {
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
fontFamily: 'Helvetica Neue', fontSize: 11}}>
Password strength
</PasswordStrengthText>



{/* <PasswordStrengthBarOne  style={{width: 100, height: "0px", backgroundColor: "#000000"}} />
<PasswordStrengthBarTwo  style={{width: 100, height: "0px", backgroundColor: "#db0e0e"}} />
<PasswordStrengthBarThree  style={{width: 100, height: "0px", backgroundColor: "#2cea0b"}} /> */}

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


</PasswordContainer>
{/* </LongTextFieldGridItem> */}

{/* <PasswordStrengthBar password={password} bars={2}  inputExtraProps={{width: 300}}
onChange={({suggestions}) => setSuggestion(suggestions)} />
{suggestion && <p>{suggestion}</p>} */}





{/* =============================== CLOSE OF PASSWORD ===================================================================================  */}




{/* <PasswordStrengthText sx={{color: "red", marginTop: 0}}>
{ passwarning} 
</PasswordStrengthText>

<PasswordStrengthText sx={{color: "green", marginTop: 0}}>
{passsuggestion}
</PasswordStrengthText> */}


{/* ======================================= Close of Password Feedbck ==========================================================================  */}



{/* =================================== TNC ================================================================================================  */}

<br />


    <TncText sx={{padding: "0px 32px", mt: 2, fontSize: 12,
  width: "100%"}}>
    By clicking create account you agree to Inlaks 
  <span style={{color: "#7833EE"}}> Terms and conditions </span> , 
  confirm you have read our 
  <span style={{color: "#7833EE"}}> Privacy Policy </span>
    </TncText>
   





{/* =======================================CLOSE TNC =================================================================================================  */}


{/* =================================== BUTTON ==================================================================================================== */}
    <LongTextFieldGridItem item xs={12}  sx={{height:105, width: "100%",
    mt: -2, 
    }}>

        <ButtonComponent type='submit'
        // onClick={() => setValue("phone_number", phoneNumber) } 
       fullWidth
        onClick={ () => ButtonLoadinghandleClick, handleClick}
        
        sx={{ 
        padding: "0px 16px", }}>
          <ButtonText>
            {loading ? ( <CircularProgress sx={{color: "#fff"}} size={24}  /> ) : "Create account"}  
          </ButtonText>
        </ButtonComponent>


    <Link component={RouterLink} to="/login" textAlign={"center"} 
    sx={{display: "flex", alignSelf: "center",
    textDecoration: "none"}}>

        <SignupText textAlign="center">
        👋🏾 Already have an account? {" "}  
        <span style={{color: "#7833EE", 
      textDecoration: "underline"}}> Login</span>
        </SignupText>
    </Link>

    </LongTextFieldGridItem>

    


      {/* <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid> */}


    </GridContainer>
    
  </Box>
  {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}

</ContainerWrapper>


      

    
      </Box>

     

      {/* </EmailProvider> */}

      {/* </EmailContext.Provider>   */}

      {/* </EmailProvider>  */}
    </ThemeProvider>
  );
}