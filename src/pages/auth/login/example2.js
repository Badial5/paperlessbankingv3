
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










export default function Login2Form() {
//Password Strength bar
const [inputValue, setInputValue] = useState('');


  //react hookform 
  const { handleSubmit, register, watch, formState: {errors}, reset } = useForm({
    defaultValues: {
      
      email: "",
      password: "",
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
    // registerForm()
    // reset()

    try {
      const response = await axios.post(baseUrl, data)
      const newResponse = response.data
      console.log(newResponse)
      newResponse()
   
      console.log("Successful: ", newResponse)
    } catch (error) {
      console.log("Error Message: ", error.response.data)
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


// const passwordStrengthChange = (e) => {
//   setInputValue(e.target.value);
// }

// const password1 = watch('password1') 


// const backgroundImg = styled(Box)`

// `



//style component
// const myStyle={
//   backgroundImage: 
// "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
//   // height:'100vh',
  
 
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };







  return (
    // <ThemeProvider theme={theme}>


      



      

      //intentionally commented this
      //will uncomment it later

    // <Box sx={{   
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // //backgroundImage: "url("+"https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80" + ")",
    // backgroundImage: `url(${signupImg})` ,
    // // objectFit: "cover",
    // backgroundPosition: 'center',
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat', width: "100%",
    // height: "100vh", backgroundColor: "gray", opacity: "0.8"
    
    // }}>

    <Box style={{
       
      // backgroundColor: "yellow", signupImg
      backgroundImage: `url(${signupImg})` ,
      padding: "20px 20px",
      // objectFit: "cover",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      // height: "120%",
      width: "100%", height: "150vh",
      backgroundRepeat: 'no-repeat', width: "100%",
      
    }}>
       <CssBaseline />
      <Box 
      sx={{marginTop: "5px",}}  
      >
       
        
      <Paper elevation={24}
      sx={{maxWidth: {xs: 500, sm: 500, md: 410, lg: 500, xl: 500},  marginLeft: "auto", marginRight: "auto", marginTop: "auto",
      // width: {xs: 430, sm: 450, md: 410, lg: 500, xl: 500}, borderRadius: "6px",
      width: "545px",
    //   height: "485px",

      backgroundColor: "#ffffff"
        // height: {xs: "132vh", sm: "127vh", md: "130vh", lg: "120h", xl: "120vh"} }}> 


    }}>
      
        <Box 
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            // width: 700
            // height: "100vh" 
          }}>
        

        
          <Typography component="h1" variant="h5" 
          sx={{color: "#7833EE", fontWeight: 400, marginTop: 4, fontSize: "20px",
          fontFamily: 'Dela Gothic One', marginTop: 7}}>
            Welcome back
          </Typography>


         

          <Typography sx={{fontFamily: "Helvetica Neue", fontWeight: 400, fontSize: "14px", lineHeight: "21px",
        color: "#434344", marginTop: 2}} textAlign="center">
          Explore banking and financial solutions that are right for you.
          </Typography>


          <Box component="form" onSubmit={handleSubmit(onSubmit) } 
          sx={{ mt: 3, paddingBottom: 4, paddingLeft: 4, paddingRight: 4 }}>


            <Grid container spacing={2}>

              {/* <Grid item xs={12} sm={6}>
                <label for='first_name'>First Name</label> <br />
                <TextField
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
              borderColor: "#7833EE",
                    }
                  }, 
                  // padding: "10px 16px;"

                  [`& fieldset`]:{
                    borderRadius: "6px" }
                }}

                

                  {...register("first_name", {required: "First name is required"})}
                  error={Boolean(errors.first_name)}
                  fullWidth
                  // label="First Name"
                  placeholder='eg. Joseph'
                  autoFocus
                  id="outlined-error-helper-text"
                  helperText={errors.first_name?.message}

                  inputProps={{
                    style: {
                      height: "0.5rem",
                    },
                  }}
                />
              </Grid> */}


              {/* <Grid item xs={12} sm={6}>
              <label for='last_name'>Last Name</label> <br />
              <TextField
              style={{borderRadius: "20px"}}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
            borderColor: "#7833EE"
                  }
                },    [`& fieldset`]:{
                  borderRadius: "6px" }
              }}
                  error={Boolean(errors.last_name)}
                  fullWidth
                  // label="Last Name"
                  id="outlined-error-helper-text"
                  
                  placeholder='eg. Asante'
                  {...register("last_name", {required: "Last name is required"})}
                  autoFocus
                  helperText={errors.last_name?.message}

                  inputProps={{
                    style: {
                      height: "0.5rem",
                    },
                  }}
                />
              </Grid> */}

             


              {/* <Grid item xs={12}>
              <label for='phone'>Phone number</label> <br />
                <TextField type={"tel"}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
              borderColor: "#7833EE"
                    }
                  },  [`& fieldset`]:{
                    borderRadius: "6px" }
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

                  inputProps={{
                    style: {
                      height: "0.5rem",
                    },
                  }}
                />
              </Grid> */}


              <Grid item xs={12}>
              <label for='email' 
              style={{fontFamily: "Helvetica Neue", fontSize: "14px"}}
              >Email address </label> <br />
                <TextField type="email"
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
              borderColor: "#7833EE"
                    }
                  },  [`& fieldset`]:{
                    borderRadius: "6px" }
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

                  inputProps={{
                    style: {
                      height: "0.5rem",
                      
                    },
                  
                  
                  }}
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
              <label for='password' 
              style={{fontFamily: "Helvetica Neue", fontSize: "14px"}}
              >Password </label> <br />
              <FormControl fullWidth variant="outlined" 
              
              
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
            borderColor: "#7833EE"
                  }
                },  [`& fieldset`]:{
                  borderRadius: "6px" }
              }}>
          {/* <InputLabel htmlFor="outlined-adornment-password">Password here</InputLabel> */}
        

        
          

          <OutlinedInput
           error={Boolean(errors.password1)}
           id="outlined-adornment-password"

          // helperText={errors.password1?.message}

          
            sx={{
              [`& fieldset`]:{
                borderRadius: "6px" }, 
            }}


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
        //   onChange={passwordStrengthChange} 
            helperText={errors.password1?.message}
            
            placeholder="Password here"


            inputProps={{
              style: {
                height: "0.5rem",
              },
            }}
          />


<Grid item xs="12">


<Link component={RouterLink} to="/forgotpassword2">
  <Typography
  
   sx={{fontFamily: "Helvetica Neue", 
  fontWeight: 400, fontSize: "14px", 
  lineHeight: "16px", color: "#434344",
  textDecoration: "underline",  mt: 0.7,
  cursor: "pointer"}}>
    I forgot my password
  </Typography>
</Link>

  </Grid>

          {/* <Typography sx={{fontFamily: "Roboto", fontWeight: 400, 
          size: "12px", marginTop: 1}}>
          Password strength
          </Typography> */}

        {/* <PasswordStrengthBar
          password={inputValue}
          minLength={6}
          minScore={4}
          
          scoreWords={['weak😪', 'okay 😅', 'strong 💪🏾', 'stronger', 'Excellent' ]}
          onChangeScore={(score, feedback) => {
            console.log(score, feedback);
            
          }}
        /> */}
            
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

              {/* <Grid item xs="12">
              <Typography sx={{fontFamily: "Helvetica Neue", fontWeight: 400, fontSize: "14px", lineHeight: "16px"}}>
              By clicking create account you agree to Inlaks <span style={{color: "#7833EE", textDecoration: "underline"}}>Terms and conditions</span>, 
              confirm you have read our <span style={{color: "#7833EE", textDecoration: "underline"}}>Privacy Policy.</span>
              </Typography>
              </Grid> */}




            </Grid>





            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginY: 2, p: "15px 8px",  background: "linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)"
 }}
            >
              <Typography variant='button' component="p" 
              sx={{fontFamily: "Helvetica Neue", fontWeight: 500, fontSize: "14px",
               lineHeight: "16px", color: "#FCFCFF", }}>
                Login
              </Typography> 
            </Button>


            <Grid container justifyContent="center" 
            sx={{marginBottom: 1}}>
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


        </Paper>
       
      </Box>


      </Box>

      
    // {/* </ThemeProvider> */}
  );
}