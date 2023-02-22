import React, { useState } from 'react';
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

const baseUrl = "https://api.inlakssolutions.com/accounts/v1/signup/"

const theme = createTheme();

export default function LoginForm() {





  //react hookform 
  const { handleSubmit, register, watch, formState: {errors}, reset, trigger } = useForm({
    mode: 'onTouched', })




    
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



  //Password adornment
const [showPassword, setShowPassword] = useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};





  
  const onSubmit = async (data) => {
    console.log(data)

    try {
      const response = await axios.post(baseUrl, data)
      const newResponse = response.data
      console.log("Successfully Submitted: ", newResponse)
      
      reset()
      navigate("/phone-Otp")
    } catch (error) {
      console.log("Error Message: ", error.response.data)
      console.log("Error State: ", error.response.data)
      // setting an errors to the state
      setError({...error.response.data})
      console.log("MY OWN: ", errorss)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Sign in vgvhjvhjv
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address"
                  }
                })}
                error={Boolean(errors.email)}
                helperText={errors.email && errors.email.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"


              
                id="password"
                inputRef={register({
                  required: true,
                })}
                error={Boolean(errors.password)}
                helperText={errors.password && "Password is required"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={Boolean(errorss)}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  // value={password}
                  // onChange={handleChange} 
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
                <FormHelperText>{errorss}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{margin: '24px 0 16px'}}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/register" variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}
