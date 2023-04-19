
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// =========================== REACT ANIMATION SPINNER =========================================
//REACT ANIMATION SPINNER 
// import { ClipLoader } from 'react-spinners/ClipLoader';
import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';





import { createTheme, ThemeProvider } from '@mui/material/styles';



//image
import Congratulation from "../../assets/logo/congrats.jpg"
import signupImg from "../../assets/images/signup2.jpg"



import {  InlaksText, 
 PaperWrapper,
 PageHeaderAndTitleContainer,  BottonComp, LoginText, InputFieldGrid2, ImageContainer, YourPassHasBeenSet, SubTitle2,
 } from "./pass-congrats.styles"
import { Typography } from '@mui/material';
import { useEffect } from 'react';


// import PhoneInput from 'react-phone-number-input'

const baseUrl = "https://api.inlakssolutions.com/accounts/v1/login/"

const theme = createTheme();

console.log("ThemeProvider Props:", theme)














export default function PassCongrats() {


// REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const [loadingInProgress, setLoadingInProgress] = useState(false);
// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



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
          height: "100vh",
          backgroundImage: `url(${signupImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover', 
          objectFit: "cover",
        }}
      >
        {/* <PacmanLoader color="#8F45F2" size={25} /> */}

        <RingLoader color="#8F45F2" size={100} />
      </Box>
    );
  };
  


  return (
    // <ThemeProvider theme={theme}>

     <>
    {loadingInProgress ? (
      <Spinner />
    ) : (

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
    //   width: "100vw",
    width: "100vh",
      height: "100vh",
       flexDirection: "column",
      backgroundRepeat: 'no-repeat', width: "100%",
      
    }}>
       <CssBaseline />



      

        <InlaksText>
          InLaks 
        </InlaksText>

      {/* Paper Wrapper  */}
    <PaperWrapper maxWidth="xs" sx={{padding: "20px "}}>

        {/* Heading  */}

        {/* Container  */}


       <ImageContainer sx={{display: "flex", justifyContent: "center"}}>

        <img src={Congratulation}  />
        



       </ImageContainer>

    


      {/* Container  */}
{/* <InputFieldGrid2 > */}

<PageHeaderAndTitleContainer sx={{
ml: "auto", mr: "auto",width: "100%", }}>

<YourPassHasBeenSet  >
Your password has been successfully reset!
</YourPassHasBeenSet>

{/* <Typography textAlign="center">
Your password has been successfully reset!
</Typography> */}

<SubTitle2 >
Please use your new password to log in to your account.
</SubTitle2>

</PageHeaderAndTitleContainer>


{/* </InputFieldGrid2> */}






<BottonComp type='submit' 
LinkComponent={RouterLink} to="/login"
sx={{padding: "5px 16px", 
ml: "auto", mr: "auto",width: "100%", width: {xs: "20rem", md: "23rem"}}}
>
  <LoginText>
    Login
  </LoginText>
</BottonComp>



      </PaperWrapper>


      </Box>

    )}

    </>

      
    // {/* </ThemeProvider> */}
  );
}


