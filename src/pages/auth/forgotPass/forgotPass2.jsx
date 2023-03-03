
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



// import PhoneInput from 'react-phone-number-input'

const baseUrl = "https://api.inlakssolutions.com/accounts/v1/password-reset-otp/"



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

    // REACT COMPONENT USENAVIGATE
    const navigate = useNavigate();

  //Password adornment
const [showPassword, setShowPassword] = useState(false);


//error state
const [error, setError] = useState(null)

// const EmailContext = createContext();
const [email, setEmail] = useState('');

//OPEN OR CLOSE
const [open, setOpen] = useState(true);

console.log("Open value: ", open)
//Password Strength bar
const [inputValue, setInputValue] = useState('');


  //react hookform 
  const { handleSubmit, register, watch, formState: {errors}, reset, trigger,
getValues } = useForm({
    mode: "onTouched",
    
    defaultValues: {
      email: "",
      // password: "",
      // tnc: ""
    }
  })


  const backgroundColorText = {
    background: 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
  };

  // const registerForm = async() => {
  //   // e.preventDefault()

    
  //   try {
  //     const response = await axios.post(`${baseUrl}`)
  //     const newResponse = response.data
  //     console.log(newResponse)
  //     // newResponse()

     
      
   
  //     console.log("Successful: ", newResponse)
  //   } catch (error) {
  //     console.log("Error Message: ", error.response.data)
  //   }
    
  // }


  const onSubmit = async (data) => {
    localStorage.setItem("email", data.email);
    console.log("Form Data: ", data)
    // registerForm()
    // reset()

    console.log("Local Storage Mail ", email)

    try {
      const response = await axios.post(baseUrl, data)
      const newResponse = response.data
      console.log(newResponse)
      // newResponse()

    
      reset()
      navigate("/password-reset-otp")
      

      console.log("Successful: ", newResponse)
    } catch (error) {
      setError(error.response.data)
      // console.log("Error Message: ", error.response.data)
      console.log("Error Message from state: ", error)
    }


  }


  // const errorString = JSON.stringify(error);




const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};



// const [formComplete, setFormComplete] = useState(false);


// const handleInputChange = () => {
//   // check if all form fields are filled out
//   const formIsComplete = Object.values(getValues()).every(val => val !== '');
//   setFormComplete(formIsComplete);
// }


const [formComplete, setFormComplete] = useState({
  email: null,
  // password: null
});


const handleInputChange = () => {
  // check if all form fields are filled out
  const formIsComplete = Object.values(getValues()).every(val => val !== '');
  setFormComplete(formIsComplete);
}


console.log("Form Complete: ", formComplete)




console.log("Form Complete: ", formComplete)








  return (
    <ThemeProvider theme={theme}> 


    <Box style={{
       
      // backgroundColor: "yellow", signupImg
      backgroundImage: `url(${signupImg})` ,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: "flex", justifyContent: "center",
      alignItems: "center",
      //  width: 1440, 
      // height: 1024, 
      // height: "100%", 
      // width: "100%",
      // width: "1440px", 
      // height: "1024px",
      width: "100vw",
      height: "100vh",
       flexDirection: "column",
      backgroundRepeat: 'no-repeat', width: "100%",
      
    }}>
       <CssBaseline />
      

        <InlaksText>
          InLaks 
        </InlaksText>

      {/* Paper Wrapper  */}
      {/* <PaperWrapper component="form" onSubmit={handleSubmit(onSubmit)} >  */}

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
  Forgot Password
  </PageHeader2>

  <SubTitle2 sx={{fontFamily: "Poppins", fontWeight: 400, }}>
  Enter your account email to reset your password.
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


      












    {/* =================================== BUTTON ==================================================================================================== */}
    <LongTextFieldGridItem item xs={12}  sx={{height:50, width: "100%",
     
    }}>


      <BottonComp
  type='submit'
  fullWidth
  sx={{
    // width: {xs: "22rem", md: "21.5rem"},
    mt: 2,
    mb: 0,
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

      
      </ThemeProvider> 
  );
}


