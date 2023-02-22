
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




//image
import bank1 from "../../../assets/images/bank1.jpg"
import bank6 from "../../../assets/images/bank6.jpg"
import bank7 from "../../../assets/images/bank7.jpg"
import signupImg from "../../..//assets/images/signup2.jpg"



import {  InlaksText, PageHeader,
  SubTitle, PaperWrapper,
 ButtonSubmit, PageHeaderAndTitleContainer, InputFieldState, 
 InputFieldBox, InputLableText, InputTextField, InputFieldGrid,
  HelperText, ForgotPassText, BottonComp, LoginText, IdontHaveAccount,
    ContainerWrapper,
 } from "./forgotPass.styles"
import Collapse from '@mui/material/Collapse';
import { ErrorAlert, ErrorAlertText, ErrorHelperTextContainer, LongTextFieldGridItem, NameLabel, PageHeaderAndTitleContainer2 } from '../sign-up/signup.styles';


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
  const { handleSubmit, register, watch, formState: {errors}, reset, trigger } = useForm({
    mode: "onTouched",
    
    defaultValues: {
      email: "",
      // password: "",
      // tnc: ""
    }
  })

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

          <ContainerWrapper maxWidth="xs" 
          sx={{height: "23rem",  padding: "40px 30px", 
        width: "100%", }}
          component="form" onSubmit={handleSubmit(onSubmit)} >
      
        {/* Heading  */}
<Box sx={{padding: "20px 30px"}}>

        <PageHeaderAndTitleContainer2 sx={{mr: "auto", ml: "auto", }}>

          <PageHeader textAlign="center">
          Forgot Password
          </PageHeader>

          <SubTitle textAlign='center'>
          Enter your account email to reset your password.
          </SubTitle>

        </PageHeaderAndTitleContainer2>
{/* 
        {this.state.error && 
        <Alert severity="error">{this.state.error}</Alert>
      } */}
        {/* { error && <Alert severity='error'>{error}</Alert> } */}

        {/* {error && 
        <Alert severity="error">{errorString}</Alert>
      } */}


{(error && open ) &&  
 <Collapse in={open}>  
        <ErrorAlert severity="error" onClose={() => setOpen(!open)}
        sx={{
        "& .MuiAlert-icon": {
          color: "#fff"
        }, "& .MuiAlert-action": {
          color: "#fff"
        }, overflow: "hidden", 
        mr: "auto",
        ml: "auto",  width: {xs: "20rem", md: "23rem"},
        mt: 1, mb: 1
         }}>
          
          <ErrorAlertText >
          {Object.values(error)} 
          {/* { Object.entries(error).map(([key, val])=> <p key={key}>{key}: {val}</p>) }  */}
          </ErrorAlertText>

          </ErrorAlert>

      
     </Collapse> 
}

     

      
   

{/* <InputFieldGrid xs={12} >
      <InputLableText>
      Email 
      </InputLableText>

<TextField type="email"
  error={Boolean(errors.email)}
  variant="outlined" fullWidth
  sx={{
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

  id="email"
  // label="Email Address"
  placeholder='someexample@gmail.com'
  {...register("email", {required: {
    value: true,
    message: "Email is required"
  }, 
  pattern: {
    // value: /^\S+@\S+$/i,
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Please enter a valid email address"
  }
})}
  autoComplete="email"
 
  // helperText={errors.email?.message}
/>

<ErrorHelperTextContainer sx={{marginTop: errors.email?.message ? "3px": 0  }}>
{errors.email?.message} 
</ErrorHelperTextContainer>


 


</InputFieldGrid> */}

{/* //CLOSE  */}

{/* Email address  */}
<LongTextFieldGridItem item xs={12} 
sx={{// Add a marginBottom property when errors.first_name?.message is present
  height: "65px",
  ...(errors.email?.message && {
    height: "70px"
  }),  }}>

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
sx={{padding: "5px 5px"}}>
  {errors.email?.message}
</ErrorHelperTextContainer>
    
</LongTextFieldGridItem>


{/* ==================CLOSE OF EMAIL ADDRESS ===================================================================================  */}


                



    

    



<BottonComp type='submit' sx={{padding: "5px 16px", 
ml: "auto", mr: "auto",width: {xs: "90%", md: "90%", lg: "90%"},  }}>
  <LoginText>
    Reset password
  </LoginText>
</BottonComp>





<Link component={RouterLink} to="/login">
<IdontHaveAccount textAlign="center">
👈🏽Back to login
</IdontHaveAccount>
</Link>

</Box>

      {/* </PaperWrapper>  */}

    </ContainerWrapper>
      </Box>

      
      </ThemeProvider> 
  );
}


