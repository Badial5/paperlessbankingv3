import { Container, CssBaseline, Box, Typography, Stack, TextField, Grid, Button, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'

import signupImg from "../../..//assets/images/signup2.jpg"


const PhoneOtp = () => {
  // otp states
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);



  //OTP useEffect
  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    

    return () => {
      clearInterval(interval);
      
    };
  });


  


  //send OTP
  const sendOTP = () => {
    setMinutes(0);
    setSeconds(59);
  }

  //resend OTP
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(59);
  };



  return (

    // background image box 
    <Box style={{
       
      // backgroundColor: "yellow", signupImg
      backgroundImage: `url(${signupImg})` ,
      padding: "20px 20px",
      // objectFit: "cover",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      // height: "120%",
      width: "100%", height: "100vh",
      backgroundRepeat: 'no-repeat', width: "100%",
      
    }}>
       
        <CssBaseline />



    <Box style={{display:"flex", alignItems: "center", 
  marginTop: 50, width: "100%"}}>

        <Paper elevation={24} 
      sx={{width: {xs: 500, sm: 500, md: 610, lg: 500, xl: 500}, display: "flex", justifyContent: "center",  marginLeft: "auto", marginRight: "auto",
      // width: {xs: 430, sm: 450, md: 410, lg: 500, xl: 500},
      
       borderRadius: "6px",
      // height: {xs: "132vh", sm: "127vh", md: "130vh", lg: "120h", xl: "120vh"}, 
      // height: "397px", 
        height: "420px",       
      // height: "27.8125 rem",
      width: "496px", 
      backgroundColor: "white" }}>

        <Box
          sx={{
            marginTop: "5px",
            display: 'flex',
            flexDirection: "column",
            
            alignItems: 'center',
            height: "50vh",
            
          }}>
        
       
       <Box sx={{marginTop: 3}}>

        <Typography component="h1" 
          sx={{color: "#7833EE", fontFamily: "Dela Gothic One", fontSize: "20px", fontWeight: 700, 
          lineHeight: "29px"}}>
            Verify your mobile number
          </Typography>

          <Typography sx={{fontFamily: "Helvetica Neue", fontWeight: 400, fontSize: "14px", lineHeight: "21px",
        color: "#434344", marginY: 2}}>
          Enter the 6 digit code sent to your phone number: <br /> <span style={{display: "flex", 
        justifyContent: "center", }}> (+233) 025 3232 </span>
          </Typography>

          </Box>



          <Grid container spacing={2} sx={{marginY: 3}}>

            

            {/* Grid container  */}
          </Grid>



      {/* <Grid container spacing={2} sx={{marginY: 3}}> */}
          <Grid item xs={12} sm={6} sx={{marginTop: 1}}>

              {/* <Typography>
              { minutes == 0 && seconds == 0 ?
                "I didn’t receive  a code" :
                "" }
              </Typography> */}

              <Typography textAlign="center" sx={{color: "#4A4AF4"}}>
              {/* Resend in {seconds > 0 || minutes > 0 ? (
            <>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </>
          ) : (
            <Button
            onClick={resendOTP}
            >Didn't recieve code?
            </Button>
          )} */}




{/* { minutes !== 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        } */}




          {seconds > 0 || minutes > 0 ? (
            <>
              Resend in 
              {minutes == 0 ? ` ${minutes}` : minutes}
              
              :
              {seconds < 10 ? `0${seconds}` : seconds}
            </>
          ) : (
            // <p>Didn't recieve code?</p>

            <Typography variant='link'
            disabled={seconds > 0 }
            style={{
              color: seconds > 0  && "#4A4AF4", 
              textDecoration: "underline",
              cursor: "pointer"
            }}
            onClick={resendOTP}
            sx={{color: "#4A4AF4"}}
          >
            Resend Code
          </Typography>

          )}


              </Typography>




            </Grid>

  
        <Grid item xs={12} sm={6} sx={{marginTop: 3, width: 300}}>
      

        <Button
              type="submit"
              
              style={{
                backgroundColor: seconds > 0  ? "#F3F3F3" : "#7833EE"
              }}
              fullWidth
              variant="contained"
              
              sx={{ my: 1, p: "15px 8px",  }}
              
            >
              <Typography variant='button' component="p" 
              sx={{fontFamily: "Helvetica Neue", fontWeight: 500, fontSize: "14px", lineHeight: "16px", color: "#FCFCFF", }}>
                Continue 
              </Typography>
        </Button>



        </Grid>



        </Box>

        </Paper>

        </Box>



 {/* background image box */}
    </Box>
  )
}

export default PhoneOtp
