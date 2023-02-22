
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios"
import { FormControl, FormGroup, FormHelperText, InputLabel, Paper, styled } from '@mui/material';

import PasswordStrengthBar from 'react-password-strength-bar';

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




//customize Box
import { CustomizedBox } from '../../../styles/styles';

// import PhoneInput from 'react-phone-number-input'

const baseUrl = "https://api.inlakssolutions.com/accounts/v1/signup/"





const theme = createTheme();





//  const defaultFormField = {
//     name: "",
//     title: "",
//     date: "",
//     comment: "",
//     arrivalDate: "",
//     departureDate: "",
//     card: "",
//     phone: "",
//   }







 




export default function TrySignUp() {

    const [country, setCountry] = useState('');
    const [card, setCard] = useState("")

      //phone book
      const [isoValue, setIsoValue] = useState(""); // The input value.
      const [isocountry, setIsoCountry] = useState("GH"); // The selected country.
      const [phoneNumber, setPhoneNumber] = useState(); // The PhoneNumber instance.
    
  
  

    //Password Strength bar
const [inputValue, setInputValue] = useState('');

//react hookform 
const { handleSubmit, register, watch, formState: {errors}, reset } = useForm({
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


    
  const registerForm = async() => {
    // e.preventDefault()

    
    try {
      const response = await axios.post(`${baseUrl}`)
      const newResponse = response.data
      console.log(newResponse)
      newResponse()
   
      console.log("Successful: ", newResponse)
    } catch (error) {
      console.log("Error Message: ", error.response.data)
    }
    
  }




  const onSubmit = async (data) => {
    console.log("Form Data: ", data)
    registerForm()
    reset()
  }

  


  //Password adornment
const [showPassword, setShowPassword] = useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};


const passwordStrengthChange = (e) => {
  setInputValue(e.target.value);
}

const password1 = watch('password1')





  

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCardChange = (e) => {
    setCard(e.target.value)
  }


 
	const onChangeIso = ({ formattedValue, phoneNumber }) => {
		setIsoValue(formattedValue);
		setPhoneNumber(phoneNumber);
	};

	const onCountrySelect = ({ country, formattedValue, phoneNumber }) => {
		setIsoValue(formattedValue);
		setIsoCountry(country);
		setPhoneNumber(phoneNumber);
	};



  return (

    <ThemeProvider theme={theme}>


<Box sx={{   
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
// backgroundImage: "url("+"https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80" + ")",
backgroundImage: `url(${signupImg})` ,

backgroundPosition: 'center',
backgroundSize: 'contain',
backgroundRepeat: 'no-repeat', 
height: "100vh", backgroundColor: "gray", opacity: "0.8"

}}>

<Paper elevation={24} sx={{width: 500}}>


  
<Box sx={{
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: "85vh"
  
}}>



<Box component="form" noValidate onSubmit={handleSubmit} 
sx={{mt: 3}}>


  <Grid container spacing={2}>


  <Grid item xs={12} sm={6}>

  <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <label for='first_name'>First Name</label> <br />
                <TextField
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
              borderColor: "#7833EE"
                    }
                  }
                }}

                  {...register("first_name", {required: "First name is required"})}
                  error={Boolean(errors.first_name)}
                  fullWidth
                  // label="First Name"
                  placeholder='eg. Joseph'
                  autoFocus
                  id="outlined-error-helper-text"
                  helperText={errors.first_name?.message}
                />
              </Grid>


              <Grid item xs={12} sm={6}>
              <label for='last_name'>Last Name</label> <br />
              <TextField
              style={{borderRadius: "20px"}}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
            borderColor: "#7833EE"
                  }
                }, 
              }}
                  error={Boolean(errors.last_name)}
                  fullWidth
                  // label="Last Name"
                  id="outlined-error-helper-text"
                  
                  placeholder='eg. Asante'
                  {...register("last_name", {required: "Last name is required"})}
                  autoFocus
                  helperText={errors.last_name?.message}
                />
              </Grid>

             


              <Grid item xs={12}>
              <label for='phone'>Phone number</label> <br />
                <TextField type={"tel"}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
              borderColor: "#7833EE"
                    }
                  }
                }}

                  error={Boolean(errors.phone_number)}
                  fullWidth
                  id="outlined-error-helper-text"
                  name='phone'
                  // label="Phone Number"
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
                  helperText={errors.phone_number?.message}
                />
              </Grid>


              <Grid item xs={12}>
              <label for='email'>Email address (Optional)</label> <br />
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


              {/* <Grid item xs={12}>
                <TextField type="password"
                  error={errors.password1}
                  fullWidth
                  // label="Password"
                  placeholder="Password here"
                  {...register("password1", {required: "Password is required"})}
                  // autoComplete="new-password"
                  helperText={errors.password1?.message}
                />
              </Grid> */}


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
        

        
          <label for='password1'>Password</label> 

          <OutlinedInput
           error={Boolean(errors.password1)}
           id="outlined-adornment-password"

          // helperText={errors.password1?.message}

          
          
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
            {...register("password1", {required: {
              value: true,
              message: "Password is required"
            }, 
          minLength: {
            value: 6,
            message: "The Minimux length is 6"
          } })}


             // label="Password"
            //  {...register("password1", {required: {
            //   value: true,
            //   message: "Password is required"
            // } })}



            value={inputValue}
          onChange={passwordStrengthChange}
            helperText={errors.password1?.message}

            
            
            placeholder="Password here"
          />

          <Typography sx={{fontFamily: "Roboto", fontWeight: 400, 
          size: "12px", marginTop: 1}}>
          Password strength
          </Typography>

        <PasswordStrengthBar
          password={inputValue}
          minLength={6}
          minScore={4}
          
          scoreWords={['weak😪', 'okay 😅', 'strong 💪🏾', 'stronger', 'Excellent' ]}
          onChangeScore={(score, feedback) => {
            console.log(score, feedback);
            
          }}
        />
            
        </FormControl>
      </Grid>
      



              {/* Confrim Password */}
              


        {/* End of coonfirm pssword grid */}




              {/* <Grid item xs={12}>
                <TextField type="password"
                  error={errors.password2}
                  fullWidth
                  label="Confirm Password"
                  {...register("password2", {validate: (value) =>
                    value === password1 || "The passwords do not match koraa",
                    minLength: {
                      value: 6,
                      message: "The Minimux length is 6"
                    }}, 
                   )}
                  // autoComplete="new-password"
                  helperText={errors.password2?.message}
                />
              </Grid> */}



              {/* <Grid item xs={12}>
              <FormGroup error={errors.tnc}>
                <FormControlLabel
                  control={<Checkbox {...register("tnc", {required: "You must agree to our Terms and Condition"})}
                     color="secondary" />}
                  label="Agree to the Terms and Conditions"
                />
              </FormGroup>
              <FormHelperText sx={{color: "red"}}>
                  {errors.tnc?.message}
              </FormHelperText>
              </Grid> */}

              <Grid item xs="12">
              <Typography sx={{fontFamily: "Helvetica Neue", fontWeight: 400, fontSize: "14px", lineHeight: "16px"}}>
              By clicking create account you agree to Inlaks <span style={{color: "#7833EE", textDecoration: "underline"}}>Terms and conditions</span>, 
              confirm you have read our <span style={{color: "#7833EE", textDecoration: "underline"}}>Privacy Policy.</span>
              </Typography>
              </Grid>


            


            </Grid>





    
            <Grid container justifyContent="center" 
            sx={{marginBottom: 1}}>
              <Grid item>
                <Link component={RouterLink} to="login"
                style={{ color: "#000000", textDecoration: "none"}}
                 variant="body2">
                  <Typography sx={{fontFamily: "Helvetica Neue", fontWeight: 700, fontSize: "14px", lineHeight: "16px"}}>
                  👋🏾 Already have an account? 
                  <span style={{color: "#7833EE", 
                  textDecoration: "underline", 
                  }} 
                  
                  >Login</span>
                  </Typography>
                </Link>
              </Grid>
            </Grid>
         
          </Grid>

</Grid>



</Box>
</Box>

</Paper>

</Box>
    </ThemeProvider>
  );
}