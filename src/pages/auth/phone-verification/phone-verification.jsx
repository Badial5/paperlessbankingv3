import { Box, Button, TextField, Typography, Collapse } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useForm, } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { EmailContext } from '../../../context/emailContext'; 



// =========================== REACT ANIMATION SPINNER =========================================
//REACT ANIMATION SPINNER 
// import { ClipLoader } from 'react-spinners/ClipLoader';
import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';






//Image
import signupImg from "../../../assets/images/signup2.jpg"

import { PaperWrapper, InlaksText, PageHeader,
  SubTitle, SixDigitBox, SixDigitTextField, IdidntReceive,
  ResendCode, ButtonSubmit, PageHeaderAndTitleContainer,
  
 } from "./phone.styles.js"
import { ContainerWrapper, ErrorAlert, ErrorAlertText } from '../sign-up/signup.styles';

 //I will work on it later during the clean code stage 
 // or optimization period
//  import OtpTimerConst from './const/Timer';


// const baseUrl = "https://api.inlakssolutions.com/accounts/v1/signup/"

// const resendOtpUrl = "https://api.inlakssolutions.com/accounts/v1/resend-activation-otp/"

// const activateAccount = "https://api.inlakssolutions.com/accounts/v1/activate-account/"

const resendOtpUrl = "https://banking-api.inlakssolutions.com/accounts/v1/resend-activation-otp/"
const activateAccount = "https://banking-api.inlakssolutions.com/accounts/v1/activate-account/"












const PhoneOtp = () => {

  // const { register, trigger, formState: { errors } } = useForm();

    // REACT COMPONENT USENAVIGATE
    const navigate = useNavigate();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 


  //react hookform 
  const { handleSubmit, register, watch, setValue, formState: {errors}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      otp: "",
      email: "",
      
      // password2: "",
      // tnc: ""
    }
  })


  //============================= SESSION STORAGE ==============================================
  const [storedEmail, setStoredEmail] = useState(null);

  //=================================== useEffect ===========================================

  useEffect(() => {
    setStoredEmail(sessionStorage.getItem("email"));
    // localStorage.clear("email")
  }, []);


  console.log("Session Storage Email Value: ", storedEmail)

  //error state
// const [error, setError] = useState(null) 

//OPEN OR CLOSE
const [open, setOpen] = useState(true);


  //SIX DIGITS INPUTS 
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")
  const [value4, setValue4] = useState("")
  const [value5, setValue5] = useState("")
  const [value6, setValue6] = useState("")

  const [finalotp, setFinalOtp] = useState("")

  //Resend code ============================================================

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [message, setMessage] = useState("OTP sent to your phone");

  const [error, setError] = useState('')

  const [input, setInput] = useState('') // For input

// =========================================================================



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






//useEffect for the Timer function
useEffect(() => {
  let interval = null;
  if (minutes === 0 && seconds === 0) {
    clearInterval(interval);
    setIsButtonDisabled(!isButtonDisabled);
    setIsResendDisabled(true);
  } else {
    interval = setInterval(() => {
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }
  return () => clearInterval(interval);
}, [minutes, seconds]);




// end of useEffect time function =======================================



// UseEffect for the Timer Function =====================================
  // useEffect(() => {
  //   setFinal(value1 + value2 + value3 + value4 + value5 + value6)
  //   }, [])

    // console.log("Final Value: ", final)




  // Resend OTP code function ========================================================= 


  const resendOtp = async () => {
    try {
      // const res = await axios.post("/api/sendotp", {
      //   phoneNumber: "your phone number"
      // });

      const res = await axios.post(resendOtpUrl, {
        email: storedEmail,
        
      } );

      if (res.status === 200) {
        setMinutes(0);
        setSeconds(59);
        setIsButtonDisabled(true);
        setIsResendDisabled(false);
        setMessage("OTP resent to your email");
      }
    } catch (error) {
      setError(error.response.data)
      console.log("OTP Resend Error Message: ", error.response.data)
    }
  };


  // end of resend otp code =============================================================== 


//resend func ######################################

const handleTyping1 =  (e) => {
  setValue1(e.target.value)

  const elementInput2 = document.getElementById("2");
  elementInput2.focus()
}


  const handleTyping2 =  (e) => {
    setValue2(e.target.value)

    const elementInput2 = document.getElementById("3");
    elementInput2.focus()
  }

  const handleTyping3 =  (e) => {
    setValue3(e.target.value)

    const elementInput2 = document.getElementById("4");
    elementInput2.focus()
  }


  const handleTyping4 =  (e) => {
    setValue4(e.target.value)

    const elementInput2 = document.getElementById("5");
    elementInput2.focus()
  }


  const handleTyping5 =  (e) => {
    setValue5(e.target.value)
    // setIsButtonDisabled(false)

    const elementInput2 = document.getElementById("6");
    elementInput2.focus()
   
  }

  const handleTyping6 =  (e) => {
    setValue6(e.target.value)

    const elementInput2 = document.getElementById("6");
    elementInput2.focus()

    setIsButtonDisabled(!isButtonDisabled)
    // setIsButtonDisabled(false)

    console.log("isButtonDisabled in handleTyping6: ", isButtonDisabled)
  }



  // const inputRef1 = useRef(null);
  // const inputRef2 = useRef(null);
  // const inputRef3 = useRef(null);
  // const inputRef4 = useRef(null);
  // const inputRef5 = useRef(null);
  // const inputRef6 = useRef(null);



 
 // when input is changing this function will get called
 const onChange = (e) => {
  setInput((prevState) => (e.target.value))
  if(e.target.value.trim().length < 1) {   // Checking the length of the input
    setIsButtonDisabled(true)  // Disabling the button if length is < 1
  } else {
    setIsButtonDisabled(false)
  }
}



// const submitData = () => {Number(`${value1}${value2}${value3}${value4}${value5}${value6}`)}



// SUBMIT PHONE DATA ==========================================================================================

// const submitData = () => { 
//   const data = `${value1}${value2}${value3}${value4}${value5}${value6}`; 
//   // const data = Number(`${value1}${value2}${value3}${value4}${value5}${value6}`) 
//   console.log("Final Submit Value", data) 
//   // setFinalOtp(data)
//   // console.log("Final OTP CODE value: ", finalotp)
// }

console.log("Value 1: ", value1)
console.log("Value 2: ", value2)
console.log("Value 3: ", value3)
console.log("Value 4: ", value4)
console.log("Value 5: ", value5)
console.log("Value 6: ", value6)

// const allValues = () =>  Number(`${value1}${value2}${value3}${value4}${value5}${value6}`); 
// const allValues = () =>  (`${value1}${value2}${value3}${value4}${value5}${value6}`); 
// setValue("otpCode", allValues)
// console.log("All Values: ", allValues)

// console.log(submitData)

const datas = `${value1}${value2}${value3}${value4}${value5}${value6}`;

console.log("Data OTP: ", datas)

// setValue("otpCode", datas)



// console.log("CUSTOM OTP CODE: finalotp", finalotp) 

// console.log(submitData )
// ============================= TESTING ================================================================================



// const onSubmit = async (data) => {
//   console.log("Form Data: ", data)
//   const datas = `${value1}${value2}${value3}${value4}${value5}${value6}`;
//   // registerForm()
//   // reset()

//   try {
//     const response = await axios.post(activateAccount, datas)
//     const newResponse = response.data.datas
//     console.log("newResponse value: ", newResponse)
   

//     navigate("/user-dashboard")
 
//     console.log("Successful: ", newResponse)
//   } catch (error) {
//     setError(error.response.data.datas)
//     console.log("Error Message: ", error.response.data.datas)
//   }


// }



// const emailContext = useContext(EmailContext); 


// console.log("EMail Context: ", emailContext)
// ============================== CORRECT ONE ========================================================================= 

const onSubmit = async (data) => {
  console.log("Form Data: ", data)
  // registerForm()
  // reset()

  try {
    const response = await axios.post(activateAccount, {
      email: storedEmail,
      otp: data.otp,
    })
    const newResponse = response.data
    // console.log(newResponse)
    // newResponse()

    // navigate("/landing-page")
    navigate("/user-dashboard")
 
    console.log("Successful: ", newResponse)
  } catch (error) {
    setError(error.response.data)
    console.log("Error Message: ", error.response.data)
  }


}






// =============================================================================================================


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
        // backgroundSize: 'cover', 
        objectFit: "cover",
      }}
    >
      <GridLoader color="#8F45F2" size={25} />
    </Box>
  );
};









  return (
    //Background Wallpaper

    <>

{loadingInProgress ? (
        <Spinner />
      ) : (



    <Box sx={{
       
      // backgroundColor: "yellow", signupImg
      backgroundImage: `url(${signupImg})` ,
     
      // objectFit: "cover",
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      display: "flex", justifyContent: "center",
      alignItems: "center",

      width: "100vw",
      height: "100vh",
       flexDirection: "column",
      backgroundRepeat: 'no-repeat', width: "100%",
    
    }}>
{/* ===================================================================================  */}


              {/* Inlak Text  */}

   
      {/* <InlaksText textAlign="center">
        Inlaks
      </InlaksText> */}

      <InlaksText textAlign="center">
          Inlaks
      </InlaksText>



{/* =======================================================================================  */}
      

{/* ============================================================================================  */}

{/* <PaperWrapper container component="form" 
maxWidth="xs"
sx={{}}
onSubmit={handleSubmit(onSubmit)}> */}

<ContainerWrapper  maxWidth="xs"
component="form" onSubmit={handleSubmit(onSubmit)}
sx={{
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  // justifyContent: 'center',
  // mx: 'auto',
 
  padding: '20px 30px',
  mb: 15,
  // backgroundColor: "red"
  // minHeight: {xs: "50vh", md: "80vh", lg: "70vh"},
  
}}>

  

<PageHeaderAndTitleContainer sx={{mr: "auto", ml: "auto", 
}}>
<PageHeader textAlign="center" sx={{fontFamily: "Poppins", fontWeight: 800, }}>

  {/* Verify  your mobile number */}
  Verify your email
</PageHeader>


<SubTitle textAlign="center"
sx={{fontFamily: "Poppins", fontWeight: 400, }}
>
Enter the 6 digit code sent to your email account: <br /> 
{/* (+233) 025 3232 */}
</SubTitle>

</PageHeaderAndTitleContainer>

{/* ====================================ERROR ALERT =====================================================  */}


{(error && open ) &&  
 <Collapse in={open}>  
        

<ErrorAlert severity="error" onClose={() => setOpen(!open)}
        sx={{
        "& .MuiAlert-icon": {
          color: "#fff"
        }, "& .MuiAlert-action": {
          color: "#fff"
        }, overflow: "hidden",  mr: "auto",
        ml: "auto",  width: "21.5rem", mb: 2,
        
         }}>
          <ErrorAlertText >
          {Object.values(error)} 
          {/* { Object.entries(error).map(([key, val])=> <p key={key}>{key}: {val}</p>) }  */}
          </ErrorAlertText>

          </ErrorAlert>

      
     </Collapse> 
}




















{/* =================================END OF ERROR ALERT ============================================================  */}
<SixDigitBox sx={{marginLeft: "auto", marginRight: "auto", height: {xs: 60, md: 60},
my: 1, display: "flex", justifyContent: "center"}}>

{/* <SixDigitTextField
style={{backgroundColor: "red"}}
>0</SixDigitTextField> */}

{/* <SixDigitTextField>
  0
</SixDigitTextField> */}

{/* <SixDigitTextField /> */}



{/* =================================================  */}

      {/* SIX DIGITS BOX  */}

{/* <SixDigitTextField type="tel" id="1"
onChange={handleTyping1}  inputProps={{ maxLength: 1 }}
 
sx={{
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
borderColor: "#7833EE"
    }
  }
}}
 
 /> */}
  
<SixDigitTextField type="tel" id="1" 
 onChange={handleTyping1} inputProps={{ maxLength: 1 }} 
 placeholder="0"
 sx={{ width: "3rem", height: "1rem", fontFamily: 'Helvetica Neue', borderRadius: "8px",
 textAlign: "center",
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
borderColor: "#7833EE"
    }
  }
}}

InputProps={{
  inputProps: {
    sx: {
      textAlign: 'center',
      height: "1rem",
      fontFamily: 'Helvetica Neue'
    },
  },
}}
 />




<SixDigitTextField type="tel" id="2"
 onChange={handleTyping2} inputProps={{ maxLength: 1 }} 
 placeholder="0"
 sx={{ width: "3rem", height: "1rem", fontFamily: 'Helvetica Neue', borderRadius: "8px",

 "& .MuiOutlinedInput-root.Mui-focused": {
   "& > fieldset": {
borderColor: "#7833EE"
   }
 }
}}

InputProps={{
  inputProps: {
    sx: {
      textAlign: 'center',
      height: "1rem",
      fontFamily: 'Helvetica Neue'
    },
  },
}}
 />


<SixDigitTextField type="tel" id="3"
onChange={handleTyping3} inputProps={{ maxLength: 1 }}
placeholder="0"
sx={{ width: "3rem", height: "1rem", fontFamily: 'Helvetica Neue', borderRadius: "8px",

"& .MuiOutlinedInput-root.Mui-focused": {
  "& > fieldset": {
borderColor: "#7833EE"
  }
}
}}

InputProps={{
  inputProps: {
    sx: {
      textAlign: 'center',
      height: "1rem",
      fontFamily: 'Helvetica Neue'
    },
  },
}}

/>


<SixDigitTextField type="tel" id="4"
onChange={handleTyping4} inputProps={{ maxLength: 1 }}
placeholder="0"
sx={{ width: "3rem", height: "1rem", fontFamily: 'Helvetica Neue', borderRadius: "8px",

"& .MuiOutlinedInput-root.Mui-focused": {
  "& > fieldset": {
borderColor: "#7833EE"
  }
}
}}

InputProps={{
  inputProps: {
    sx: {
      textAlign: 'center',
      height: "1rem",
      fontFamily: 'Helvetica Neue'
    },
  },
}}

/>


<SixDigitTextField type="tel" id="5"
onChange={handleTyping5} inputProps={{ maxLength: 1 }}

placeholder="0"
sx={{ width: "3rem", height: "1rem", 
fontFamily: 'Helvetica Neue', borderRadius: "8px",

"& .MuiOutlinedInput-root.Mui-focused": {
  "& > fieldset": {
borderColor: "#7833EE"
  }
}
}}

InputProps={{
  inputProps: {
    sx: {
      textAlign: 'center',
      height: "1rem",
      fontFamily: 'Helvetica Neue'
    },
  },
}}

/>


{/* <SixDigitTextField type="tel" id="6"
onChange={handleTyping6}
 inputProps={{ maxLength: 1 }}

sx={{
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
borderColor: "#7833EE"
    }
  }
}}

{...register("final", {required: "Required"})}
// value={input} 
// onChange={onChange}

/> */}


<SixDigitTextField type="tel" id="6"
onChange={handleTyping6} inputProps={{ maxLength: 1,}}
placeholder="0"
sx={{ width: "3rem", height: "1rem", fontFamily: 'Helvetica Neue', 

"& .MuiOutlinedInput-root.Mui-focused": {
  "& > fieldset": {
borderColor: "#7833EE"
  }
}
}}

InputProps={{
  inputProps: {
    sx: {
      textAlign: 'center',
      height: "1rem",
      fontFamily: 'Helvetica Neue'
    },
  },
}}

/>




{/* =====================================================  */}

</SixDigitBox>

{/* ==============================================================  */}
  <Box sx={{ml: "auto", mr: "auto", display: "flex", 
flexDirection: "column", alignItems: "center", }}>

  <Box sx={{display: "flex", 
flexDirection: "column", alignItems: "center",}}>
    
   <IdidntReceive textAlign="center">
    I didn’t receive  a code
    </IdidntReceive>


{/* ====================================================================  */}



    <ResendCode sx={{ }}>




    {seconds > 0 || minutes > 0 ? (
            <>
              Resend in 
              {minutes === 0 ? ` ${minutes}` : minutes}
              
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
            onClick={resendOtp} 
            sx={{color: "#4A4AF4"}}
          >
            Resend Code
          </Typography>

          )}
      

    </ResendCode> 
    </Box>
    </Box>

 {/* ==========================================================================  */}

      {/* Submit Button  */}



      {/* <ButtonSubmit type='submit'
      disabled={isButtonDisabled}>
        Submit
      </ButtonSubmit> */}

      {/* <Box sx={{ml: 30, mr: 50}}>
            <Button variant="contained" sx={{ml: "auto", mr: "auto"}}>
              COntinue
            </Button>
      </Box> */}
<Box sx={{padding: '20px 30px',}}>
<ButtonSubmit
              type="submit"
              // onClick={ () => setValue("otpCode", finalotp)} 
              onClick={() => setValue("otp", datas)}
              
              // {...register("otpCode", finalotp )}
              // // onTextChange={(value) => setValue('lastChange', value))} 
              
              style={{
                backgroundColor: 
                // seconds > 0 && isButtonDisabled === false  ?  " #8F45F2" : "#212121",
                   isButtonDisabled === false   ?   "#8F45F2" : "#F3F3F3" ,  
                // seconds === 0 && isButtonDisabled === true  ?  " #8F45F2" : "#F3F3F3", 
                // seconds === 0 && isButtonDisabled === true  ?    "#F3F3F3" : " #8F45F2" ,

                color: isButtonDisabled === false   ?   "#fff" : "#fff",

                background: `linear-gradient(to right, ${isButtonDisabled === false ? "#7833EE" :  "#F3F3F3"} 0%, ${isButtonDisabled === false ? "#A554F6" :  "#F3F3F3"} 100%)`,
               
              }}
              fullWidth
              variant="contained"
            >


              <Typography variant='button' component="p" 
              sx={{fontFamily: "Helvetica Neue", 
              fontWeight: 500, fontSize: "14px", 
              lineHeight: "16px", color: "#B8B8B9", 
              color: `linear-gradient(to right, ${isButtonDisabled === false ? "#fff" :  "#fff"} 0%, ${isButtonDisabled === false ? "#fff" :  "fff"} 100%)`  }}>
                Continue 
              </Typography>
        </ButtonSubmit>
</Box>





{/* ================================================================================  */}







{/* </PaperWrapper>  */}

</ContainerWrapper>


{/* ================================================================================================  */}


{/* =============================================================================================  */}
      
    </Box>
  
      )}

    </>
  )
}

export default PhoneOtp
