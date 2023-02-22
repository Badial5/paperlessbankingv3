
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

//error
import ErrorAlert from '../../../components/alerts/alert';

// ============================================================ 

import { Link as RouterLink, redirect } from 'react-router-dom';
import Link from '@mui/material/Link';

import { useNavigate } from 'react-router-dom';

// =============================================================== 

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios"
import { Alert, FormControl, FormGroup, FormHelperText, InputLabel, Paper, styled } from '@mui/material';

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

//PHONE COUNTRY CODE: PHONETEXTFIELD
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// import PhoneTextField from "mui-phone-textfield";

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'



//components
import { TopHeaderOutsideBox, MainContainerBox, SignupPaper,
  NameGrid, LabelBox, InputLabelGrid, TextFieldBox, EmailTextField,
 

} from '../../../styles/styles';





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 



const baseUrl = "https://api.inlakssolutions.com/accounts/v1/signup/"

// const theme = createTheme();

// console.log("ThemeProvider Props:", theme)











export default function SignUpForm() {

  // REACT COMPONENT USENAVIGATE
  const navigate = useNavigate();

  //error state
  const [errorss, setError] = useState([])
  const [formstate, setFormState] = useState([])

//Password Strength bar
const [inputValue, setInputValue] = useState('');
const [value, setValue] = useState()
const [passsuggestion, setPassSuggestion] = useState([])

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
 //phone book
//  const [isoValue, setIsoValue] = useState(""); // The input value.
//  const [isocountry, setIsoCountry] = useState("GH"); // The selected country.
//  const [phoneNumber, setPhoneNumber] = useState(); // The PhoneNumber instance.

//     const [country, setCountry] = useState('');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 


  //react hookform 
  const { handleSubmit, register, watch, formState: {errors}, reset, trigger } = useForm({
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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=============================================================
//  useEffect(() => {
//   return () => {
//     effect
//   };
//  }, [input])

// axios.get(baseUrl, )
























  // const registerForm = async() => {
  //   // e.preventDefault()

    
  //   try {
  //     const response = await axios.post(`${baseUrl}`)
  //     const newResponse = response.data
  //     console.log(newResponse)
  //     newResponse()
   
  //     console.log("Successful: ", newResponse)
  //   } catch (error) {
  //     console.log("Error Message: ", error.response.data)
  //   }
    
  // }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // const redirectHandler = () => {
  //     return redirect("/phone-Otp")
  //  } 




  // ============================================================== ================================================



  const onSubmit = async (data) => {
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


const passwordStrengthChange = (e) => {
  setInputValue(e.target.value);
}

const password1 = watch('password1')


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

  

    // <MainContainerBox>
    <Box style={{
       
      // backgroundColor: "yellow", signupImg
      backgroundImage: `url(${signupImg})` ,
      padding: "20px 20px",
      // objectFit: "cover",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: "120%",
      display: "flex", justifyContent: "center", alignItems: "center",
      width: 1440, height: 1024,
      backgroundRepeat: 'no-repeat', width: "100%",
      
    }}>

       <CssBaseline />



      <Box 
      // sx={{marginTop: 0,}}  
      >

        <TopHeaderOutsideBox>
        InLaks
        </TopHeaderOutsideBox>
        {/* +++++++++++++++++++++++++++++++++++++  */}
     
      {/* ++++++++++++++++++++++++++++++++++++++++++  */}
        
      {/* <Paper elevation={24}
      sx={{ 
        // maxWidth: {xs: 500, sm: 500, md: 410, lg: 500, xl: 500}, display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "auto", marginRight: "auto",
      // width: {xs: 430, sm: 450, md: 410, lg: 500, xl: 500},
       marginLeft: "auto", marginRight: "auto", marginnTop: "auto", marginBottom: "auto",
      // margin: "auto",
      width: "44.1875rem",
       borderRadius: "6px",
      // height: {xs: "132vh", sm: "127vh", md: "130vh", lg: "120h", xl: "120vh"}, 
      height: "48.3125rem", 
      backgroundColor: "#ffffff" }}> */}

      <SignupPaper>
      
        <Box 
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // width: 700
            // height: "100vh"
          }}>
        

        <Box sx={{marginTop: 0}}>
          <Typography component="h1" variant="h5" 
          textAlign="center"
          sx={{color: "#7833EE", fontWeight: 400, marginTop: 4, fontSize: "20px",
          fontFamily: 'Dela Gothic One'}}>
            Let's get Started
          </Typography>

          <Typography sx={{fontFamily: "Helvetica Neue", fontWeight: 400, fontSize: "14px", lineHeight: "21px",
        color: "#434344", marginTop: 2}} textAlign="center">
          Explore banking and financial solutions that are right for you.
          </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit(onSubmit) } 
          sx={{ mt: 3, paddingBottom: 4, paddingLeft: 4, paddingRight: 4 }}>

            {/* <ErrorAlert> Error</ErrorAlert> */}

{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          {/* <Box sx={{marginBottom: 2}}>  
          {error && <ErrorAlert message={error}/> }  

          </Box>  */}

          {/* { error ? <ErrorAlert message={error} /> : "" }  */}
            
{/* ===============================================================  */}
            <Grid container spacing={4}>

              {/* First Name  */}
              <NameGrid item xs={12} sm={6} >

                <LabelBox for='first_name'>
                  First Name
                </LabelBox>

                <TextFieldBox
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

                

                  {...register("first_name", {required: {
                    value: true,
                    message: "First name is required"
                  },

                  minLength: {
                    value: 3,
                    message: "The minimum characters should be 3"
                  }
                
                })}
                  error={Boolean(errors.first_name)}
                  fullWidth
                  // label="First Name"
                  placeholder='eg. Joseph'
                  // autoFocus
                  id="outlined-error-helper-text"
                  helperText={errors.first_name?.message}

                  inputProps={{
                    style: {
                      height: "0.5rem",
                    },
                  }}
                />
              </NameGrid>


              {/* Last Name  */}
              <NameGrid item xs={12} sm={6} >

              <LabelBox for='last_name'>
              Last Name
              </LabelBox> 

              <TextFieldBox
              
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
                  {...register("last_name",  {required: {
                    value: true,
                    message: "Last name is required"
                  },

                  minLength: {
                    value: 3,
                    message: "The minimum characters should be 3"
                  }
                
                })}
                  
                  helperText={errors.last_name?.message}

                  inputProps={{
                    style: {
                      height: "0.5rem",
                    },
                  }}
                />
              </NameGrid>

             

{/* ==========================================================================  */}

                      {/* PHONE NUMBER  */}

{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */}
              <NameGrid item xs={12} >

              <LabelBox for='phone'>
                Phone number
              </LabelBox>
                
                <TextFieldBox type={"tel"} 
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

{/* <PhoneTextField
		label="Phone number"
		error={Boolean(setIsoValue && phoneNumber?.country !== country)}
		value={isoValue}
		country={isocountry}
		onCountrySelect={onCountrySelect}
		onChange={onChangeIso}

    sx={{ display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    m: 1, minWidth: 120, width: 300, [`& fieldset`]:{
      borderRadius:30
    } }}
	/> */}


{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */}

    {/* <PhoneInput
      placeholder="(+233) 000 000 000"
      country="GH"
      defaultCountry="GH"
      useNationalFormatForDefaultCountryValue = {true}
      smartCaret = {true}
      value={value}
      onChange={setValue}
      style={{height: 50, width: 200}}
      error={Boolean(errors.phone_number)}
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

      /> */}




              </NameGrid>


{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */}



                  {/* Email  */}
              <NameGrid item xs={12}>
                
              <LabelBox for='email'>
              Email address
              </LabelBox> 

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
              </NameGrid>


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



              {/* Password  */}
              <InputLabelGrid item xs={12}>
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
        
          <LabelBox for='password1'>
          Password
          </LabelBox> 

          <TextField
           error={Boolean(errors.password1)}
           id="outlined-adornment-password"

          // helperText={errors.password1?.message}

            sx={{
              [`& fieldset`]:{
                borderRadius: "6px" }
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
            {...register("password1",  {required: {
              value: true,
              message: "Password is required",
              
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
          onChange={passwordStrengthChange }
            helperText={errors.password1?.message}
            
            placeholder="Password here"


            inputProps={{
              style: {
                height: "0.5rem",
              },
            }}
          />

          <Typography sx={{fontFamily: 'Source Sans Pro',  fontWeight: 400, 
          size: 12, fontStyle: "normal", marginTop: 1}}>
          Password strength
          </Typography>

        <PasswordStrengthBar
          password={inputValue}
          minLength={6}
          minScore={4}
          barColors="yellow"
          
          scoreWords={['weak😪', 'okay 😅', 'strong 💪🏾', 'stronger', 'Excellent' ]}
          onChangeScore={(score, feedback) => {
            console.log(score, feedback);
            setPassSuggestion({...feedback.warning})
            
          }}
        />

        {console.log("Password Suggestion: ", passsuggestion)}
            
        </FormControl>
              </InputLabelGrid>
      



              {/* Confrim Password */}
              


        {/* End of coonfirm pssword grid */}


        

              {/* <Grid item xs={12}>
                <TextField type="password"
                  error={errors.password2}
                  fullWidth
                  label="Confirm Password"
                  {...register("password2", {validate: (value) =>
                    value === password1 || "The passwords do not match",
                    minLength: {
                      value: 6,
                      message: "The Minimux length is 6"
                    }}, 
                   )}
                  // autoComplete="new-password"
                  helperText={errors.password2?.message}

                  inputProps={{
                    style: {
                      height: "0.5rem",
                      
                    },
                  }}
                
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





            <Button
              type="submit"
              
              fullWidth
              variant="contained"
              sx={{ marginY: 2, p: "15px 8px",  background: "linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)",
              height: "46px;" }}
            >
              <Typography variant='button' component="p" 
              sx={{fontFamily: "Helvetica Neue", fontWeight: 500, fontSize: "14px",
               lineHeight: "16px", color: "#FCFCFF", }}>
                Create account 
              </Typography> 
            </Button>


            <Grid container justifyContent="center" 
            sx={{marginBottom: 1}}>
              <Grid item>


              

                <Link component={RouterLink} to="login"
                style={{ color: "#000000", textDecoration: "none"}}
                 variant="body2">
                  <Typography sx={{fontFamily: "Helvetica Neue", fontWeight: 400, fontSize: "14px", lineHeight: "16px"}}>
                  👋🏾 Already have an account? 
                  <span style={{color: "#7833EE", 
                  textDecoration: "underline", 
                  }} 
                  
                  > Login</span>
                  </Typography>
                </Link>





              </Grid>
            </Grid>
          </Box>

          

          
        </Box>

        </SignupPaper>


        {/* </Paper> */}
       
      </Box>
    {/* </MainContainerBox> */}
      </Box>
    // {/* </ThemeProvider> */}
  );
}

