import { React, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios"
import { FormControl, FormGroup, FormHelperText, InputLabel } from '@mui/material';

//Password visiblity
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';

// import PhoneInput from 'react-phone-number-input'

const baseUrl = "https://api.inlakssolutions.com/accounts/v1/signup/"

const theme = createTheme();

export default function LoginForm() {

  //react hookform 
  const { handleSubmit, register, watch, formState: {errors}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
     

    }
  })



    // REACT COMPONENT USENAVIGATE
    const navigate = useNavigate();

  //Error State =========================================================================================

  const [errorss, setError] = useState([])

  // const registerSubmit = async() => {
  //   // e.preventDefault()
    
  //   try {
  //     const response = await axios.post(baseUrl, { headers: { 'Content-Type': 'application/json' }})
  //     const newResponse = response.data
  //   newResponse()
  //   } catch (error) {
  //     console.log(error.response.data)
  //   }
    
  // }



  const onSubmit = async (data) => {
    console.log(data)

     // console.log("Form Data: ", data)
    // registerForm()
    try {
      const response = await axios.post(baseUrl, data)
      const newResponse = response.data
      console.log("Successfully Submitted: ", newResponse)
      
      reset()
      navigate("/phone-Otp")
      // return redirect("/phone-Otp")
      
      
    } catch (error) {
      console.log("Error Message: ", error.response.data)
      console.log("Error State: ", error.response.data)
      // setting an errors to the state
      setError({...error.response.data})
      console.log("MY OWN: ", errorss)
    }
    
  }




  // useEffect(() => {
  //   const registrationApi = async () => {
      
  //     const response = await axios.post("https://api.inlakssolutions.com/accounts/v1/signup")

  //     console.log(response)
  //   }

  //   registrationApi()
  // })

//    check password event 




  // useEffect(() => {
  //   const registrationApi = async () => {
      
  //     const response = await axios.post("https://api.inlakssolutions.com/accounts/v1/signup")

  //     console.log(response)
  //   }

  //   registrationApi()
  // })

  //  check password event 

//Password adornment
const [showPassword, setShowPassword] = useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};




  return (
    // <ThemeProvider theme={theme}> 
      <Container component="main" maxWidth="sm" 
      sx={{marginTop: "1px"}}>
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: "59px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: "100vh"
          }}
        >
          <Typography component="h1" variant="h5" 
          sx={{color: "#7833EE"}}>
            Welcome back!
          </Typography>


          {/* <Typography component="p" variant="body1" 
          sx={{color: "#434344", marginY: 3}}>
            Explore banking and financial solutions that are right for you.
          </Typography> */}

          <Typography sx={{fontFamily: "Helvetica Neue", fontWeight: 400, fontSize: "14px", lineHeight: "21px",
        color: "#434344", marginY: 2}}>
          Enter your login credentials to access your account.
          </Typography>


          <Box component="form" onSubmit={handleSubmit(onSubmit) } 
          sx={{ mt: 3 }}>


            <Grid container spacing={2}>
             



              <Grid item xs={12}>
              <label for='email'>Email address </label> <br />
                <TextField type="email"
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
              borderColor: "#7833EE"
                    }
                  }
                }}
                  error={Boolean(errors.email)}
                  fullWidth
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
                 
                  helperText={errors.email?.message}
                />
              </Grid>


              <Grid item xs={12}>
              <FormControl fullWidth variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
            borderColor: "#7833EE"
                  }
                }
              }}>
          {/* <InputLabel htmlFor="outlined-adornment-password">Password here</InputLabel> */}
          <label for='password'>Password</label> 
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            // label="Password"
            {...register("password", {required: "Password is required"})}
            error={errors.password}
            helperText={errors.password?.message}
            
            placeholder="Password here"
          />
            
          </FormControl>
              </Grid>

              <Grid item xs="12">

            <Link component={RouterLink} to="/forgotpassword">
              <Typography
              
               sx={{fontFamily: "Helvetica Neue", 
              fontWeight: 400, fontSize: "14px", 
              lineHeight: "16px",  
              textDecoration: "underline", 
              cursor: "pointer"}}>
                I forgot my password
              </Typography>
            </Link>

              </Grid>


            </Grid>

            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ my: 3, p: "15px 8px",  background: "linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)"
 }}
            >
              <Typography variant='button' component="p" 
              sx={{fontFamily: "Helvetica Neue", fontWeight: 500, fontSize: "14px", lineHeight: "16px", color: "#FCFCFF"}}>
                Login
              </Typography>
            </Button>


            <Grid container justifyContent="center" 
            sx={{marginBottom: 10}}>
              <Grid item>

                <Link component={RouterLink} to="/"
                style={{ color: "#000000", textDecoration: "none"}}
                 variant="body2">


                  <Typography sx={{fontFamily: "Helvetica Neue", fontWeight: 700, fontSize: "14px", lineHeight: "16px"}}>
                  👋🏾 I don’t have an account? 
                  <span style={{color: "#7833EE", textDecoration: "underline"}}> SignUp</span>
                  </Typography>
                </Link>


              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    // {/* </ThemeProvider>  */}
  );
}




// const onSubmit = async (data) => {
//   console.log("Form Data: ", data)
 
//   try {
//     const response = await axios.post(baseUrl, data)
//     const newResponse = response.data
//     console.log(newResponse)
   
//     navigate("/landing-page")
//     reset()

//     console.log("Successful: ", newResponse)
//   } catch (error) {
//     setError(error.response.data)
//     // console.log("Error Message: ", error.response.data)
//     console.log("Error Message from state: ", error)
//   }


// }