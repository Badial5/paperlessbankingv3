
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
PasswordStrengthText, ButtonComponent, InputFieldGrid, ButtonText, SignupText, TncText, PasswordStrengthBarThree, PasswordStrengthBarOne, PasswordStrengthBarTwo, PasswordStregthContainer, PasswordContainer, PasswordMinimumBox, ErrorAlertText, ErrorAlert, AlreadyHaveAccount, BackgroundWrapper, PageHeaderAndTitleContainer2, PageHeader2, SubTitle2, GridContainer2} from './signup.styles';


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


// =========================== REACT ANIMATION SPINNER =========================================
//REACT ANIMATION SPINNER 
// import { ClipLoader } from 'react-spinners/ClipLoader';
import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';

// import CircularProgress from '@mui/material';







//SIGNUP API ENDPOINT
// const baseUrl = "https://api.inlakssolutions.com/accounts/v1/signup/" 
const baseUrl = "https://banking-api.inlakssolutions.com/accounts/v1/signup/"






const theme = createTheme();

export default function SignUpFormError() {

  //USEREF FUNCTION 
  // const ref = useRef(null)
  const inputRef = useRef(null)

  const { handleSubmit, register, watch, setValue, formState: {errors}, reset, 
  getValues, trigger } = useForm({
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
    // const [error, setError] = useState(null)

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



// REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const [loadingInProgress, setLoadingInProgress] = useState(false);



// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






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
  sessionStorage.setItem("email", data.email);
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

    console.log("Session Storage Email ", email)

  
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


const backgroundColorText = {
  background: 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
};

// const [formComplete, setFormComplete] = useState(false);


// const handleInputChange = () => {
//   // check if all form fields are filled out
//   const formIsComplete = Object.values(getValues()).every(val => val !== '');
//   setFormComplete(formIsComplete);
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



  
const [formComplete, setFormComplete] = useState({

  first_name: null,
  last_name: null,
  email: null,
  phone_number: "0550000000",
  password1: null,

});

// const handleInputChange = () => {
//   // check if all form fields are filled out
//   const formIsComplete = Object.values(getValues()).every(val => val !== '');
//   // setFormComplete(formIsComplete);
//   setFormComplete(prevState => ({...prevState, first_name: newValue}))

// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

const handleFieldChange = (e) => {
  handleInputChange(e);
  onChangeIso();
}

const handleFieldChangePassword = (e) => {
  handleInputChange(e);
  passwordStrengthChange();
}
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormComplete(prevState => ({...prevState, [name]: value }));
}

const handleInputChangePhone = (event) => {
  handleInputChange(event);
  onChangeIso();
  const { name, value } = event.target;
  setFormComplete(prevState => ({...prevState, [name]: value }));
}




console.log("First Name: ", formComplete.first_name)
console.log("Last Name: ", formComplete.last_name)
console.log("Email: ", formComplete.email)
console.log("Phone Number: ", formComplete.phone_number)
console.log("Password: ", formComplete.password1)

console.log("Form Complete: ", formComplete)


// useEffect(() => {
//   setLoading(true)
//   setTimeout(() => {  
//     setLoading(false)
//   }, 10000)

// }, [])


useEffect(() => {
  setLoadingInProgress(true)
  const timer = setTimeout(() => {
    setLoadingInProgress(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);


      console.log('phoneNumber Outside Value: ', phoneNumber)



      //REACT SPINNER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      const Spinner = () => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
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
      // justifyContent: "center",
      flexDirection: "column",
      boxSizing: "borderBox",
      backgroundRepeat: 'no-repeat', 
      width: "100%",
      minHeight: {xs: "150vh"},
      mx: "auto",
      maxWidth: "100vw",

    }}
    > 

{/* <RingLoader color="#36d7b7"  isLoading={loading} /> */}

{/* <PacmanLoader color="#8F45F2"  isLoading={loading} /> */}
{/* <CircularProgress style={{ visibility: loading ? "visible" : "hidden" }} /> */}




      <InlaksText sx={{mt: 5}}>
      Inlaks
      </InlaksText>



<ContainerWrapper component="main" maxWidth="sm" 
sx={{
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  // justifyContent: 'center',
  // mx: 'auto',
  // my: 'auto',
  my: 0,
  padding: '0px 20px',
  minHeight: {xs: "80vh", md: "80vh", lg: "70vh"},

}}>

<Box
    sx={{
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center",
      // padding: "30px 14px", this gives it padding
    
      // backgroundColor: "red",
      padding: "0px 10px",
      paddingTop: "30px"
      // marginBottom: "20px", 
      // padding: {xs: "40px 14px", md: "30px 14px"},
      // padding: {xs: "40px 14px"},
     
      // minHeight: {xs: "80vh", md: "80vh", lg: "80vh"}, 
      // maxHeight: {xs: "80vh", md: "80vh", lg: "80vh"},
      // padding: { xs: "30px 15px" }
      // border: "5px solid #fff"
  }}>



<PageHeaderAndTitleContainer2 >
  <PageHeader2 sx={{fontFamily: "Poppins", fontWeight: 800, }} >
    Let’s get started
  </PageHeader2>

  <SubTitle2 sx={{fontFamily: "Poppins"}}>
  Explore  banking and financial solutions that are right for you.
  </SubTitle2>

</PageHeaderAndTitleContainer2>


<LongTextFieldGridItem item xs={12} 
sx={{  height: 0, ...(error && {
  mb: 2, 
  mt: 0,
  padding: "5px 16px",
  height: 50
  
}) }}>
{(error && open ) &&  
 <Collapse in={open} sx={{mb: 3}}>  
        <ErrorAlert severity="error" onClose={() => setOpen(!open)}
        sx={{ mb: 3,
        "& .MuiAlert-icon": {
          color: "#fff"
        }, "& .MuiAlert-action": {
          color: "#fff"
        }, overflow: "hidden",  mr: "auto",
        ml: "auto",  width: "100%", marginBottom: 3,
         }}>
          <ErrorAlertText >
          {Object.values(error)} 
          {/* { Object.entries(error).map(([key, val])=> <p key={key}>{key}: {val}</p>) }  */}
          </ErrorAlertText>

          </ErrorAlert>

      
     </Collapse> 
}
</LongTextFieldGridItem>

<GridContainer2 container component="form" 
onSubmit={handleSubmit(onSubmit)}>


<GridItem item xs={12} sm={6} 
 sx={{// Add a marginBottom property when errors.first_name?.message is present
  height: "65px",
  ...(errors.first_name?.message && {
    height: "70px"
  })}}
>
  
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
        fontFamily: 'Poppins'
},
}}
{...register("first_name", {required: {
value: true,
message: "First name is required"
}, 

})} 

// helperText={errors.first_name?.message}

placeholder='eg. Joseph'
// onChange={handleInputChange}
onChange={(event) => {
  handleInputChange(event);
  setFormComplete(prevState => ({
    first_name: event.target.value,
    ...prevState,
  }));
}}

/>


{ (errors.first_name?.message  ) &&
<ErrorHelperTextContainer>{errors.first_name?.message}</ErrorHelperTextContainer> 
}


   
</GridItem>


{/* =====================LAST NAME =========================================================  */}

<GridItem item xs={12} sm={6}
   sx={{// Add a marginBottom property when errors.first_name?.message is present
    height: "55px",
    ...(errors.last_name?.message && {
      height: "65px",
      
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
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Poppins'
},
}}
{...register("last_name", {required: {
value: true,
message: "Last name is required"
}, 

})}  

placeholder='eg. Asante'
// onChange={handleInputChange}

onChange={(event) => {
  handleInputChange(event);
  setFormComplete(prevState => ({
   
    last_name: event.target.value,
    ...prevState,
  }));
}}



/>

<ErrorHelperTextContainer>{errors.last_name?.message}</ErrorHelperTextContainer>

</GridItem>

{/* ===============CLOSE OF FIRST NAME AND LAST NAME =======================================================================  */}


{/* ===================PHONE NUMBER =============================================================================================  */}

<LongTextFieldGridItem item xs={12} 
sx={{// Add a marginBottom property when errors.first_name?.message is present
  height: "65px",
  ...(errors.phone_number?.message && {
    height: "70px"
  })}}
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
  
  onChange={(event) => {
    // handleInputChange(event);
    // isocountry(event)
   
    onChangeIso(event)
    handleFieldChange(event); 
    setFormComplete(prevState => ({
      phone_number: event.target.value !== '',
      ...prevState,
    }));
  }}

  // onChange={(event) => {
   
  //   // handleFieldChange(event);
  //   handleInputChangePhone(event)
  //   setFormComplete(prevState => ({
  //     phone_number: event.target.value,
  //     ...prevState,
  //   }));
  // }}
  
  // setFormComplete(prevState => ({
   
  //   last_name: event.target.value,
  //   ...prevState,
  // }));

  // onChange={(event) => {
  //   handleInputChange(event);
  //   setFormComplete(prevState => ({
  //     first_name: event.target.value,
  //     ...prevState,
  //   }));
  // }}

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
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Poppins'
},
}}



// placeholder='(+233) 000 000 000'
// onChange={handleInputChange}
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



<ErrorHelperTextContainer>
{errors.phone_number?.message}
</ErrorHelperTextContainer>

</LongTextFieldGridItem>

{/* =================== CLOSE PHONE NUMBER =====================================================================================  */}


    
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
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Poppins'
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

// onChange={handleInputChange}

onChange={(event) => {
  handleInputChange(event);
  setFormComplete(prevState => ({
    email: event.target.value !== '',
    ...prevState,
  }));
}}

/>

<ErrorHelperTextContainer
>{errors.email?.message}</ErrorHelperTextContainer>
    
</LongTextFieldGridItem>


{/* ==================CLOSE OF EMAIL ADDRESS ===================================================================================  */}


      




{/* =======================PASSWORD =================================================================================================  */}
<LongTextFieldGridItem item xs={12}  
      sx={{height: 144}}>



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
// onChange={passwordStrengthChange}  
// onChange={handleFieldChangePassword}
// helperText={errors.password1?.message}

onChange={(event) => {
  // handleInputChange(event);
  passwordStrengthChange(event)
  handleFieldChangePassword(event);
  setFormComplete(prevState => ({
    
    password1: event.target.value !== '',
    ...prevState,
  }));
}}

placeholder="Password here"
/>

{/* <ErrorHelperTextContainer>{errors.password1?.message}</ErrorHelperTextContainer> */}


<PasswordStrengthText sx={{padding: "0px 16px", 
fontFamily: 'Poppins', fontSize: 11}}>
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




</LongTextFieldGridItem>
{/* </LongTextFieldGridItem> */}

{/* <PasswordStrengthBar password={password} bars={2}  inputExtraProps={{width: 300}}
onChange={({suggestions}) => setSuggestion(suggestions)} />
{suggestion && <p>{suggestion}</p>} */}





{/* =============================== CLOSE OF PASSWORD ===================================================================================  */}


<TncText sx={{  fontSize: 12, width: "90%",
ml: "20px"
  }}>
    By clicking create account you agree to Inlaks 
  <span style={{color: "#7833EE", 
textDecoration: "underline"}}> Terms and conditions </span> , 
  confirm you have read our 
  <span style={{color: "#7833EE", 
textDecoration: "underline"}}> Privacy Policy </span>
    </TncText>


    {/* =================================== BUTTON ==================================================================================================== */}
    <LongTextFieldGridItem item xs={12}  sx={{height:105, width: "100%",
     height: 50,
    }}>

        <ButtonComponent type='submit'
       fullWidth
        onClick={ () => ButtonLoadinghandleClick, handleClick}

        disabled={!formComplete}

        style={{
          background:( (formComplete.first_name) && (formComplete.first_name) 
          && (formComplete.email) && (formComplete.phone_number) 
          && (formComplete.password1  ) ) ? backgroundColorText.background : "#F3F3F3",
        }}
        
        sx={{ 
        padding: "0px 0px", }}>
          <ButtonText>
            {/* {loading ? ( <CircularProgress sx={{color: "#fff"}} size={24}  /> ) : "Create account"}   */}
            Create account
          </ButtonText>
        </ButtonComponent>
    </LongTextFieldGridItem>


    <Link component={RouterLink} to="/login" textAlign={"center"} 
    sx={{display: "flex", marginLeft: "auto",
    mb: 5,
    marginRight: "auto", textDecoration: "none"}}>
        <SignupText textAlign="center">
        👋🏾 Already have an account? {" "}  
        <span style={{color: "#7833EE", 
      textDecoration: "underline"}}> Login</span>
        </SignupText>
    </Link>

    


</GridContainer2>




{/* <Grid container   component="form" onSubmit={handleSubmit(onSubmit)}  >

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae natus odio rerum corporis a inventore animi voluptate aspernatur neque.
</Grid> */}



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

