import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';


//Phone Input 
import 'react-phone-input-2/lib/style.css'
// import PhoneTextField from "mui-phone-textfield";

//another
import ReactPhoneInput from 'react-phone-input-material-ui';


//Animations
import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';



import signupImg from "../../../assets/images/signup2.jpg"
import EyeIcon from "../../../assets/svg/eye.svg"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


// import { GlobalReactPhone, GlobalTextfieldEmail, PageSubtitle, PageTitle, TextFieldCustom } from './style/signup-styled';

import { GlobalErrorHelperText, GlobalInputLabel, GlobalPaperStyle, GlobalTextfieldEmail, GlobalTextField, GlobalPageHeader, GlobalSubPageHeader, GlobalReactPhone, GlobalPageBackground, GlobalInlaksText } from '../../../assets/GlobalStyled/Globalstyles';





//API PROTOCOL
const baseUrl = "https://banking-api.inlakssolutions.com/accounts/v1/signup/"



//STYLE FOR PHONE INPUT COMPONENT

const styles = {
  fontFamily: "Poppins",
  fontSize: 12,
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "#7833EE"
    }
  },
  "& fieldset": {
    borderRadius: "6px"
  },
  "& .MuiInputBase-root": {
    height: "2rem"
  }
};






const SignUpFormError = (props) => {

  const { value, defaultCountry, onChange, classes } = props;



  const { handleSubmit, register, setValue, formState: {errors}, reset,} = useForm({
    mode: "onTouched",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password1: "",
    }
  })

  //router
  const navigate = useNavigate();


  // REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const [loadingInProgress, setLoadingInProgress] = useState(false);
// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Password adornment
const [showPassword, setShowPassword] = useState(false);


//background Color
const backgroundColorText = {
  background: 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
};


//onSubmit Function
const onSubmit = (data) => {
  console.log("Form Data", data)
}


//React Spinner 
useEffect(() => {
  setLoadingInProgress(true)
  const timer = setTimeout(() => {
    setLoadingInProgress(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);


  //REACT SPINNER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const Spinner = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "colummn",
          height: "100vh",
          backgroundImage: `url(${signupImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover', 
          objectFit: "cover",
        }}
      >
        <GridLoader color="#8F45F2" size={25} />
      </Box>
    );
  };




  return (
    <>
    

    {loadingInProgress ? (
        <Spinner />
      ) : ( 


        <GlobalPageBackground

      >

      {/* <InlaksText sx={{mt: 5}}>
      Inlaks 
      </InlaksText> */}

      <GlobalInlaksText>
        Inlaks
      </GlobalInlaksText>


      {/* <Paper elevation={1} sx={{display: "flex", flexDirection: "column", rowGap: 5, width: {xs: "100%", sm: 600 }, height: "80vh", padding: '0px 30px', borderRadius: 10, fontFamily: "Poppins" }} > */}

      <GlobalPaperStyle elevation={1} >



      <Box sx={{}}>
        <GlobalPageHeader>
          Let’s get started
        </GlobalPageHeader>

        <GlobalSubPageHeader>
        Explore banking and financial solutions that are right for you.
        </GlobalSubPageHeader>

        </Box>






        <Grid container spacing={2} sx={{padding: "1px 30px"}}>

        <Grid item xs={12} sm={6}>

        <GlobalInputLabel htmlFor='first_name'>First Name</GlobalInputLabel>
        <GlobalTextField  type="text"
          id="first_name"
          fullWidth
          error={Boolean(errors.first_name)}
            variant="outlined"
      
        {...register("first_name", {required: {
        value: true,
        message: "First name is required"
        }, 

        })} 

        // helperText={errors.first_name?.message}

        placeholder='eg. Joseph'
      
        />

        { (errors.first_name?.message  ) &&
        <GlobalErrorHelperText>{errors.first_name?.message}</GlobalErrorHelperText> 
        }

        </Grid>





        {/* Last name TextField  */}
        <Grid item xs={12} sm={6}>

        <GlobalInputLabel htmlFor='last_name'>Last Name</GlobalInputLabel>
          <GlobalTextField type="text"
          id="last_name"
          fullWidth
            error={Boolean(errors.last_name)}

            {...register("last_name", {required: {
        value: true,
        message: "Last name is required"
        }, 

        })} 
            
            variant="outlined" 
          placeholder='eg. Smith'
         
     
          />

        { (errors.last_name?.message  ) &&
        <GlobalErrorHelperText>{errors.last_name?.message}</GlobalErrorHelperText> 
        }

        </Grid>


        {/* Phone number  */}

        <Grid item xs={6}>
          <GlobalInputLabel htmlFor='phone_number'>Phone Number</GlobalInputLabel>

        

          {/* <GlobalReactPhone component={TextField} 
        id='phone_number'
        value={value}
        country={'gh'}
        error={Boolean(errors.phone_number)}
        onChange={onChange}
        enableSearch={true}
        disableSearchIcon={true}
        inputStyle={styles}
        inputProps={{
          maxLength: 16,
        }}

        {...register("phone_number", {required: {
          value: true,
          message: "phone_number is required"
          }, 
  
          })} 

       
        /> */}


        

{ (errors.phone_number?.message  ) &&
        <GlobalErrorHelperText>{errors.phone_number?.message}</GlobalErrorHelperText> 
        }



          {/* <ReactPhoneInput /> */}

        </Grid>



        {/* Email Address  */}

        <Grid item xs={12} sm={12}>
          <GlobalInputLabel htmlFor='email'>Email Address</GlobalInputLabel>

          <GlobalTextField fullWidth id='email' />


        </Grid>


        <Grid item xs={12} sm={12}>
          <GlobalInputLabel htmlFor='password'>Password</GlobalInputLabel>

          <GlobalTextField fullWidth id='password' />

        </Grid>



        <Grid item xs={12} sm={12}>

         

      
        </Grid>





         
        {/* end of the Grid container  */}
        </Grid>




      </GlobalPaperStyle>
      </GlobalPageBackground>

      ) }



    




  
    
    </>
  )
}

export default SignUpFormError
